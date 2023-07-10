import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../fonts/wo"

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
