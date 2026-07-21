import dynamic from "next/dynamic";
import type { InteractiveMapProps } from "./InteractiveMapInner";

export type { InteractiveMapProps };

const InteractiveMapInner = dynamic(() => import("./InteractiveMapInner"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "500px", borderRadius: "12px" }} />
  ),
});

export function InteractiveMap(props: InteractiveMapProps) {
  return <InteractiveMapInner {...props} />;
}

export default InteractiveMap;
