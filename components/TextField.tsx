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

  useEffect(() => {
    onBlurRef.current = onBlur;
  }, [onBlur]);

  // Detect focus genuinely leaving this field. `focusout` bubbles (unlike
  // `blur`), so a listener on the stable wrapper keeps working even when
  // react-aria re-creates the inner input. The deferred activeElement check
  // ignores focus churn that stays inside the field (which is what fired the
  // error too early while typing) — it only reports a blur once focus has
  // actually moved outside the field.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = () => {
      window.setTimeout(() => {
        if (el.isConnected && !el.contains(document.activeElement)) {
          onBlurRef.current?.();
        }
      }, 0);
    };
    el.addEventListener("focusout", handle);
    return () => el.removeEventListener("focusout", handle);
  }, []);

  // display:contents keeps the wrapper out of layout.
  return (
    <div ref={ref} style={{ display: "contents" }}>
      <PlasmicTextField {...props} />
    </div>
  );
}

export default TextField;
