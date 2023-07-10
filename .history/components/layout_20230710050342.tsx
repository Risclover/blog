import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";

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
    <div className="smooth-scroll dark-mode bg-white-100 min-h-screen font-rubik transition duration-200 dark:bg-gray-900 flex flex-col ">
      <Header type="" />
      <main className="mx-auto max-w-5xl w-full">{children}</main>
      <Footer />
    </div>
  );
}
