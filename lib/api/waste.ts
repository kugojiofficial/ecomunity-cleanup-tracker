export type WasteLog = {
  id: string;
  event_id: string;
  waste_type: string;
  image_url: string | null;
  user_id: string | null;
  latitude: number;
  longitude: number;
  accuracy_meters: number | null;
  points: number;
  created_at: string | null;
};

export type InsertWasteLogInput = {
  event_id: string;
  waste_type: string;
  latitude: number;
  longitude: number;
  accuracy_meters?: number | null;
  image_url?: string | null;
};

export type UpdateWasteLogInput = Partial<{
  event_id: string;
  waste_type: string;
  latitude: number;
  longitude: number;
  accuracy_meters: number | null;
  image_url: string | null;
  user_id: string | null;
}>;

import { jsonFetch, type ApiResponse } from "./common";
import { getSupabaseBrowserClient } from "../supabase/browser";

export async function getWasteLogs(limit = 100, ascending = false): Promise<ApiResponse<WasteLog[]>> {
  const { data, error } = await getSupabaseBrowserClient()
    .from("waste_logs")
    .select(
      "id, event_id, waste_type, image_url, user_id, latitude, longitude, accuracy_meters, points, created_at"
    )
    .order("created_at", { ascending })
    .limit(limit);

  if (error) return { success: false, error: error.message };
  return { success: true, data: (data ?? []) as WasteLog[] };
}

export async function insertWasteLog(input: InsertWasteLogInput): Promise<ApiResponse<WasteLog>> {
  return jsonFetch<WasteLog>("/api/waste_logs/insert-waste-log", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function updateWasteLog(id: string, input: UpdateWasteLogInput): Promise<ApiResponse<WasteLog>> {
  return jsonFetch<WasteLog>(`/api/waste_logs/update-waste-log?id=${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export async function deleteWasteLog(id: string): Promise<ApiResponse<WasteLog>> {
  return jsonFetch<WasteLog>(`/api/waste_logs/delete-waste-log?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}
