import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { ClickAwayListener } from "@mui/base";
import Header from "./header";
import { Providers } from "./providers";
import Nav from "./nav";
import BackToTop from "./backtotop";
import MobileMenu from "./mobilemenu";
import Avatar from "public/images/avatar2.png";
import Contact from "./Homepage/contact";

export const siteTitle = "Sara Dunlop Portfolio";

export default function Layout({
  children,
  home,
  postData,
  projectData,
  bg,
}: {
  children: React.ReactNode;
  home?: boolean;
  bg?: string;
  postData?: {
    date?: string;
    title: string;
    type?: string;
    categoryUrl?: string;
    contentHtml?: string;
    subtitle: string;
    category: string;
  };
  projectData?: {
    title: string;
    subtitle: string;
  };
}) {
  const [theme, setTheme] = useState("okaidia");
  const [menu, setMenu] = useState(false);

  const router = useRouter();

  return (
    <div className="smooth-scroll dark-mode min-h-screen font-rubik transition duration-200 dark:bg-slate-800 flex flex-col relative">
      <Head>
        <link rel="icon" href="/blog-logo.ico" />
        <meta
          name="description"
          content="Come check out the world and works of Sara Dunlop!"
        />
        <meta property="og:image" content={`/blog-logo.ico`} />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />

        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
          rel="stylesheet"
        />
        <link href="styles/prism-theme.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/prismjs@1.30.0/prism.min.js" />
        <script src="https://app.unpkg.com/prismjs@1.30.0/files/components/prism-jsx.js" />
        <script src="https://app.unpkg.com/prismjs@1.30.0/files/components/prism-bash.js" />
        <script src="https://app.unpkg.com/prismjs@1.30.0/files/components/prism-json.js" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/components/prism-python.min.js" />
        <title>Sara Dunlop | Portfolio</title>
      </Head>
      <ClickAwayListener onClickAway={() => setMenu(false)}>
        <MobileMenu menu={menu} setMenu={setMenu} />
      </ClickAwayListener>
      <Nav menu={menu} setMenu={setMenu} />
      {router.pathname !== "/" && (
        <Header>
          {home ? (
            <div className="mx-auto max-w-6xl flex flex-col justify-end mt-12">
              <Image className="w-96 mx-auto" src={Avatar} alt="Me" />
            </div>
          ) : (
            <div className="flex flex-col justify-end z-10 mx-auto max-w-6xl w-full lg:px-12 px-6 lg:mt-20 mt-6 pb-8 lg:pb-14">
              <div className="mb-2 text-slate-50 capitalize text-medium lg:text-base">
                <Link href="/" className="text-white hover:text-gray-400">
                  Home
                </Link>
                <span className="mx-5">&gt;</span>

                <Link
                  href={postData?.type === "Blog" ? "/blog" : "/#projects"}
                  className="hover:text-gray-400"
                >
                  {postData?.type === "Blog" ? postData?.type : "Projects"}
                </Link>

                {postData?.type === "Blog" && (
                  <>
                    <span className="mx-5">&gt;</span>
                    <Link
                      href={`${
                        postData?.category
                          ? postData?.categoryUrl
                          : `/categories/${postData?.category?.toLowerCase()}`
                      }`}
                      className="hover:text-gray-400"
                    >
                      {postData?.category}
                    </Link>
                  </>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl font-medium leading-tight">
                {postData?.title || projectData?.title}
              </h1>
              {postData?.subtitle && postData?.subtitle.length > 0 && (
                <div className="mt-2 text-medium lg:text-lg font-normal md:block text-slate-400 leading-tight">
                  {postData?.subtitle}
                </div>
              )}
              {projectData?.subtitle && projectData?.subtitle.length > 0 && (
                <div className="mt-2 text-medium lg:text-lg font-normal md:block text-slate-400 leading-tight">
                  {projectData?.subtitle}
                </div>
              )}
            </div>
          )}
        </Header>
      )}
      <main
        className={`${
          bg === "grey" ? "bg-gray-100" : "bg-white"
        } dark:bg-slate-950 relative`}
      >
        {children}
        <BackToTop />
      </main>
      <div className="w-full bg-slate-900 text-gray-50 dark:text-gray-50">
        <div className="px-6 lg:px-12 lg:max-w-6xl mx-auto w-full py-20">
          <Contact />
        </div>
      </div>
    </div>
  );
}
