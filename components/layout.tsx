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
    <div className="smooth-scroll dark-mode min-h-screen font-rubik transition duration-200 dark:bg-slate-800 flex flex-col bg-white relative">
      <Head>
        <link rel="icon" href="/blog-logo.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
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
        <Script src="storage.js" />
        <title>Sara Dunlop | Portfolio</title>
      </Head>
      <Providers>
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
                <div className="mb-2 text-slate-50 capitalize text-medium lg:text-[16px]">
                  <Link href="/" className="text-white hover:text-gray-400">
                    Home
                  </Link>
                  <span className="mx-5">&gt;</span>
                  {postData?.type === "Blog" && (
                    <Link href="/blog" className="hover:text-gray-400">
                      {postData?.type}
                    </Link>
                  )}

                  {postData?.category !== "Projects" && (
                    <span className="mx-5">&gt;</span>
                  )}
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
      </Providers>
    </div>
  );
}
