import { withSupabaseApi, sendSuccess, sendError, parseLimit, resolveOrderColumn } from "../../../lib/supabase/server";

const ORDERABLE_COLUMNS = ["created_at", "waste_type", "event_id"] as const;

export default withSupabaseApi(async ({ req, res, supabaseAnon }) => {
  if (req.method !== "GET") {
    return sendError(res, "Method not allowed. Use GET.", 405);
  }

  const limit = parseLimit(req.query.limit);
  const order = resolveOrderColumn(req.query.order, ORDERABLE_COLUMNS, "created_at");
  const ascending = String(req.query.ascending ?? "false").toLowerCase() === "true";

  const { data, error } = await supabaseAnon
    .from("waste_logs")
    .select("id, event_id, waste_type, image_uri, user_id, latitude, longitude, accuracy_meters, created_at")
    .order(order, { ascending })
    .limit(limit);

  if (error) {
    console.error("Supabase fetch waste logs error:", error);
    return sendError(res, "Failed to fetch waste logs.", 500);
  }

  return sendSuccess(res, data ?? []);
});
