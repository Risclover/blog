import Document, { Html, Head, Main, NextScript } from "next/document";
import BackToTop from "@/components/backtotop";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" suppressHydrationWarning lang="en">
        <Head>
          <meta name="color-scheme" content="dark light" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
          <meta
            name="description"
            content="Sara Dunlop is a passionate and talented fullstack software engineer and web developer. This is her portfolio site, where visitors can find her skill stack, her blog, and examples of her work."
          />
        </Head>
        <body>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-WRH7PCS4FP"
          ></script>

          <Main />
          <NextScript />
          <BackToTop />
        </body>
      </Html>
    );
  }
}
