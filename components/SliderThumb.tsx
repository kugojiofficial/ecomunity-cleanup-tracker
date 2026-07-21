import * as React from "react";
import {
  PlasmicSliderThumb,
  DefaultSliderThumbProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicSliderThumb";

export interface SliderThumbProps extends DefaultSliderThumbProps {}

function SliderThumb(props: SliderThumbProps) {

  return <PlasmicSliderThumb {...props} />;
}

export default SliderThumb;
