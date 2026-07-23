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

const WASTE_IMAGES_BUCKET = "waste_log_images";

// Uploads to the owner-scoped path <userId>/<uuid>.jpg; returns the object path
// to store in waste_logs.image_url.
export async function uploadWasteImage(userId: string, blob: Blob): Promise<ApiResponse<string>> {
  const path = `${userId}/${crypto.randomUUID()}.jpg`;
  const { error } = await getSupabaseBrowserClient()
    .storage.from(WASTE_IMAGES_BUCKET)
    .upload(path, blob, { contentType: "image/jpeg", upsert: false });

  if (error) return { success: false, error: error.message };
  return { success: true, data: path };
}

// Signed URL for a stored image path (the bucket is private).
export async function getWasteImageUrl(path: string, expiresInSeconds = 3600): Promise<ApiResponse<string>> {
  const { data, error } = await getSupabaseBrowserClient()
    .storage.from(WASTE_IMAGES_BUCKET)
    .createSignedUrl(path, expiresInSeconds);

  if (error || !data) return { success: false, error: error?.message ?? "Could not sign image URL." };
  return { success: true, data: data.signedUrl };
}

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

export async function getEventWasteLogs(eventId: string, limit = 2000): Promise<ApiResponse<WasteLog[]>> {
  const { data, error } = await getSupabaseBrowserClient()
    .from("waste_logs")
    .select(
      "id, event_id, waste_type, image_url, user_id, latitude, longitude, accuracy_meters, points, created_at"
    )
    .eq("event_id", eventId)
    .order("created_at", { ascending: false })
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
