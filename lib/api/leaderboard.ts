import type { ApiResponse } from "./common";
import { getSupabaseBrowserClient } from "../supabase/browser";

export type LeaderboardEntry = {
  id: string | null;
  first_name: string | null;
  last_name: string | null;
  points: number | null;
  created_at: string | null; // join date
  rank: number | null;
};

export async function getLeaderboard(limit = 100): Promise<ApiResponse<LeaderboardEntry[]>> {
  const { data, error } = await getSupabaseBrowserClient()
    .from("leaderboard")
    .select("id, first_name, last_name, points, created_at, rank")
    .order("rank", { ascending: true })
    .limit(limit);

  if (error) return { success: false, error: error.message };
  return { success: true, data: (data ?? []) as LeaderboardEntry[] };
}
