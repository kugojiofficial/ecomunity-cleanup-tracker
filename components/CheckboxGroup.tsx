import * as React from "react";
import {
  PlasmicCheckboxGroup,
  DefaultCheckboxGroupProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicCheckboxGroup";

export interface CheckboxGroupProps extends DefaultCheckboxGroupProps {}

function CheckboxGroup(props: CheckboxGroupProps) {

  return <PlasmicCheckboxGroup {...props} />;
}

export default CheckboxGroup;
