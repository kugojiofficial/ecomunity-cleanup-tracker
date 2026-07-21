import "../components/plasmic/plasmic__default_style.css";
import "../components/plasmic/eco_munity_cleanup_tracker/plasmic.css";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Match the html/body background (what shows during mobile overscroll) to the
// current page's actual background, by walking down from the app root to the
// first element with a solid background. Runs on every route change.
function syncPageBackground() {
  let el: Element | null = document.getElementById("__next")?.firstElementChild ?? null;
  while (el) {
    const bg = getComputedStyle(el).backgroundColor;
    if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
      document.documentElement.style.backgroundColor = bg;
      document.body.style.backgroundColor = bg;
      return;
    }
    el = el.firstElementChild;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const id = requestAnimationFrame(syncPageBackground);
    return () => cancelAnimationFrame(id);
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
