import React, { useEffect, useState } from "react";
import { Around } from "@theme-toggles/react";
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import DarkModeToggle from "./DarkModeToggle";

type Props = {
  children: React.ReactNode;
};

export const Header = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedMode) {
      setIsDarkMode(storedMode === "dark");
    } else {
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-900 ">
      {props.children}
    </header>
  );
};

export default Header;
