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

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://ecomunity-cleanup-tracker.vercel.app"
).replace(/\/+$/, "");

function siteUrl(): string {
  return SITE_URL;
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

export async function sendPasswordReset(email: string) {
  return getSupabaseBrowserClient().auth.resetPasswordForEmail(email.trim(), {
    redirectTo: `${siteUrl()}/change-password`,
  });
}

export async function changePassword(currentPassword: string, newPassword: string) {
  return getSupabaseBrowserClient().auth.updateUser({
    password: newPassword,
    current_password: currentPassword,
  });
}

export async function completePasswordRecovery(newPassword: string) {
  return getSupabaseBrowserClient().auth.updateUser({ password: newPassword });
}

export async function changeEmail(email: string) {
  return getSupabaseBrowserClient().auth.updateUser(
    { email: email.trim() },
    { emailRedirectTo: `${siteUrl()}/profile` }
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
