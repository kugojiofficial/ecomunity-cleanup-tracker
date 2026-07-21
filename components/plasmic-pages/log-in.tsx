import * as React from "react";
import { useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicLogIn } from "../plasmic/eco_munity_cleanup_tracker/PlasmicLogIn";
import { signIn, useAuthUser } from "../../lib/api";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

function LogIn() {
  const router = useRouter();
  const { user } = useAuthUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const loggedIn = !!user;

  async function handleLogIn() {
    if (busy) return;
    setError(null);
    setBusy(true);
    const { error } = await signIn(email, password);
    setBusy(false);
    if (error) {
      setError(
        /invalid login credentials/i.test(error.message)
          ? "Email or password is incorrect."
          : error.message
      );
      return;
    }
    router.push("/dashboard");
  }

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicLogIn
          emailContainer={{
            value: email,
            onChange: setEmail,
            style: loggedIn ? HIDDEN : undefined,
          }}
          passwordContainer={{
            value: password,
            onChange: setPassword,
            style: loggedIn ? HIDDEN : undefined,
          }}
          error={{ style: !loggedIn && error ? SHOWN : HIDDEN }}
          errorContent={{ children: error ?? "" }}
          logInButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleLogIn();
            },
            style: loggedIn ? HIDDEN : undefined,
          }}
          signUpRedirect={{ style: loggedIn ? HIDDEN : undefined }}
          signUpRedirectButton={{ onClick: () => router.push("/register") }}
          alreadyLoggedIn={{ style: loggedIn ? undefined : HIDDEN }}
          toDashboardButton={{ onClick: () => router.push("/dashboard") }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default LogIn;
