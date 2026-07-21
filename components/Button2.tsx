import * as React from "react";
import {
  PlasmicButton2,
  DefaultButton2Props
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicButton2";

export interface Button2Props extends DefaultButton2Props {}

function Button2(props: Button2Props) {

  return <PlasmicButton2 {...props} />;
}

export default Button2;
