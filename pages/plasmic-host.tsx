import * as React from "react";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import InteractiveMap from "../components/InteractiveMap";

registerComponent(InteractiveMap, {
  name: "InteractiveMap",
  importPath: "./components/InteractiveMap.tsx",
  styleSections: ["sizing", "spacing", "background", "border", "shadows"],
  props: {
    eventId: {
      type: "string",
      description:
        "Only show waste logs for this event id. Leave empty to show all logs.",
    },
  },
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
