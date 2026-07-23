import * as React from "react";
import { useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicSignUp } from "../plasmic/eco_munity_cleanup_tracker/PlasmicSignUp";
import {
  signUp,
  validateName,
  validateEmail,
  validatePassword,
  useAuthUser,
} from "../../lib/api";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

type Field = "firstName" | "lastName" | "email" | "password" | "confirmPassword";
type Flags = Record<Field, boolean>;
const NO_FLAGS: Flags = {
  firstName: false,
  lastName: false,
  email: false,
  password: false,
  confirmPassword: false,
};

function SignUp() {
  const router = useRouter();
  const { user } = useAuthUser();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [flagged, setFlagged] = useState<Flags>(NO_FLAGS);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [generalError, setGeneralError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const loggedIn = !!user;

  const firstNameError = validateName(firstName, "your first name");
  const lastNameError = validateName(lastName, "your last name");
  const emailError = validateEmail(email);
  const pwRuleError = validatePassword(password);
  const confirmError = pwRuleError
    ? null
    : confirmPassword.length === 0
      ? "Type your password again to confirm."
      : password !== confirmPassword
        ? "Passwords don't match."
        : null;
  const passwordError = pwRuleError ?? confirmError;

  const hasFieldErrors = !!(firstNameError || lastNameError || emailError || passwordError);

  const unlocked = (field: Field) => flagged[field] || submitAttempted;

  const showFirst = unlocked("firstName") && !!firstNameError;
  const showLast = unlocked("lastName") && !!lastNameError;
  const showEmail = unlocked("email") && !!emailError;
  const showPassword =
    (!!pwRuleError && unlocked("password")) ||
    (!pwRuleError && !!confirmError && unlocked("confirmPassword"));

  function onChangeField(setter: (v: string) => void) {
    return (value: string) => {
      setter(value);
      if (generalError) setGeneralError(null);
    };
  }

  function onBlurField(field: Field) {
    return () => setFlagged((f) => (f[field] ? f : { ...f, [field]: true }));
  }

  async function handleSignUp() {
    if (busy) return;

    if (hasFieldErrors) {
      setSubmitAttempted(true);
      return;
    }
    setGeneralError(null);
    setBusy(true);
    const { data, error } = await signUp({ email, password, firstName, lastName });
    setBusy(false);
    if (error) {
      setGeneralError(
        /already registered|already exists|already been registered/i.test(error.message)
          ? "An account with this email already exists."
          : error.message
      );
      return;
    }

    if (data.user && data.user.identities && data.user.identities.length === 0) {
      setGeneralError("An account with this email already exists.");
      return;
    }
    if (data.session) {
      router.push("/dashboard");
      return;
    }
    setGeneralError("Account created — check your email to confirm, then log in.");
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
            onChange: onChangeField(setFirstName),
            onBlur: onBlurField("firstName"),
            style: loggedIn ? HIDDEN : undefined,
          }}
          firstNameError={{ style: !loggedIn && showFirst ? SHOWN : HIDDEN }}
          firstNameErrorContent={{ children: firstNameError ?? "" }}
          lastNameContainer={{
            value: lastName,
            onChange: onChangeField(setLastName),
            onBlur: onBlurField("lastName"),
            style: loggedIn ? HIDDEN : undefined,
          }}
          lastNameError={{ style: !loggedIn && showLast ? SHOWN : HIDDEN }}
          lastNameErrorContent={{ children: lastNameError ?? "" }}
          emailContainer={{
            value: email,
            onChange: onChangeField(setEmail),
            onBlur: onBlurField("email"),
            style: loggedIn ? HIDDEN : undefined,
          }}
          emailError={{ style: !loggedIn && showEmail ? SHOWN : HIDDEN }}
          emailErrorContent={{ children: emailError ?? "" }}
          passwordContainer={{
            value: password,
            onChange: onChangeField(setPassword),
            onBlur: onBlurField("password"),
            style: loggedIn ? HIDDEN : undefined,
          }}
          confirmPasswordContainer={{
            value: confirmPassword,
            onChange: onChangeField(setConfirmPassword),
            onBlur: onBlurField("confirmPassword"),
            disabled: password.length === 0,
            style: loggedIn ? HIDDEN : undefined,
          }}
          passwordError={{ style: !loggedIn && showPassword ? SHOWN : HIDDEN }}
          passwordErrorContent={{ children: passwordError ?? "" }}
          generalError={{ style: !loggedIn && generalError ? SHOWN : HIDDEN }}
          generalErrorContent={{ children: generalError ?? "" }}
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
