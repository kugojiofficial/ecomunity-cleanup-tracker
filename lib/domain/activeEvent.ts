import type { EventRecord } from "../api";

export type ActiveEventResult = {
  event: EventRecord;
  isActive: boolean;
};

export function selectActiveOrRecentEvent(events: EventRecord[]): ActiveEventResult | null {
  if (events.length === 0) return null;

  const startMs = (e: EventRecord) =>
    new Date(e.began_at ?? e.created_at ?? 0).getTime();
  const byMostRecentlyBegun = (a: EventRecord, b: EventRecord) => startMs(b) - startMs(a);

  const now = Date.now();
  const active = events
    .filter((e) => !e.ended_at || new Date(e.ended_at).getTime() > now)
    .sort(byMostRecentlyBegun);
  if (active.length > 0) return { event: active[0], isActive: true };

  return { event: [...events].sort(byMostRecentlyBegun)[0], isActive: false };
}
