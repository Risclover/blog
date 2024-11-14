import BackToTop from "@/components/backtotop";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="scroll-smooth" suppressHydrationWarning lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />
          <meta
            name="description"
            content="Sara Dunlop is a fullstack software engineer and web developer who is super passionate about her job. This is her personal website, where visitors can find examples of her work, her skill stack, and her blog, where she writes about software engineer-related things, and occasionally includes personal blog posts about her life."
          />
          <title>Sara Dunlop | Portfolio Website</title>
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
