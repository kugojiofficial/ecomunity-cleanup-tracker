import * as React from "react";
import {
  PlasmicDescription,
  DefaultDescriptionProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicDescription";

export interface DescriptionProps extends DefaultDescriptionProps {}

function Description(props: DescriptionProps) {

  return <PlasmicDescription {...props} />;
}

export default Description;
