import * as React from "react";
import {
  PlasmicNavigationBar,
  DefaultNavigationBarProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicNavigationBar";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

export interface NavigationBarProps extends DefaultNavigationBarProps {}

function NavigationBar_(
  props: NavigationBarProps,
  ref: HTMLElementRefOf<"div">
) {

  return <PlasmicNavigationBar navigationBar={{ ref }} {...props} />;
}

const NavigationBar = React.forwardRef(NavigationBar_);
export default NavigationBar;
