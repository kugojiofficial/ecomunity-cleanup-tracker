import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { InteractiveMapProps } from "./InteractiveMapInner";

export type { InteractiveMapProps };

const InteractiveMapInner = dynamic(() => import("./InteractiveMapInner"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

export function InteractiveMap({
  className,
  style,
  ...props
}: InteractiveMapProps & { className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setVisible(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);
  
  return (
    <div
      ref={ref}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: 0, ...style }}
    >
      {visible ? <InteractiveMapInner {...props} /> : null}
    </div>
  );
}

export default InteractiveMap;
