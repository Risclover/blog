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

        <title>React App</title>

        <script src="storage.js"></script>
      </Head>
      <body>
        <script src="storage.js"></script>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
