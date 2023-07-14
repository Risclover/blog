import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script src="storage.ts" />
        <script>
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";

      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";

      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");

      const darkToggle = document.querySelector(".toggle-dark");
    </script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
