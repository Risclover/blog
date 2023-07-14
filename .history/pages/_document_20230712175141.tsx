import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta name="theme-color" content="#4285f4" />
    <meta
      className="meta-theme"
      name="theme-color"
      content="#FAFAFA"
      data-other="#18181B"
    />
    <meta
      className="meta-theme"
      name="color-scheme"
      content="light"
      data-other="dark"
    />
    <meta name="color-scheme" content="dark" />

    <meta
      name="description"
      content="Web site created using create-react-app"
    />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <title>React App</title>

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
  </Head>
      <body>
        <script src="storage.js"></script>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
