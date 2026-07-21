import * as React from "react";
import {
  PlasmicDrawer,
  DefaultDrawerProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicDrawer";

export interface DrawerProps extends DefaultDrawerProps {}

function Drawer(props: DrawerProps) {

  return <PlasmicDrawer {...props} />;
}

export default Drawer;
