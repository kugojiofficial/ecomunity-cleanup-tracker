import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import type { User } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "../supabase/browser";

export type SignUpInput = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

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

export function validatePassword(password: string): string | null {
  if (password.length === 0) return "Please enter a password.";
  if (password.length < 8) return "Password must be at least 8 characters.";
  if (password.length > 100) return "Password must be 100 characters or fewer.";
  if (!/[a-zA-Z]/.test(password)) return "Password must include a letter.";
  if (!/[0-9]/.test(password)) return "Password must include a number.";
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
