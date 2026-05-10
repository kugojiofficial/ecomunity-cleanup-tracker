import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import LiveMap from "./components/LiveMap";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: process.env.NEXT_PUBLIC_PLASMIC_PROJECT_ID!,
      token: process.env.NEXT_PUBLIC_PLASMIC_PUBLIC_TOKEN!,
    },
  ],
  preview: process.env.NODE_ENV == "development",
});

PLASMIC.registerComponent(LiveMap, {
  name: "LiveMap",
  props: {},
});