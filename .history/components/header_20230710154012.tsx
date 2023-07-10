import React, { useEffect, useState } from "react";
import { Around } from "@theme-toggles/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export const Header = (props: Props) => {
  const router = useRouter();
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };
  console.log("query:", router.query.id);
  console.log("path:", router.pathname);
  console.log("asPath:", router.asPath);
  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      <div className="py-2 flex items-end justify-between pt-5 text-4xl text-gray-900 mb-4 bg-slate-800 z-50 max-w-5xl mx-auto w-full px-12">
        <div className="text-3xl font-logo min-w-fit text-white">
          <Link href="/">Sara Dunlop</Link>
        </div>
        <Around
          className="text-amber-400"
          duration={750}
          toggled={!isDarkMode}
          onToggle={toggleDarkMode}
        />
      </div>
      {props.children}
    </header>
  );
};

export default Header;
