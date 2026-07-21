import * as React from "react";
import {
  PlasmicLabel,
  DefaultLabelProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicLabel";

export interface LabelProps extends DefaultLabelProps {}

function Label(props: LabelProps) {

  return <PlasmicLabel {...props} />;
}

export default Label;
