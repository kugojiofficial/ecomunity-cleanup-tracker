import * as React from "react";
import {
  PlasmicSelect,
  DefaultSelectProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicSelect";

export interface SelectProps extends DefaultSelectProps {}

function Select(props: SelectProps) {

  return <PlasmicSelect {...props} />;
}

export default Select;
