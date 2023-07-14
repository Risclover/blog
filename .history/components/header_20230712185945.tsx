import React, { useEffect, useState } from "react";
import { Around } from "@theme-toggles/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { DarkModeSwitch } from "react-toggle-dark-mode";

type Props = {
  children: React.ReactNode;
};

export const Header = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(undefined);

  console.log("is dark mode:", isDarkMode);

  const handleToggle = (e) => {
    setIsDarkMode(e.target.checked);
  };

  const getMediaQueryPreference = () => {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const mql = window.matchMedia(mediaQuery);
    const hasPreference = typeof mql.matches === "boolean";

    if (hasPreference) {
      return mql.matches ? "dark" : "light";
    }
  };

  const storeUserSetPreference = (pref) => {
    localStorage.setItem("theme", pref);
  };

  const getUserSetPreference = () => {
    return localStorage.getItem("theme");
  };

  useEffect(() => {
    const userSetPreference = getUserSetPreference();
    if (userSetPreference !== null) {
      setIsDarkMode(userSetPreference === "dark");
    } else {
      const mediaQueryPreference = getMediaQueryPreference();
      setIsDarkMode(mediaQueryPreference === "dark");
    }
  }, []);

  useEffect(() => {
    if (typeof isDarkMode !== "undefined") {
      
    }
  })

  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      <div className="py-2 flex items-end justify-between pt-5 text-4xl text-gray-900 mb-4 bg-slate-800 z-50 max-w-6xl mx-auto w-full px-12">
        <div className="text-3xl font-logo min-w-fit text-white">
          <Link href="/">Sara Dunlop</Link>
        </div>
        <label>
          <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />{" "}
          Dark
        </label>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
