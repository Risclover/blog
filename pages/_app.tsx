import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../fonts/wotfard-cufonfonts-webfont/style.css";
import "@theme-toggles/react/css/Around.css";
import "../styles/prism-theme.css";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{ pageInitial: { opacity: 0 }, pageAnimate: { opacity: 1 } }}
      >
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}
