import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicDashboard } from "../plasmic/eco_munity_cleanup_tracker/PlasmicDashboard";
import CheckIcon from "../plasmic/eco_munity_cleanup_tracker/icons/PlasmicIcon__Check";
import { getEvents, getWasteLogs, useRequireAuth } from "../../lib/api";
import { selectActiveOrRecentEvent } from "../../lib/domain/activeEvent";
import { formatWithCommas } from "../../lib/format/number";

type CardStats = {
  name: string;
  participants: string;
  collectedWaste: string;
};

function Dashboard() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [activeEventId, setActiveEventId] = useState<string | undefined>(undefined);
  const [endedAt, setEndedAt] = useState<string | null>(null);
  const [isActive, setIsActive] = useState(true);

  const [hasActiveEvent, setHasActiveEvent] = useState(false);
  const [cards, setCards] = useState<CardStats>({
    name: "N/A",
    participants: "N/A",
    collectedWaste: "N/A",
  });

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [eventsRes, wasteRes] = await Promise.all([getEvents(), getWasteLogs(1000)]);
      if (cancelled) return;

      if (!eventsRes.success) {
        console.error("Failed to load events:", eventsRes.error);
        return;
      }

      const result = selectActiveOrRecentEvent(eventsRes.data);
      if (!result) return;
      const active = result.event;

      const wasteCount = wasteRes.success
        ? wasteRes.data.filter((log) => log.event_id === active.id).length
        : 0;

      setActiveEventId(active.id);
      setEndedAt(active.ended_at);
      setIsActive(result.isActive);
      setHasActiveEvent(result.isActive);
      setCards({
        name: active.name || "N/A",
        participants: formatWithCommas(active.participant_count ?? 0),
        collectedWaste: formatWithCommas(wasteCount),
      });
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
        <PlasmicDashboard

          logWasteButton={{ style: hasActiveEvent ? undefined : { display: "none" } }}
          activeEventCardValue={{ children: cards.name }}
          participantsCardValue={{ children: cards.participants }}
          wasteCollectedCardValue={{ children: cards.collectedWaste }}
          interactiveMap={{
            eventId: activeEventId,
            live: isActive,
            liveUntil: endedAt,
            style: { height: 500 },
          }}

          activeEventTitleIcon={isActive ? undefined : { as: CheckIcon }}
          mapTitle={{ children: isActive ? "Live Event Map" : "Recent Event Map" }}
          activeEventTitleContent={{ children: isActive ? "Active Event" : "Recent Event" }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default Dashboard;
