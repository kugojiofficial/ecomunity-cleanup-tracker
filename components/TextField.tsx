import * as React from "react";
import {
  PlasmicTextField,
  DefaultTextFieldProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicTextField";

export interface TextFieldProps extends DefaultTextFieldProps {}

function TextField(props: TextFieldProps) {

  return <PlasmicTextField {...props} />;
}

export default TextField;
