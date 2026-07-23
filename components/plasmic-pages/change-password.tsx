import * as React from "react";
import { useEffect, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicChangePassword } from "../plasmic/eco_munity_cleanup_tracker/PlasmicChangePassword";
import {
  validatePassword,
  changePassword,
  completePasswordRecovery,
  useAuthUser,
} from "../../lib/api";
import { getSupabaseBrowserClient } from "../../lib/supabase/browser";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

type Phase = "form" | "success";

function ChangePassword() {
  const router = useRouter();
  const { user, loading } = useAuthUser();

  const [recovery, setRecovery] = useState(false);
  const [recoveryChecked, setRecoveryChecked] = useState(false);

  const [phase, setPhase] = useState<Phase>("form");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    const supabase = getSupabaseBrowserClient();
    const { data: sub } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") setRecovery(true);
    });
    void (async () => {
      await Promise.resolve();
      if (!active) return;
      const url = new URL(window.location.href);
      const hash = window.location.hash;
      if (
        /type=recovery/.test(hash) ||
        url.searchParams.has("code") ||
        url.searchParams.get("type") === "recovery"
      ) {
        setRecovery(true);
      }
      setRecoveryChecked(true);
    })();
    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!recoveryChecked || loading) return;
    if (!recovery && !user) router.replace("/log-in");
  }, [recoveryChecked, loading, recovery, user, router]);

  function newPasswordError(): string | null {
    const pwErr = validatePassword(newPassword);
    if (pwErr) return pwErr;
    if (confirmPassword.length === 0) return "Type your new password again to confirm.";
    if (newPassword !== confirmPassword) return "Passwords don't match.";
    return null;
  }

  function clearError() {
    if (error) setError(null);
  }

  async function handleRegularChange() {
    if (busy) return;
    const v = newPasswordError();
    if (v) {
      setError(v);
      return;
    }
    if (currentPassword.length === 0) {
      setError("Please enter your current password.");
      return;
    }
    setError(null);
    setBusy(true);
    const { error } = await changePassword(currentPassword, newPassword);
    setBusy(false);
    if (error) {
      setError(
        /current[_ ]?password|incorrect/i.test(error.message)
          ? "Current password is incorrect."
          : error.message
      );
      return;
    }
    setPhase("success");
  }

  async function handleRecoveryChange() {
    if (busy) return;
    const v = newPasswordError();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    setBusy(true);
    const { error } = await completePasswordRecovery(newPassword);
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    setPhase("success");
  }

  const showRegularForm = !recovery && phase === "form" && !!user;
  const showRecoveryForm = recovery && phase === "form";
  const showRegularSuccess = !recovery && phase === "success";
  const showRecoverySuccess = recovery && phase === "success";

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicChangePassword

          changePasswordContainer={{ style: showRegularForm ? SHOWN : HIDDEN }}
          currentPasswordContainer={{
            value: currentPassword,
            onChange: (v: string) => {
              setCurrentPassword(v);
              clearError();
            },
          }}
          newPasswordContainer={{
            value: newPassword,
            onChange: (v: string) => {
              setNewPassword(v);
              clearError();
            },
          }}
          confirmNewPasswordContainer={{
            value: confirmPassword,
            onChange: (v: string) => {
              setConfirmPassword(v);
              clearError();
            },
          }}
          passwordError={{ style: showRegularForm && error ? SHOWN : HIDDEN }}
          passwordErrorContent={{ children: error ?? "" }}
          continueButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleRegularChange();
            },
          }}

          resetPasswordContainer={{ style: showRecoveryForm ? SHOWN : HIDDEN }}
          resetNewPasswordContainer={{
            value: newPassword,
            onChange: (v: string) => {
              setNewPassword(v);
              clearError();
            },
          }}
          resetConfirmNewPasswordContainer={{
            value: confirmPassword,
            onChange: (v: string) => {
              setConfirmPassword(v);
              clearError();
            },
          }}
          resetPasswordError={{ style: showRecoveryForm && error ? SHOWN : HIDDEN }}
          passwordErrorContent2={{ children: error ?? "" }}
          resetContinueButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleRecoveryChange();
            },
          }}

          successContainer={{ style: showRegularSuccess ? SHOWN : HIDDEN }}
          toDashboardButton={{ onClick: () => router.push("/dashboard") }}
          resetSuccessContainer={{ style: showRecoverySuccess ? SHOWN : HIDDEN }}
          toLogInButton={{ onClick: () => router.push("/log-in") }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default ChangePassword;
