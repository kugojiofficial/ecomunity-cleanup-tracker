import * as React from "react";
import {
  PlasmicRadio,
  DefaultRadioProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicRadio";

export interface RadioProps extends DefaultRadioProps {}

function Radio(props: RadioProps) {

  return <PlasmicRadio {...props} />;
}

export default Radio;
