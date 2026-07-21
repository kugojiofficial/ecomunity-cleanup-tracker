import { jsonFetch, type ApiResponse, type Paged } from "./common";
import { getSupabaseBrowserClient } from "../supabase/browser";

export type EventRecord = {
  id: string;
  name: string;
  created_at: string | null;
  began_at: string | null;
  ended_at: string | null;
  participant_count: number | null;
};

export type InsertEventInput = {
  began_at: string;
  ended_at: string;
  participant_count: number;
  name?: string;
};

export type UpdateEventInput = Partial<{
  began_at: string;
  ended_at: string;
  participant_count: number;
  name: string;
}>;

export async function getEvents(limit = 100, ascending = false): Promise<ApiResponse<EventRecord[]>> {
  const { data, error } = await getSupabaseBrowserClient()
    .from("events")
    .select("id, name, created_at, began_at, ended_at, participant_count")
    .order("created_at", { ascending })
    .limit(limit);

  if (error) return { success: false, error: error.message };
  return { success: true, data: (data ?? []) as EventRecord[] };
}

export type EventWasteBreakdownRow = {
  event_id: string;
  waste_type: string;
  amount: number;
};

export async function getPastEventsPage(
  page: number,
  pageSize: number
): Promise<ApiResponse<Paged<EventRecord>>> {
  const from = page * pageSize;
  const to = from + pageSize - 1;
  const nowIso = new Date().toISOString();

  const { data, count, error } = await getSupabaseBrowserClient()
    .from("events")
    .select("id, name, created_at, began_at, ended_at, participant_count", { count: "exact" })
    .lt("ended_at", nowIso)
    .order("began_at", { ascending: false })
    .range(from, to);

  if (error) return { success: false, error: error.message };
  return { success: true, data: { rows: (data ?? []) as EventRecord[], total: count ?? 0 } };
}

export async function getEventWasteBreakdown(
  eventIds: string[]
): Promise<ApiResponse<EventWasteBreakdownRow[]>> {
  if (eventIds.length === 0) return { success: true, data: [] };

  const { data, error } = await getSupabaseBrowserClient()
    .from("event_waste_breakdown")
    .select("event_id, waste_type, amount")
    .in("event_id", eventIds);

  if (error) return { success: false, error: error.message };
  return { success: true, data: (data ?? []) as EventWasteBreakdownRow[] };
}

export async function insertEvent(input: InsertEventInput): Promise<ApiResponse<EventRecord>> {
  return jsonFetch<EventRecord>("/api/events/insert-event", {
    method: "POST",
    body: JSON.stringify(input),
  });
}

export async function updateEvent(id: string, input: UpdateEventInput): Promise<ApiResponse<EventRecord>> {
  return jsonFetch<EventRecord>(`/api/events/update-event?id=${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
}

export async function deleteEvent(id: string): Promise<ApiResponse<EventRecord>> {
  return jsonFetch<EventRecord>(`/api/events/delete-event?id=${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}
