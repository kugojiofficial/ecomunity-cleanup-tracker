import * as React from "react";
import {
  PlasmicEventWasteTypeListItem,
  DefaultEventWasteTypeListItemProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicEventWasteTypeListItem";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface EventWasteTypeListItemProps extends DefaultEventWasteTypeListItemProps {}

function EventWasteTypeListItem_(
  props: EventWasteTypeListItemProps,
  ref: HTMLElementRefOf<"div">
) {

  return (
    <PlasmicEventWasteTypeListItem
      eventWasteTypeListItem={{ ref }}
      {...props}
    />
  );
}

const EventWasteTypeListItem = React.forwardRef(EventWasteTypeListItem_);
export default EventWasteTypeListItem;
