import * as React from "react";
import {
  PlasmicButton,
  DefaultButtonProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicButton";

export interface ButtonProps extends DefaultButtonProps {}

function Button(props: ButtonProps) {

  return <PlasmicButton {...props} />;
}

export default Button;
