import BackToTop from "@/components/backtotop";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
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
