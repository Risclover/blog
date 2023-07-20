import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../fonts/wotfard-cufonfonts-webfont/style.css";
import "@theme-toggles/react/css/Around.css";
import "../styles/prism-theme.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
