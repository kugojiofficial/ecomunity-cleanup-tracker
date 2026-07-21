import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicAdminPortal } from "../plasmic/eco_munity_cleanup_tracker/PlasmicAdminPortal";
import { useRequireAuth } from "../../lib/api";

function AdminPortal() {
  const router = useRouter();
  const { user } = useRequireAuth();

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicAdminPortal />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default AdminPortal;
