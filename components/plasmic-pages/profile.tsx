import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicProfile } from "../plasmic/eco_munity_cleanup_tracker/PlasmicProfile";
import LeaderboardListItem from "../LeaderboardListItem";
import {
  getMyProfile,
  getLeaderboardPage,
  useRequireAuth,
  type UserProfile,
  type LeaderboardEntry,
} from "../../lib/api";
import { formatWithCommas } from "../../lib/format/number";
import { formatJoinDate } from "../../lib/format/date";
import { getSupabaseBrowserClient } from "../../lib/supabase/browser";

const PAGE_SIZE = 10;
const DISABLED: React.CSSProperties = { opacity: 0.4, pointerEvents: "none" };

function positionColorFor(rank: number): string {
  switch (rank) {
    case 1:
      return "#FFD700";
    case 2:
      return "#C0C0C0";
    case 3:
      return "#CD7F32";
    default:
      return "#FFFFFF";
  }
}

function formatHours(value: number): string {
  const n = Number(value);
  if (Number.isNaN(n)) return "0";
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

function fullName(first: string | null | undefined, last: string | null | undefined): string {
  return [first, last].filter(Boolean).join(" ").trim() || "—";
}

function Profile() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [lbPage, setLbPage] = useState(0);
  const [lbTotal, setLbTotal] = useState(0);
  const [refreshTick, setRefreshTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await getMyProfile();
      if (cancelled) return;
      if (res.success) setProfile(res.data);
      else console.error("Failed to load profile:", res.error);
    })();
    return () => {
      cancelled = true;
    };
  }, [refreshTick]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await getLeaderboardPage(lbPage, PAGE_SIZE);
      if (cancelled) return;
      if (res.success) {
        setLeaderboard(res.data.rows);
        setLbTotal(res.data.total);
      } else {
        console.error("Failed to load leaderboard:", res.error);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [lbPage, refreshTick]);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    let timer: ReturnType<typeof setTimeout> | undefined;
    const channel = supabase
      .channel("profile-users-live")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "users" },
        () => {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => setRefreshTick((t) => t + 1), 500);
        }
      )
      .subscribe();
    return () => {
      if (timer) clearTimeout(timer);
      supabase.removeChannel(channel);
    };
  }, []);

  const totalPages = Math.max(1, Math.ceil(lbTotal / PAGE_SIZE));
  const hasPrev = lbPage > 0;
  const hasNext = lbPage < totalPages - 1;

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicProfile

          profileUserNameLabel={{ children: fullName(profile?.first_name, profile?.last_name) }}
          profileJoinDateLabel={{ children: formatJoinDate(profile?.created_at) }}
          pointsStatValueLabel={{ children: formatWithCommas(profile?.points ?? 0) }}
          collectedWasteStatValueLabel={{
            children: formatWithCommas(profile?.total_collected_waste ?? 0),
          }}
          totalHoursStatValueLabel={{
            children: formatHours(profile?.total_event_hours ?? 0),
          }}
          previousPageButton={{
            onClick: () => {
              if (hasPrev) setLbPage((p) => p - 1);
            },
            style: hasPrev ? undefined : DISABLED,
          }}
          nextPageButton={{
            onClick: () => {
              if (hasNext) setLbPage((p) => p + 1);
            },
            style: hasNext ? undefined : DISABLED,
          }}
          pageNumber={{ children: `${lbPage + 1} / ${totalPages}` }}
          leaderboardListContainer={
            leaderboard.length > 0
              ? {
                  children: leaderboard.map((entry) => {
                    const rank = entry.rank ?? 0;
                    return (
                      <LeaderboardListItem
                        key={entry.id ?? String(rank)}
                        displayName={fullName(entry.first_name, entry.last_name)}
                        points={entry.points ?? 0}
                        joinDateText={formatJoinDate(entry.created_at)}
                        positionText={`#${rank}`}
                        positionColor={positionColorFor(rank)}
                      />
                    );
                  }),
                }
              : undefined
          }
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default Profile;
