import { getAccessToken } from "../supabase/browser";

export type ApiResponse<T> = { success: true; data: T } | { success: false; error: string };

export type Paged<T> = { rows: T[]; total: number };

export async function jsonFetch<T>(url: string, init?: RequestInit): Promise<ApiResponse<T>> {
  const token = await getAccessToken();

  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init?.headers,
    },
  });
  return res.json();
}
