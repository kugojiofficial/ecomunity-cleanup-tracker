import * as React from "react";
import {
  PlasmicTooltip,
  DefaultTooltipProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicTooltip";

export interface TooltipProps extends DefaultTooltipProps {}

function Tooltip(props: TooltipProps) {

  return <PlasmicTooltip {...props} />;
}

export default Tooltip;
