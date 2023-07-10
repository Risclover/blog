import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
