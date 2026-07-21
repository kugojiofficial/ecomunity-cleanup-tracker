import { withSupabaseApi, sendSuccess, sendError, requireAdmin } from "../../../lib/supabase/server";

type InsertEventBody = {
  began_at: string;
  ended_at: string;
  participant_count: number;
  name?: string | null;
};

export default withSupabaseApi(async (ctx) => {
  const { req, res, supabaseAdmin } = ctx;

  if (req.method !== "POST") {
    return sendError(res, "Method not allowed. Use POST.", 405);
  }

  if (!(await requireAdmin(ctx))) return;

  if (!req.body || typeof req.body !== "object") {
    return sendError(res, "Request body must be a JSON object.", 400);
  }

  const { began_at, ended_at, participant_count, name } = req.body as InsertEventBody;

  const hasName = name !== undefined && name !== null;
  if (hasName && (typeof name !== "string" || !name.trim())) {
    return sendError(res, "name must be a non-empty string when provided.", 400);
  }

  if (typeof began_at !== "string" || !began_at.trim()) {
    return sendError(res, "began_at is required and must be a string.", 400);
  }

  if (typeof ended_at !== "string" || !ended_at.trim()) {
    return sendError(res, "ended_at is required and must be a string.", 400);
  }

  if (typeof participant_count !== "number" || participant_count < 0) {
    return sendError(res, "participant_count is required and must be a non-negative number.", 400);
  }

  const beganMs = Date.parse(began_at);
  const endedMs = Date.parse(ended_at);

  if (Number.isNaN(beganMs) || Number.isNaN(endedMs)) {
    return sendError(res, "began_at and ended_at must be valid ISO timestamps.", 400);
  }

  if (endedMs < beganMs) {
    return sendError(res, "ended_at cannot be before began_at.", 400);
  }

  const { data, error } = await supabaseAdmin
    .from("events")
    .insert({
      began_at,
      ended_at,
      participant_count,
      ...(hasName ? { name } : {}),
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert event error:", error);
    return sendError(res, "Failed to insert event.", 500);
  }

  return sendSuccess(res, data ?? null);
});
