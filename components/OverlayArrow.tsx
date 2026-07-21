import * as React from "react";
import {
  PlasmicOverlayArrow,
  DefaultOverlayArrowProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicOverlayArrow";

export interface OverlayArrowProps extends DefaultOverlayArrowProps {}

function OverlayArrow(props: OverlayArrowProps) {

  return <PlasmicOverlayArrow {...props} />;
}

export default OverlayArrow;
