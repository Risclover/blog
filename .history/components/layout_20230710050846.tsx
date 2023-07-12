import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";

const name = "[Your Name]";
export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
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
          <div className="sm:h-72 flex flex-col justify-end">
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
              Title
            </div>
            <div className="mt-2 text-medium sm:text-lg font-normal pb-14 text-slate-400">
              Subtitle
            </div>
          </div>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
