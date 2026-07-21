import { withSupabaseApi, sendSuccess, sendError, isNoRowsError, requireAdmin } from "../../../lib/supabase/server";

const ALLOWED_FIELDS = ["began_at", "ended_at", "participant_count", "name"] as const;

type UpdateEventBody = {
  began_at?: string;
  ended_at?: string;
  participant_count?: number;
  name?: string;
};

export default withSupabaseApi(async (ctx) => {
  const { req, res, supabaseAdmin } = ctx;

  if (req.method !== "PATCH") {
    return sendError(res, "Method not allowed. Use PATCH.", 405);
  }

  if (!(await requireAdmin(ctx))) return;

  const { id } = req.query;
  const recordId = typeof id === "string" ? id : Array.isArray(id) ? id[0] : undefined;

  if (!recordId) {
    return sendError(res, "Missing 'id' query parameter.", 400);
  }

  if (!req.body || typeof req.body !== "object") {
    return sendError(res, "Request body must be a JSON object.", 400);
  }

  const body = req.body as UpdateEventBody;

  if (body.participant_count !== undefined && (typeof body.participant_count !== "number" || body.participant_count < 0)) {
    return sendError(res, "participant_count must be a non-negative number.", 400);
  }

  if (body.name !== undefined && typeof body.name !== "string") {
    return sendError(res, "name must be a string when provided.", 400);
  }

  const updates: UpdateEventBody = {};
  for (const field of ALLOWED_FIELDS) {
    if (body[field] !== undefined) {
      (updates as Record<string, unknown>)[field] = body[field];
    }
  }

  if (Object.keys(updates).length === 0) {
    return sendError(res, "No updatable fields provided.", 400);
  }

  const { data, error } = await supabaseAdmin
    .from("events")
    .update(updates)
    .eq("id", recordId)
    .select()
    .single();

  if (error) {
    if (isNoRowsError(error)) {
      return sendError(res, "Event not found.", 404);
    }
    console.error("Supabase update event error:", error);
    return sendError(res, "Failed to update event.", 500);
  }

  return sendSuccess(res, data ?? null);
});
