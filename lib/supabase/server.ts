import type { NextApiRequest, NextApiResponse } from "next";
import { createClient, type PostgrestError, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function assertEnv(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return value;
}

export function createSupabaseAnonClient(): SupabaseClient {
  return createClient(
    assertEnv(supabaseUrl, "NEXT_PUBLIC_SUPABASE_URL"),
    assertEnv(supabaseAnonKey, "NEXT_PUBLIC_SUPABASE_ANON_KEY"),
    {
      auth: { persistSession: false },
      global: { headers: { "x-client-info": "supabase-js-next-api" } },
    }
  );
}

export function createSupabaseAdminClient(): SupabaseClient {
  return createClient(
    assertEnv(supabaseUrl, "NEXT_PUBLIC_SUPABASE_URL"),
    assertEnv(supabaseServiceRoleKey, "SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: { persistSession: false },
      global: { headers: { "x-client-info": "supabase-js-next-api" } },
    }
  );
}

export type ApiSuccess<T> = { success: true; data: T };
export type ApiError = { success: false; error: string };
export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export type SupabaseApiContext = {
  req: NextApiRequest;
  res: NextApiResponse<ApiResponse<unknown>>;
  supabaseAdmin: SupabaseClient;
  supabaseAnon: SupabaseClient;
};

export function sendSuccess<T>(res: NextApiResponse<ApiResponse<T>>, data: T, statusCode = 200) {
  return res.status(statusCode).json({ success: true, data });
}

export function sendError(res: NextApiResponse<ApiResponse<null>>, error: string, statusCode = 400) {
  return res.status(statusCode).json({ success: false, error });
}

export function isNoRowsError(error: PostgrestError | null): boolean {
  return error?.code === "PGRST116";
}

async function resolveAuthedUser(
  ctx: SupabaseApiContext
): Promise<{ userId: string } | null> {
  const { req, res, supabaseAnon } = ctx;

  const authHeader = req.headers.authorization;
  const token =
    typeof authHeader === "string" && authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length).trim()
      : null;

  if (!token) {
    sendError(res, "Authentication required.", 401);
    return null;
  }

  const { data, error } = await supabaseAnon.auth.getUser(token);
  if (error || !data.user) {
    sendError(res, "Invalid or expired session.", 401);
    return null;
  }

  return { userId: data.user.id };
}

export async function requireUser(
  ctx: SupabaseApiContext
): Promise<{ userId: string } | null> {
  return resolveAuthedUser(ctx);
}

export async function requireAdmin(
  ctx: SupabaseApiContext
): Promise<{ userId: string } | null> {
  const authed = await resolveAuthedUser(ctx);
  if (!authed) return null;

  const { res, supabaseAdmin } = ctx;
  const { data: profile, error } = await supabaseAdmin
    .from("users")
    .select("role")
    .eq("id", authed.userId)
    .single();

  // Developer is a strict superset of admin.
  const role = profile?.role;
  if (error || (role !== "admin" && role !== "developer")) {
    sendError(res, "Admin privileges required.", 403);
    return null;
  }

  return authed;
}

export async function requireDeveloper(
  ctx: SupabaseApiContext
): Promise<{ userId: string } | null> {
  const authed = await resolveAuthedUser(ctx);
  if (!authed) return null;

  const { res, supabaseAdmin } = ctx;
  const { data: profile, error } = await supabaseAdmin
    .from("users")
    .select("role")
    .eq("id", authed.userId)
    .single();

  if (error || profile?.role !== "developer") {
    sendError(res, "Developer privileges required.", 403);
    return null;
  }

  return authed;
}

export function parseLimit(raw: unknown, fallback = 100, max = 1000): number {
  const parsed = Number(Array.isArray(raw) ? raw[0] : raw);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }
  return Math.min(Math.floor(parsed), max);
}

export function resolveOrderColumn(raw: unknown, allowed: readonly string[], fallback: string): string {
  const value = Array.isArray(raw) ? raw[0] : raw;
  return typeof value === "string" && allowed.includes(value) ? value : fallback;
}

export function withSupabaseApi(handler: (ctx: SupabaseApiContext) => Promise<void> | void) {
  return async function apiHandler(req: NextApiRequest, res: NextApiResponse<ApiResponse<unknown>>) {
    let adminClient: SupabaseClient | undefined;
    let anonClient: SupabaseClient | undefined;

    try {
      await handler({
        req,
        res,
        get supabaseAdmin() {
          return (adminClient ??= createSupabaseAdminClient());
        },
        get supabaseAnon() {
          return (anonClient ??= createSupabaseAnonClient());
        },
      });
    } catch (error) {
      console.error("Supabase API handler error:", error);
      const message = error instanceof Error ? error.message : "Unexpected server error.";
      return sendError(res, message, 500);
    }
  };
}
