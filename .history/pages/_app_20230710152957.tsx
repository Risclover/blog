import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../fonts/wotfard-cufonfonts-webfont/style.css";
import "@theme-toggles/react/css/around.css";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
