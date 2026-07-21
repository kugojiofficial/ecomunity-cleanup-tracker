import { withSupabaseApi, sendSuccess, sendError, isNoRowsError, requireAdmin } from "../../../lib/supabase/server";
import { Constants } from "../../../lib/supabase/database.types";

const ALLOWED_FIELDS = [
  "event_id",
  "waste_type",
  "latitude",
  "longitude",
  "accuracy_meters",
  "image_url",
  "user_id",
] as const;

const WASTE_TYPES: readonly string[] = Constants.public.Enums.waste_type;

type UpdateWasteLogBody = {
  event_id?: string;
  waste_type?: string;
  latitude?: number;
  longitude?: number;
  accuracy_meters?: number | null;
  image_url?: string | null;
  user_id?: string | null;
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

  const body = req.body as UpdateWasteLogBody;

  if (body.latitude !== undefined && (typeof body.latitude !== "number" || body.latitude < -90 || body.latitude > 90)) {
    return sendError(res, "Latitude must be a number between -90 and 90.", 400);
  }

  if (body.longitude !== undefined && (typeof body.longitude !== "number" || body.longitude < -180 || body.longitude > 180)) {
    return sendError(res, "Longitude must be a number between -180 and 180.", 400);
  }

  if (body.waste_type !== undefined && !WASTE_TYPES.includes(body.waste_type)) {
    return sendError(res, `waste_type must be one of: ${WASTE_TYPES.join(", ")}.`, 400);
  }

  if (body.image_url !== undefined && body.image_url !== null && typeof body.image_url !== "string") {
    return sendError(res, "image_url must be a string when provided.", 400);
  }

  if (body.user_id !== undefined && body.user_id !== null && typeof body.user_id !== "string") {
    return sendError(res, "user_id must be a string when provided.", 400);
  }

  const updates: UpdateWasteLogBody = {};
  for (const field of ALLOWED_FIELDS) {
    if (body[field] !== undefined) {
      (updates as Record<string, unknown>)[field] = body[field];
    }
  }

  if (Object.keys(updates).length === 0) {
    return sendError(res, "No updatable fields provided.", 400);
  }

  const { data, error } = await supabaseAdmin
    .from("waste_logs")
    .update(updates)
    .eq("id", recordId)
    .select()
    .single();

  if (error) {
    if (isNoRowsError(error)) {
      return sendError(res, "Waste log not found.", 404);
    }
    console.error("Supabase update error:", error);
    return sendError(res, "Failed to update waste log.", 500);
  }

  return sendSuccess(res, data ?? null);
});
