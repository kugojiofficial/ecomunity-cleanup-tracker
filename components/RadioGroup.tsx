import * as React from "react";
import {
  PlasmicRadioGroup,
  DefaultRadioGroupProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicRadioGroup";

export interface RadioGroupProps extends DefaultRadioGroupProps {}

function RadioGroup(props: RadioGroupProps) {

  return <PlasmicRadioGroup {...props} />;
}

export default RadioGroup;
