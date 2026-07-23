import * as React from "react";
import { useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicChangeEmail } from "../plasmic/eco_munity_cleanup_tracker/PlasmicChangeEmail";
import { changeEmail, validateEmail, useRequireAuth } from "../../lib/api";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

function friendlyEmailError(message: string): string {
  if (/already (been )?registered|already in use|already exists/i.test(message)) {
    return "That email is already in use by another account.";
  }
  if (/rate limit|too many|for security purposes/i.test(message)) {
    return "Too many attempts. Please wait a minute and try again.";
  }
  return message;
}

function ChangeEmail() {
  const router = useRouter();
  const { user } = useRequireAuth();
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);

  async function handleContinue() {
    if (busy) return;
    const v = validateEmail(newEmail);
    if (v) {
      setError(v);
      return;
    }
    if (newEmail.trim().toLowerCase() === (user?.email ?? "").toLowerCase()) {
      setError("That's already your email address.");
      return;
    }
    setError(null);
    setBusy(true);
    const { error } = await changeEmail(newEmail);
    setBusy(false);
    if (error) {
      setError(friendlyEmailError(error.message));
      return;
    }
    setDone(true);
  }

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicChangeEmail
          container={{ style: done ? HIDDEN : undefined }}
          newEmailContainer={{
            value: newEmail,
            onChange: (v: string) => {
              setNewEmail(v);
              if (error) setError(null);
            },
          }}
          error={{ style: !done && error ? SHOWN : HIDDEN }}
          passwordErrorContent={{ children: error ?? "" }}
          continueButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleContinue();
            },
          }}
          successContainer={{ style: done ? SHOWN : HIDDEN }}
          toDashboardButton={{ onClick: () => router.push("/dashboard") }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default ChangeEmail;
