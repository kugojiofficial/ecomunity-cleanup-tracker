import * as React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { PlasmicCanvasHost, registerComponent } from "@plasmicapp/host";
import InteractiveMap from "../components/InteractiveMap";
import { getMyRole } from "../lib/api";
import { getSupabaseBrowserClient } from "../lib/supabase/browser";

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

// Developers only. Admins and regular users are redirected. This is a UX gate,
// not a security boundary (the host bundle is public) — the authoritative check
// is server-side `requireDeveloper` in lib/supabase/server.ts.
//
// Plasmic Studio renders this page inside its canvas iframe to draw code
// components; gating that would break the editor. So when we're inside an
// iframe (the Studio canvas) we render the host unconditionally and skip the
// gate — a plain admin browsing to /plasmic-host does so top-level and is caught.
export default function PlasmicHost() {
  const router = useRouter();
  const [status, setStatus] = useState<"checking" | "allow">("checking");

  useEffect(() => {
    let active = true;
    void (async () => {
      await Promise.resolve();
      if (!active) return;

      let inIframe = false;
      try {
        inIframe = window.self !== window.top;
      } catch {
        inIframe = true; // cross-origin access throws → we're framed (Studio)
      }
      if (inIframe) {
        setStatus("allow");
        return;
      }

      const {
        data: { user },
      } = await getSupabaseBrowserClient().auth.getUser();
      if (!active) return;
      if (!user) {
        router.replace("/log-in");
        return;
      }
      const role = await getMyRole();
      if (!active) return;
      if (role === "developer") setStatus("allow");
      else router.replace("/dashboard");
    })();
    return () => {
      active = false;
    };
  }, [router]);

  if (status !== "allow") return null;
  return <PlasmicCanvasHost />;
}
