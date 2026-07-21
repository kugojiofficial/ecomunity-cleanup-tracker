import * as React from "react";
import {
  PlasmicCheckbox,
  DefaultCheckboxProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicCheckbox";

export interface CheckboxProps extends DefaultCheckboxProps {}

function Checkbox(props: CheckboxProps) {

  return <PlasmicCheckbox {...props} />;
}

export default Checkbox;
