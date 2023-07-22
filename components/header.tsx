import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const Header = (props: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
