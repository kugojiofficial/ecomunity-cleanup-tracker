import * as React from "react";
import {
  PlasmicLeaderboardListItem,
  DefaultLeaderboardListItemProps,
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicLeaderboardListItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { formatWithCommas } from "../lib/format/number";

export interface LeaderboardListItemProps extends DefaultLeaderboardListItemProps {
  positionColor?: string;
}

function LeaderboardListItem_(
  { positionColor, ...props }: LeaderboardListItemProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicLeaderboardListItem
      leaderboardListItem={{ ref }}
      {...props}
      leaderboardListItemPositionLabel={
        positionColor
          ? { style: { color: positionColor, borderColor: positionColor } }
          : undefined
      }
      leaderboardListItemPointsStatValueLabel={
        props.points != null
          ? { children: formatWithCommas(props.points) }
          : undefined
      }
    />
  );
}

const LeaderboardListItem = React.forwardRef(LeaderboardListItem_);
export default LeaderboardListItem;
