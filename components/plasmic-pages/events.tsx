import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicEvents } from "../plasmic/eco_munity_cleanup_tracker/PlasmicEvents";
import EventListItem from "../EventListItem";
import EventWasteTypeListItem from "../EventWasteTypeListItem";
import { getPastEventsPage, getEventWasteBreakdown, useRequireAuth } from "../../lib/api";
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

const PAGE_SIZE = 10;
const HOURS = 1000 * 60 * 60;
const DISABLED: React.CSSProperties = { opacity: 0.4, pointerEvents: "none" };

function Events() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [page, setPage] = useState(0);
  const [refreshTick, setRefreshTick] = useState(0);
  const [events, setEvents] = useState<EventListEntry[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const eventsRes = await getPastEventsPage(page, PAGE_SIZE);
      if (cancelled) return;
      if (!eventsRes.success) {
        console.error("Failed to load events:", eventsRes.error);
        return;
      }

      const rows = eventsRes.data.rows;
      const breakdownRes = await getEventWasteBreakdown(rows.map((e) => e.id));
      if (cancelled) return;

      const byEvent = new Map<string, { type: string; amount: number }[]>();
      if (breakdownRes.success) {
        for (const b of breakdownRes.data) {
          const list = byEvent.get(b.event_id) ?? [];
          list.push({ type: b.waste_type, amount: b.amount });
          byEvent.set(b.event_id, list);
        }
      } else {
        console.error("Failed to load waste breakdown:", breakdownRes.error);
      }

      setTotal(eventsRes.data.total);
      setEvents(
        rows.map((event) => {
          const duration =
            event.began_at && event.ended_at
              ? Number(
                  (
                    (new Date(event.ended_at).getTime() - new Date(event.began_at).getTime()) /
                    HOURS
                  ).toFixed(1)
                )
              : 0;
          const wasteByType = byEvent.get(event.id) ?? [];
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
  }, [page, refreshTick]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const hasPrev = page > 0;
  const hasNext = page < totalPages - 1;

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicEvents
          refreshButtonOnClick={() => setRefreshTick((t) => t + 1)}
          previousPageButton={{
            onClick: () => {
              if (hasPrev) setPage((p) => p - 1);
            },
            style: hasPrev ? undefined : DISABLED,
          }}
          nextPageButton={{
            onClick: () => {
              if (hasNext) setPage((p) => p + 1);
            },
            style: hasNext ? undefined : DISABLED,
          }}
          pageNumber={{ children: `${page + 1} / ${totalPages}` }}
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
