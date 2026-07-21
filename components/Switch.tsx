import * as React from "react";
import {
  PlasmicSwitch,
  DefaultSwitchProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicSwitch";

export interface SwitchProps extends DefaultSwitchProps {}

function Switch(props: SwitchProps) {

  return <PlasmicSwitch {...props} />;
}

export default Switch;
