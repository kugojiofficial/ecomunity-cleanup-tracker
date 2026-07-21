import { withSupabaseApi, sendSuccess, sendError, parseLimit, resolveOrderColumn } from "../../../lib/supabase/server";

const ORDERABLE_COLUMNS = ["created_at", "began_at", "ended_at", "participant_count", "name"] as const;

export default withSupabaseApi(async ({ req, res, supabaseAnon }) => {
  if (req.method !== "GET") {
    return sendError(res, "Method not allowed. Use GET.", 405);
  }

  const limit = parseLimit(req.query.limit);
  const order = resolveOrderColumn(req.query.order, ORDERABLE_COLUMNS, "created_at");
  const ascending = String(req.query.ascending ?? "false").toLowerCase() === "true";

  const { data, error } = await supabaseAnon
    .from("events")
    .select("id, name, created_at, began_at, ended_at, participant_count")
    .order(order, { ascending })
    .limit(limit);

  if (error) {
    console.error("Supabase fetch events error:", error);
    return sendError(res, "Failed to fetch events.", 500);
  }

  return sendSuccess(res, data ?? []);
});
