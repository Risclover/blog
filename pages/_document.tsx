import BackToTop from "@/components/backtotop";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" suppressHydrationWarning>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1 maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <BackToTop />
        </body>
      </Html>
    );
  }
}
