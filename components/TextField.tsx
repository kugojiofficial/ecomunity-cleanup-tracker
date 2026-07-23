import * as React from "react";
import { useEffect, useRef } from "react";
import {
  PlasmicTextField,
  DefaultTextFieldProps,
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicTextField";

export interface TextFieldProps extends DefaultTextFieldProps {
  onBlur?: () => void;
}

function TextField({ onBlur, ...props }: TextFieldProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onBlurRef = useRef(onBlur);
  const typedRef = useRef(false);

  useEffect(() => {
    onBlurRef.current = onBlur;
  }, [onBlur]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const handleInput = () => {
      typedRef.current = true;
    };
    const handleFocusOut = () => {
      window.setTimeout(() => {
        if (
          typedRef.current &&
          root.isConnected &&
          !root.contains(document.activeElement)
        ) {
          onBlurRef.current?.();
        }
      }, 0);
    };

    root.addEventListener("input", handleInput);
    root.addEventListener("focusout", handleFocusOut);
    return () => {
      root.removeEventListener("input", handleInput);
      root.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  return (
    <div ref={ref} style={{ display: "contents" }}>
      <PlasmicTextField {...props} />
    </div>
  );
}

export default TextField;
