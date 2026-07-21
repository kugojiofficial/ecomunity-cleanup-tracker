import * as React from "react";
import {
  PlasmicTextField,
  DefaultTextFieldProps,
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicTextField";

export interface TextFieldProps extends DefaultTextFieldProps {
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
}

function TextField({ onBlur, ...props }: TextFieldProps) {
  if (!onBlur) return <PlasmicTextField {...props} />;
  // display:contents keeps the wrapper out of layout while still catching the
  // input's blur (React normalizes onBlur to bubble).
  return (
    <div style={{ display: "contents" }} onBlur={onBlur}>
      <PlasmicTextField {...props} />
    </div>
  );
}

export default TextField;
