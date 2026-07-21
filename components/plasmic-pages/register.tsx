import * as React from "react";
import { useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicSignUp } from "../plasmic/eco_munity_cleanup_tracker/PlasmicSignUp";
import { signUp, validateName, validatePassword, useAuthUser } from "../../lib/api";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

function SignUp() {
  const router = useRouter();
  const { user } = useAuthUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const loggedIn = !!user;

  function firstValidationError(): string | null {
    if (validateName(firstName)) return `First name — ${validateName(firstName)}`;
    if (validateName(lastName)) return `Last name — ${validateName(lastName)}`;
    if (!email.trim()) return "Enter your email address.";
    const pwErr = validatePassword(password);
    if (pwErr) return pwErr;
    if (password !== confirmPassword) return "Passwords don't match.";
    return null;
  }

  async function handleSignUp() {
    if (busy) return;
    const validationError = firstValidationError();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setBusy(true);
    const { data, error: signUpErr } = await signUp({ email, password, firstName, lastName });
    setBusy(false);
    if (signUpErr) {
      setError(signUpErr.message);
      return;
    }
    if (data.session) {
      router.push("/dashboard");
      return;
    }
    setError("Account created — check your email to confirm, then log in.");
  }

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicSignUp
          firstNameContainer={{
            value: firstName,
            onChange: setFirstName,
            style: loggedIn ? HIDDEN : undefined,
          }}
          lastNameContainer={{
            value: lastName,
            onChange: setLastName,
            style: loggedIn ? HIDDEN : undefined,
          }}
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
          confirmPasswordContainer={{
            value: confirmPassword,
            onChange: setConfirmPassword,
            style: loggedIn ? HIDDEN : undefined,
          }}
          error={{ style: !loggedIn && error ? SHOWN : undefined }}
          errorContent={{ children: error ?? "" }}
          signUpButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleSignUp();
            },
            style: loggedIn ? HIDDEN : undefined,
          }}
          logInRedirect={{ style: loggedIn ? HIDDEN : undefined }}
          logInRedirectButton={{ onClick: () => router.push("/log-in") }}
          alreadyLoggedIn={{ style: loggedIn ? undefined : HIDDEN }}
          toDashboardButton={{ onClick: () => router.push("/dashboard") }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default SignUp;
