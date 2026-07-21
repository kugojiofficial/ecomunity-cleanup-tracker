import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicEvents } from "../plasmic/eco_munity_cleanup_tracker/PlasmicEvents";
import EventListItem from "../EventListItem";
import EventWasteTypeListItem from "../EventWasteTypeListItem";
import { getEvents, getWasteLogs, useRequireAuth } from "../../lib/api";
import { formatStartDateTime, formatEndedRelative } from "../../lib/format/date";
import { formatWasteType } from "../../lib/format/wasteType";

type EventListEntry = {
  id: string;
  name: string;
  dateBegan: string;
  dateEnded: string;
  participantsCount: number;
  collectedWasteAmount: number;
  wasteByType: { type: string; amount: number }[];
  duration: number;
};

const HOURS = 1000 * 60 * 60;

function Events() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [events, setEvents] = useState<EventListEntry[]>([]);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [eventsRes, wasteRes] = await Promise.all([getEvents(), getWasteLogs(1000)]);
      if (cancelled) return;

      if (!eventsRes.success) {
        console.error("Failed to load events:", eventsRes.error);
        return;
      }

      const wasteByEvent = new Map<string, Map<string, number>>();
      if (wasteRes.success) {
        for (const log of wasteRes.data) {
          let byType = wasteByEvent.get(log.event_id);
          if (!byType) {
            byType = new Map<string, number>();
            wasteByEvent.set(log.event_id, byType);
          }
          byType.set(log.waste_type, (byType.get(log.waste_type) ?? 0) + 1);
        }
      } else {
        console.error("Failed to load waste logs:", wasteRes.error);
      }

      const nowMs = Date.now();
      const pastEvents = eventsRes.data.filter(
        (event) => event.ended_at != null && new Date(event.ended_at).getTime() < nowMs
      );

      setEvents(
        pastEvents.map((event) => {
          const duration =
            event.began_at && event.ended_at
              ? Number(
                  (
                    (new Date(event.ended_at).getTime() - new Date(event.began_at).getTime()) /
                    HOURS
                  ).toFixed(1)
                )
              : 0;

          const byType = wasteByEvent.get(event.id);
          const wasteByType = byType
            ? [...byType.entries()].map(([type, amount]) => ({ type, amount }))
            : [];
          const collectedWasteAmount = wasteByType.reduce((sum, w) => sum + w.amount, 0);

          return {
            id: event.id,
            name: event.name,
            dateBegan: formatStartDateTime(event.began_at ?? event.created_at),
            dateEnded: formatEndedRelative(event.ended_at),
            participantsCount: event.participant_count ?? 0,
            collectedWasteAmount,
            wasteByType,
            duration,
          };
        })
      );
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicEvents
          eventListContainer={
            events.length > 0
              ? {
                  children: events.map((event) => (
                    <EventListItem
                      key={event.id}
                      eventId={event.id}
                      name={event.name}
                      dateBegan={event.dateBegan}
                      dateEnded={event.dateEnded}
                      participantsCount={event.participantsCount}
                      collectedWasteAmount={event.collectedWasteAmount}
                      duration={event.duration}
                      slotWasteListContainer={event.wasteByType.map((w) => (
                        <EventWasteTypeListItem
                          key={w.type}
                          wasteType={formatWasteType(w.type)}
                          amount={w.amount}
                        />
                      ))}
                    />
                  )),
                }
              : undefined
          }
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default Events;
