import * as React from "react";
import { classNames, HTMLElementRefOf } from "@plasmicapp/react-web";
import {
  PlasmicEventListItem,
  DefaultEventListItemProps,
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicEventListItem";
import sty from "./plasmic/eco_munity_cleanup_tracker/PlasmicEventListItem.module.css";

export interface EventListItemProps extends DefaultEventListItemProps {
  /** Scopes the embedded map to this event's waste logs (per-event heatmap). */
  eventId?: string;
}

// Plasmic's numeric text binding renders a bare 0 as nothing, so stat values of
// 0 vanish. Emit the value as text inside the node's own __wab_text wrapper,
// which keeps the design's font size.
function statValue(value: number | undefined, textClass: string) {
  return (
    <div className={classNames("all", "__wab_text", textClass)}>
      {String(value ?? 0)}
    </div>
  );
}

function EventListItem_(
  {
    eventId,
    participantsCount,
    collectedWasteAmount,
    duration,
    ...props
  }: EventListItemProps,
  ref: HTMLElementRefOf<"div">
) {
  return (
    <PlasmicEventListItem
      eventListItem={{ ref }}
      {...props}
      eventListItemParticipantsStatValueLabel={{
        children: statValue(participantsCount, sty.text__vAviY),
      }}
      eventListItemCollectedWasteStatValueLabel={{
        children: statValue(collectedWasteAmount, sty.text__yGFjp),
      }}
      eventListItemTimeStatValueLabel={{
        children: statValue(duration, sty.text__yHkfn),
      }}
      interactiveMap={{ eventId }}
    />
  );
}

const EventListItem = React.forwardRef(EventListItem_);
export default EventListItem;
