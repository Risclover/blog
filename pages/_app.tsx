import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../fonts/wotfard-cufonfonts-webfont/style.css";
import "@theme-toggles/react/css/Around.css";
import "../styles/prism-theme.css";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { MDXProvider } from "@mdx-js/react";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
