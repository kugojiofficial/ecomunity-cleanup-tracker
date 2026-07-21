import * as React from "react";
import {
  PlasmicTextInput,
  DefaultTextInputProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicTextInput";

export interface TextInputProps extends DefaultTextInputProps {}

function TextInput(props: TextInputProps) {

  return <PlasmicTextInput {...props} />;
}

export default TextInput;
