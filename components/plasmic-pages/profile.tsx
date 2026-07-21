import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicProfile } from "../plasmic/eco_munity_cleanup_tracker/PlasmicProfile";
import LeaderboardListItem from "../LeaderboardListItem";
import {
  getMyProfile,
  getLeaderboard,
  useRequireAuth,
  signOut,
  type UserProfile,
  type LeaderboardEntry,
} from "../../lib/api";
import { formatWithCommas } from "../../lib/format/number";
import { formatJoinDate } from "../../lib/format/date";

function positionColorFor(rank: number): string {
  switch (rank) {
    case 1:
      return "#FFD700"; // gold
    case 2:
      return "#C0C0C0"; // silver
    case 3:
      return "#CD7F32"; // bronze
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

  useEffect(() => {
    let cancelled = false;

    (async () => {
      const [profileRes, lbRes] = await Promise.all([getMyProfile(), getLeaderboard(100)]);
      if (cancelled) return;

      if (profileRes.success) setProfile(profileRes.data);
      else console.error("Failed to load profile:", profileRes.error);

      if (lbRes.success) setLeaderboard(lbRes.data);
      else console.error("Failed to load leaderboard:", lbRes.error);
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  async function handleLogOut() {
    await signOut();
    router.replace("/log-in");
  }

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicProfile
          logOutButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleLogOut();
            },
          }}
          profileUserNameLabel={{ children: fullName(profile?.first_name, profile?.last_name) }}
          profileJoinDateLabel={{ children: formatJoinDate(profile?.created_at) }}
          pointsStatValueLabel={{ children: formatWithCommas(profile?.points ?? 0) }}
          collectedWasteStatValueLabel={{
            children: formatWithCommas(profile?.total_collected_waste ?? 0),
          }}
          totalHoursStatValueLabel={{
            children: formatHours(profile?.total_event_hours ?? 0),
          }}
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
