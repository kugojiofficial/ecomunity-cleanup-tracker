import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { InteractiveMapProps } from "./InteractiveMapInner";

export type { InteractiveMapProps };

const InteractiveMapInner = dynamic(() => import("./InteractiveMapInner"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%" }} />,
});

export function InteractiveMap({
  className,
  ...props
}: InteractiveMapProps & { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Only mount the (heavy) Leaflet map once its container is actually on screen.
  // A display:none container (event details collapsed) never intersects, so the
  // map stays unloaded until details is first opened — and it never mounts into
  // a zero-size container, which is what throws Leaflet's `_leaflet_pos` error.
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

  // Fill the Plasmic map container (className carries its sizing) rather than a
  // fixed height, so the map never overflows the details panel.
  return (
    <div ref={ref} className={className} style={{ width: "100%", height: "100%", minHeight: 0 }}>
      {visible ? <InteractiveMapInner {...props} /> : null}
    </div>
  );
}

export default InteractiveMap;
