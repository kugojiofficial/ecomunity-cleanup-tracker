import * as React from "react";
import {
  PlasmicRangeSlider,
  DefaultRangeSliderProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicRangeSlider";

export interface RangeSliderProps extends DefaultRangeSliderProps {}

function RangeSlider(props: RangeSliderProps) {

  return <PlasmicRangeSlider {...props} />;
}

export default RangeSlider;
