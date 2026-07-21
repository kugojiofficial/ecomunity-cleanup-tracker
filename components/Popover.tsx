import * as React from "react";
import {
  PlasmicPopover,
  DefaultPopoverProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicPopover";

export interface PopoverProps extends DefaultPopoverProps {}

function Popover(props: PopoverProps) {

  return <PlasmicPopover {...props} />;
}

export default Popover;
