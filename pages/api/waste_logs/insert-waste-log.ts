import { withSupabaseApi, sendSuccess, sendError, requireUser } from "../../../lib/supabase/server";
import { Constants } from "../../../lib/supabase/database.types";

type InsertWasteLogBody = {
  id?: string;
  event_id: string;
  waste_type: string;
  latitude: number;
  longitude: number;
  accuracy_meters?: number | null;
  image_uri?: string | null;
};

const WASTE_TYPES: readonly string[] = Constants.public.Enums.waste_type;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export default withSupabaseApi(async (ctx) => {
  const { req, res, supabaseAdmin } = ctx;

  if (req.method !== "POST") {
    return sendError(res, "Method not allowed. Use POST.", 405);
  }

  const authed = await requireUser(ctx);
  if (!authed) return;

  if (!req.body || typeof req.body !== "object") {
    return sendError(res, "Request body must be a JSON object.", 400);
  }

  const {
    id,
    event_id,
    waste_type,
    latitude,
    longitude,
    accuracy_meters = null,
    image_uri = null,
  } = req.body as InsertWasteLogBody;

  if (id !== undefined && (typeof id !== "string" || !UUID_RE.test(id))) {
    return sendError(res, "id must be a UUID when provided.", 400);
  }

  if (typeof event_id !== "string" || event_id.trim() === "") {
    return sendError(res, "event_id is required and must be a non-empty string.", 400);
  }

  if (typeof waste_type !== "string" || waste_type.trim() === "") {
    return sendError(res, "waste_type is required and must be a non-empty string.", 400);
  }

  if (!WASTE_TYPES.includes(waste_type)) {
    return sendError(res, `waste_type must be one of: ${WASTE_TYPES.join(", ")}.`, 400);
  }

  if (typeof latitude !== "number" || typeof longitude !== "number") {
    return sendError(res, "Latitude and longitude must be numbers.", 400);
  }

  if (latitude < -90 || latitude > 90) {
    return sendError(res, "Latitude is out of range.", 400);
  }

  if (longitude < -180 || longitude > 180) {
    return sendError(res, "Longitude is out of range.", 400);
  }

  if (image_uri !== null && typeof image_uri !== "string") {
    return sendError(res, "image_uri must be a string when provided.", 400);
  }

  const { data: event, error: eventError } = await supabaseAdmin
    .from("events")
    .select("began_at, ended_at")
    .eq("id", event_id)
    .single();

  if (eventError || !event) {
    return sendError(res, "Event not found.", 404);
  }

  const nowMs = Date.now();
  if (event.began_at && nowMs < new Date(event.began_at).getTime()) {
    return sendError(res, "This event hasn't started yet — you can't log trash to it.", 409);
  }
  if (event.ended_at && nowMs > new Date(event.ended_at).getTime()) {
    return sendError(res, "This event has already ended — you can't log trash to it.", 409);
  }

  const { data, error } = await supabaseAdmin
    .from("waste_logs")
    .insert({
      ...(id ? { id } : {}),
      event_id,
      waste_type,
      latitude,
      longitude,
      accuracy_meters,
      image_uri,
      user_id: authed.userId,
    })
    .select()
    .single();

  if (error) {
    console.error("Supabase insert error:", error);

    if (error.code === "23505") {
      return sendError(res, "A log with this id already exists.", 409);
    }
    return sendError(res, "Failed to insert waste log.", 500);
  }

  return sendSuccess(res, data ?? null);
});
