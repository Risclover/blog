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
  const [darkTheme, setDarkTheme] = useState<Boolean | undefined>(undefined);
  const handleToggle = () => {
    setDarkTheme(!darkTheme);
  };
  const storeUserSetPreference = (pref: string) => {
    localStorage.setItem("theme", pref);
  };
  let root = document.documentElement;

  useEffect(() => {
    root = document.documentElement;
  }, []);
  useEffect(() => {
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setDarkTheme(initialColorValue === "dark");
  }, []);
  useEffect(() => {
    root = document.documentElement;

    if (darkTheme !== undefined) {
      if (darkTheme) {
        document.documentElement.setAttribute("data-theme", "dark");
        storeUserSetPreference("dark");
      } else {
        root.removeAttribute("data-theme");
        storeUserSetPreference("light");
      }
    }
  }, [darkTheme]);
  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      <div className="py-2 flex items-end justify-between pt-5 text-4xl text-gray-900 mb-4 bg-slate-800 z-50 max-w-6xl mx-auto w-full px-12">
        <div className="text-3xl font-logo min-w-fit text-white">
          <Link href="/">Sara Dunlop</Link>
        </div>
        <Around
          className="text-amber-400"
          duration={750}
          toggled={!darkTheme}
          onToggle={handleToggle}
        />
      </div>
      {props.children}
    </header>
  );
};

export default Header;
