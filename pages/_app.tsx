import "../components/plasmic/plasmic__default_style.css";
import "../components/plasmic/eco_munity_cleanup_tracker/plasmic.css";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
