import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";
import Avatar from "../public/images/avatar2.png";
import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Providers } from "./providers";
import useLocalStorage from "use-local-storage";
import { useState } from "react";
import Nav from "./nav";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
  postData,
  bg,
}: {
  children: React.ReactNode;
  home?: boolean;
  bg?: string;
  postData?: {
    date: string;
    title: string;
    contentHtml: string;
    subtitle: string;
    category: string;
  };
}) {
  const [theme, setTheme] = useState("okaidia");

  return (
    <div className="smooth-scroll dark-mode min-h-screen font-rubik transition duration-200 dark:bg-slate-950 flex flex-col bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
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
      </Head>
      <Providers>
        <Nav />
        <Header>
          {home ? (
            <div className="mx-auto max-w-6xl flex flex-col justify-end mt-12">
              <Image className="w-96 mx-auto" src={Avatar} alt="Me" />
            </div>
          ) : (
            <div className="flex flex-col justify-end z-10 mx-auto max-w-6xl w-full lg:px-12 px-6 lg:mt-20 mt-6 pb-8 lg:pb-14">
              <div className="mb-2 text-slate-50 capitalize text-sm lg:text-[16px]">
                <Link href="/" className="text-white hover:text-gray-400">
                  Home
                </Link>
                <span className="mx-5">&gt;</span>
                <Link
                  href={`/categories/${postData?.category.toLowerCase()}`}
                  className="hover:text-gray-400"
                >
                  {postData?.category}
                </Link>
              </div>
              <div className="text-2xl lg:text-4xl font-medium leading-snug">
                {postData?.title}
              </div>
              {postData?.subtitle && postData?.subtitle.length > 0 && (
                <div className="mt-2 text-medium lg:text-lg font-normal md:block text-slate-400 text-sm">
                  {postData?.subtitle}
                </div>
              )}
            </div>
          )}
        </Header>
        <main
          className={`${
            bg === "grey" ? "bg-gray-100" : "bg-white"
          } dark:bg-gray-950`}
        >
          {children}
        </main>
      </Providers>
    </div>
  );
}
