import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicHome } from "../plasmic/eco_munity_cleanup_tracker/PlasmicHome";
import { useAuthUser } from "../../lib/api";

const HIDDEN = { display: "none" } as const;

function Home() {
  const router = useRouter();
  const { user } = useAuthUser();
  const loggedIn = !!user;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicHome
          logInButton={{
            onClick: () => router.push("/log-in"),
            style: loggedIn ? HIDDEN : undefined,
          }}
          signUpButton={{
            onClick: () => router.push("/register"),
            style: loggedIn ? HIDDEN : undefined,
          }}
          dashboardPageButton={{
            onClick: () => router.push("/dashboard"),
            style: loggedIn ? undefined : HIDDEN,
          }}
          eventsPageButton={{
            onClick: () => router.push("/events"),
            style: loggedIn ? undefined : HIDDEN,
          }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default Home;
