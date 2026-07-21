import * as React from "react";
import {
  PlasmicSlider,
  DefaultSliderProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicSlider";

export interface SliderProps extends DefaultSliderProps {}

function Slider(props: SliderProps) {

  return <PlasmicSlider {...props} />;
}

export default Slider;
