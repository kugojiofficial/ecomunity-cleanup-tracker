import type { ApiResponse } from "./common";
import { getSupabaseBrowserClient } from "../supabase/browser";

export type UserProfile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  points: number;
  total_collected_waste: number;
  total_event_hours: number;
  created_at: string; // join date
};

export async function getMyProfile(): Promise<ApiResponse<UserProfile | null>> {
  const supabase = getSupabaseBrowserClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { success: true, data: null };

  const { data, error } = await supabase
    .from("users")
    .select("id, first_name, last_name, points, total_collected_waste, total_event_hours, created_at")
    .eq("id", user.id)
    .single();

  if (error) return { success: false, error: error.message };
  return { success: true, data: data as UserProfile };
}
