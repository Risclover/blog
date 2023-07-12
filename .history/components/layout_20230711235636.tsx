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
  return (
    <div className="smooth-scroll dark-mode min-h-screen font-rubik transition duration-200 dark:bg-gray-900 flex flex-col bg-white">
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

        <Script src="storage.ts" />
      </Head>
      <Providers>
        <Header>
          {home ? (
            <div className="mx-auto max-w-6xl sm:h-72 flex flex-col justify-end">
              <Image className="w-96 mx-auto" src={Avatar} alt="Me" />
            </div>
          ) : (
            <div className="sm:h-72 flex flex-col justify-end z-10 mx-auto max-w-6xl w-full px-12">
              <div className="mt-20 mb-5 text-slate-50 capitalize">
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
              <div className="text-2xl sm:text-4xl font-medium leading-snug">
                {postData?.title}
              </div>
              <div className="mt-2 text-medium sm:text-lg font-normal pb-14 text-slate-400">
                {postData?.subtitle}
              </div>
            </div>
          )}
        </Header>
        <main
          className={`${
            bg === "grey" ? "bg-gray-100" : "bg-white"
          } dark:bg-gray-900`}
        >
          {children}
        </main>
      </Providers>
    </div>
  );
}
