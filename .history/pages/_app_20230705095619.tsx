import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import 

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
