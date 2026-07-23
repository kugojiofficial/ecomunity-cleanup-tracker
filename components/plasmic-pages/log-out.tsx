import * as React from "react";
import { useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicLogOut } from "../plasmic/eco_munity_cleanup_tracker/PlasmicLogOut";
import { signOut, useRequireAuth } from "../../lib/api";

function LogOut() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [busy, setBusy] = useState(false);

  async function handleLogOut() {
    if (busy) return;
    setBusy(true);
    await signOut();
    router.replace("/log-in");
  }

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicLogOut
          continueButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleLogOut();
            },
          }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default LogOut;
