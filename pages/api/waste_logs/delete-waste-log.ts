import { withSupabaseApi, sendSuccess, sendError, isNoRowsError, requireAdmin } from "../../../lib/supabase/server";

export default withSupabaseApi(async (ctx) => {
  const { req, res, supabaseAdmin } = ctx;

  if (req.method !== "DELETE") {
    return sendError(res, "Method not allowed. Use DELETE.", 405);
  }

  if (!(await requireAdmin(ctx))) return;

  const { id } = req.query;
  const recordId = typeof id === "string" ? id : Array.isArray(id) ? id[0] : undefined;

  if (!recordId) {
    return sendError(res, "Missing 'id' query parameter.", 400);
  }

  const { data, error } = await supabaseAdmin
    .from("waste_logs")
    .delete()
    .eq("id", recordId)
    .select()
    .single();

  if (error) {
    if (isNoRowsError(error)) {
      return sendError(res, "Waste log not found.", 404);
    }
    console.error("Supabase delete error:", error);
    return sendError(res, "Failed to delete waste log.", 500);
  }

  return sendSuccess(res, data ?? null);
});
