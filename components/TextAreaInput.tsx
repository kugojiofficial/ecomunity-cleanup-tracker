import * as React from "react";
import {
  PlasmicTextAreaInput,
  DefaultTextAreaInputProps
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicTextAreaInput";

export interface TextAreaInputProps extends DefaultTextAreaInputProps {}

function TextAreaInput(props: TextAreaInputProps) {

  return <PlasmicTextAreaInput {...props} />;
}

export default TextAreaInput;
