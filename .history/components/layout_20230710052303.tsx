import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";
import Avatar from "../images/avatar2.png";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
  postData,
}: {
  children: React.ReactNode;
  home?: boolean;
  postData?: {
    date: string;
    title: string;
    contentHtml: string;
    subtitle: string;
    category: string;
  };
}) {
  return (
    <div className="w-full">
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
      </Head>
      <Header>
        {home ? (
          <div className="mx-auto max-w-6xl sm:h-72 flex flex-col justify-end">
            <Image className="w-96 m-auto" src={Avatar} alt="Me" />
          </div>
        ) : (
          <div className="sm:h-72 flex flex-col justify z-10 mx-auto max-w-6xl w-full">
            <div className="mt-20 mb-5 capitalize">
              <span>Home</span>
              <span className="mx-5">&gt;</span>
              <span>Category</span>
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
      <main className="mx-auto max-w-6xl w-full">{children}</main>
    </div>
  );
}
