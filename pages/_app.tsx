import "../components/plasmic/plasmic__default_style.css";
import "../components/plasmic/eco_munity_cleanup_tracker/plasmic.css";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function detectPageBackground(): string | null {
  let el: Element | null = document.getElementById("__next")?.firstElementChild ?? null;
  while (el) {
    const bg = getComputedStyle(el).backgroundColor;
    if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") return bg;
    el = el.firstElementChild;
  }
  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const lastBg = useRef<string | null>(null);

  useEffect(() => {
    const root = document.getElementById("__next");
    if (!root) return;

    let raf = 0;
    const sync = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const bg = detectPageBackground();
        if (!bg || bg === lastBg.current) return;
        lastBg.current = bg;
        document.documentElement.style.backgroundColor = bg;
        document.body.style.backgroundColor = bg;
      });
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [router.asPath]);

  return <Component {...pageProps} />;
}
