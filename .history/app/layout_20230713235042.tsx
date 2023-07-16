import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../fonts/wotfard-cufonfonts-webfont/style.css";
import "@theme-toggles/react/css/Around.css";
import { ThemeProvider } from "next-themes";

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
