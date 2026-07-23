import * as React from "react";
import { useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicLogIn } from "../plasmic/eco_munity_cleanup_tracker/PlasmicLogIn";
import { signIn, sendPasswordReset, validateEmail, useAuthUser } from "../../lib/api";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

type Mode = "login" | "forgot";

function LogIn() {
  const router = useRouter();
  const { user } = useAuthUser();
  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const [forgotEmail, setForgotEmail] = useState("");
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [forgotSent, setForgotSent] = useState(false);
  const [forgotBusy, setForgotBusy] = useState(false);

  const loggedIn = !!user;
  const showLoginForm = !loggedIn && mode === "login";
  const showForgot = !loggedIn && mode === "forgot";
  const showForgotForm = showForgot && !forgotSent;
  const showEmailNotice = showForgot && forgotSent;

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

  function openForgot() {
    setForgotEmail(email);
    setForgotError(null);
    setForgotSent(false);
    setMode("forgot");
  }

  function backToLogin() {
    setForgotError(null);
    setForgotSent(false);
    setMode("login");
  }

  async function handleForgotContinue() {
    if (forgotBusy) return;
    const emailErr = validateEmail(forgotEmail);
    if (emailErr) {
      setForgotError(emailErr);
      return;
    }
    setForgotError(null);
    setForgotBusy(true);
    const { error } = await sendPasswordReset(forgotEmail);
    setForgotBusy(false);
    if (error) {
      setForgotError(error.message);
      return;
    }

    setForgotSent(true);
  }

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicLogIn

          container={{ style: mode === "forgot" ? HIDDEN : undefined }}
          emailContainer={{
            value: email,
            onChange: setEmail,
            style: showLoginForm ? undefined : HIDDEN,
          }}
          passwordContainer={{
            value: password,
            onChange: setPassword,
            style: showLoginForm ? undefined : HIDDEN,
          }}
          error={{ style: showLoginForm && error ? SHOWN : HIDDEN }}
          errorContent={{ children: error ?? "" }}
          forgotPasswordButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              openForgot();
            },
            style: showLoginForm ? undefined : HIDDEN,
          }}
          logInButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleLogIn();
            },
            style: showLoginForm ? undefined : HIDDEN,
          }}
          signUpRedirect={{ style: showLoginForm ? undefined : HIDDEN }}
          signUpRedirectButton={{ onClick: () => router.push("/register") }}

          forgotPassword={{ style: showForgotForm ? SHOWN : HIDDEN }}
          forgotPasswordEmailContainer={{
            value: forgotEmail,
            onChange: (v: string) => {
              setForgotEmail(v);
              if (forgotError) setForgotError(null);
            },
          }}

          forgotPasswordError={{ style: showForgotForm && forgotError ? SHOWN : HIDDEN }}
          forgotPasswordErrorContent={{ children: forgotError ?? "" }}
          continueButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleForgotContinue();
            },
          }}
          backButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              backToLogin();
            },
          }}

          emailNoticeContainer={{ style: showEmailNotice ? SHOWN : HIDDEN }}
          alreadyLoggedIn={{ style: loggedIn ? undefined : HIDDEN }}
          toDashboardButton={{ onClick: () => router.push("/dashboard") }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default LogIn;
