import * as React from "react";
import {
  PlasmicMenuItem,
  DefaultMenuItemProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicMenuItem";

export interface MenuItemProps extends DefaultMenuItemProps {}

function MenuItem(props: MenuItemProps) {

  return <PlasmicMenuItem {...props} />;
}

export default MenuItem;
