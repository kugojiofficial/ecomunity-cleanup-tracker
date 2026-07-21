import * as React from "react";
import {
  PlasmicMenuPopover,
  DefaultMenuPopoverProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicMenuPopover";

export interface MenuPopoverProps extends DefaultMenuPopoverProps {}

function MenuPopover(props: MenuPopoverProps) {

  return <PlasmicMenuPopover {...props} />;
}

export default MenuPopover;
