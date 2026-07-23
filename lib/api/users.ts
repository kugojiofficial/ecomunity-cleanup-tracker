import type { ApiResponse } from "./common";
import { getSupabaseBrowserClient } from "../supabase/browser";

export type UserProfile = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  points: number;
  total_collected_waste: number;
  total_event_hours: number;
  created_at: string;
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

export async function updateMyName(
  firstName: string,
  lastName: string
): Promise<ApiResponse<null>> {
  const supabase = getSupabaseBrowserClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { success: false, error: "Not signed in." };

  const first_name = firstName.trim();
  const last_name = lastName.trim();

  const { error } = await supabase
    .from("users")
    .update({ first_name, last_name })
    .eq("id", user.id);
  if (error) return { success: false, error: error.message };

  await supabase.auth.updateUser({ data: { first_name, last_name } });
  return { success: true, data: null };
}
