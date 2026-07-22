import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "../supabase/browser";
import type { Database } from "../supabase/database.types";

export type AppRole = Database["public"]["Enums"]["app_role"];

export type SignUpInput = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

function siteOrigin(): string {
  return typeof window !== "undefined" ? window.location.origin : "";
}

export async function signUp({ email, password, firstName, lastName }: SignUpInput) {
  return getSupabaseBrowserClient().auth.signUp({
    email: email.trim(),
    password,
    options: {
      data: { first_name: firstName.trim(), last_name: lastName.trim() },
    },
  });
}

export async function signIn(email: string, password: string) {
  return getSupabaseBrowserClient().auth.signInWithPassword({
    email: email.trim(),
    password,
  });
}

export async function signOut() {
  return getSupabaseBrowserClient().auth.signOut();
}

// Sends a password-reset email. The link lands on /change-password, where the
// browser client auto-exchanges the recovery code (detectSessionInUrl) and
// fires a PASSWORD_RECOVERY auth event → the page shows its recovery container.
export async function sendPasswordReset(email: string) {
  return getSupabaseBrowserClient().auth.resetPasswordForEmail(email.trim(), {
    redirectTo: `${siteOrigin()}/change-password`,
  });
}

// Regular change (signed-in user): the server validates the current password,
// so a wrong one comes back as an error we surface as "Current password is
// incorrect." Requires supabase-js >= 2.102 (current_password field).
export async function changePassword(currentPassword: string, newPassword: string) {
  return getSupabaseBrowserClient().auth.updateUser({
    password: newPassword,
    current_password: currentPassword,
  });
}

// After a recovery link the user is already authenticated by the emailed
// session, so no current password is required.
export async function completePasswordRecovery(newPassword: string) {
  return getSupabaseBrowserClient().auth.updateUser({ password: newPassword });
}

// Supabase (with "Secure email change" on) emails a confirmation link to BOTH
// the old and new address; the change only applies once both are confirmed.
export async function changeEmail(email: string) {
  return getSupabaseBrowserClient().auth.updateUser(
    { email: email.trim() },
    { emailRedirectTo: `${siteOrigin()}/profile` }
  );
}

export function validateName(name: string, label = "a name"): string | null {
  const n = name.trim();
  if (n.length === 0) return `Please enter ${label}.`;
  if (n.length < 2) return "Must be at least 2 characters.";
  if (n.length > 30) return "Must be 30 characters or fewer.";
  return null;
}

export function validateEmail(email: string): string | null {
  const e = email.trim();
  if (!e) return "Please enter your email.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return "Enter a valid email address.";
  return null;
}

// Mirrors the Supabase Auth email settings (min length 8; lowercase + uppercase
// + digit + symbol). Keep in sync with the dashboard — the server rejects
// mismatches and the general error box surfaces its message. The leaked-password
// (HaveIBeenPwned) check is server-side only and can't be replicated here.
// Supabase Auth only accepts these symbols (plus letters/digits): the set from
// https://supabase.com/docs/guides/auth/password-security . Anything else
// (spaces, accented/unicode letters, emoji, …) is rejected. Character class
// escaped for a JS regex: ] and \ and / are escaped, - is escaped, and ^ is not
// first so it is literal.
const UNSUPPORTED_PASSWORD_CHAR = /[^A-Za-z0-9!@#$%^&*()_+\-=\[\]{};'\\:"|<>?,.\/`~]/;

export function validatePassword(password: string): string | null {
  if (password.length === 0) return "Please enter a password.";
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (password.length > 72) return "Password must be 72 characters or fewer.";
  if (UNSUPPORTED_PASSWORD_CHAR.test(password)) return "Password contains unsupported characters.";
  if (!/[a-z]/.test(password)) return "Password must include a lowercase letter.";
  if (!/[A-Z]/.test(password)) return "Password must include an uppercase letter.";
  if (!/[0-9]/.test(password)) return "Password must include a number.";
  if (!/[^A-Za-z0-9\s]/.test(password)) return "Password must include a symbol.";
  return null;
}

export function useAuthUser(): { user: User | null; loading: boolean } {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = getSupabaseBrowserClient();
    let active = true;

    supabase.auth.getUser().then(({ data }) => {
      if (!active) return;
      setUser(data.user);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      active = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}

export function useRequireAuth(): { user: User | null; loading: boolean } {
  const { user, loading } = useAuthUser();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) router.replace("/log-in");
  }, [loading, user, router]);
  return { user, loading };
}

// Authoritative role read (server-controlled `public.users.role`, never JWT
// metadata). Returns null when signed out or on error.
export async function getMyRole(): Promise<AppRole | null> {
  const supabase = getSupabaseBrowserClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("users")
    .select("role")
    .eq("id", user.id)
    .single();

  if (error || !data) return null;
  return data.role;
}

// Gate a page to Developers. Signed-out users go to /log-in; signed-in
// non-developers go to /dashboard. This is a UX gate only — the authoritative
// control is server-side `requireDeveloper` in lib/supabase/server.ts.
export function useRequireDeveloper(): {
  user: User | null;
  role: AppRole | null;
  loading: boolean;
} {
  const { user, loading } = useAuthUser();
  const router = useRouter();
  const [role, setRole] = useState<AppRole | null>(null);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (loading) return;
    let active = true;
    void (async () => {
      await Promise.resolve();
      if (!active) return;
      if (!user) {
        setRole(null);
        setRoleLoading(false);
        return;
      }
      setRoleLoading(true);
      const r = await getMyRole();
      if (!active) return;
      setRole(r);
      setRoleLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [user, loading]);

  useEffect(() => {
    if (loading || roleLoading) return;
    if (!user) {
      router.replace("/log-in");
      return;
    }
    if (role !== "developer") router.replace("/dashboard");
  }, [loading, roleLoading, user, role, router]);

  return { user, role, loading: loading || roleLoading };
}
