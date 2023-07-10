import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import { getSortedPostsData } from "../lib/posts";



export default function Home() {
  return (
    <div className="bg-sky-400 min-h-screen">
      <Head>
        <title>Sara Dunlop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-sky-400">Hello?</div>
      </main>
    </div>
  );
}
