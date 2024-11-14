import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");

    let tocElement: any = document.querySelector(".toc-ul");
    let mobileElement: any = document.querySelector(".mobile-toc-scroll");

    if (tocElement) {
      tocElement.style.overflow = "hidden";
      tocElement.setAttribute(
        "data-color-scheme",
        theme === "light" ? "light" : "dark"
      );
      tocElement.style.overflow = "";
    }

    if (mobileElement) {
      mobileElement.style.overflow = "hidden";
      mobileElement.setAttribute(
        "data-color-scheme",
        theme === "light" ? "light" : "dark"
      );
      mobileElement.style.overflow = "";
    }

    document.documentElement.style.overflow = "hidden";

    document.body.clientWidth;

    document.documentElement.setAttribute(
      "data-color-scheme",
      theme === "light" ? "light" : "dark"
    );

    document.documentElement.style.overflow = "";
  };

  useEffect(() => {
    const storedMode = localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedMode) {
      setIsDarkMode(storedMode === "light");
    } else {
      setIsDarkMode(prefersDarkMode);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme === "dark" ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center"
      aria-label="Toggle dark/light mode"
    >
      {theme === "dark" ? (
        <BsSunFill className="text-gray-50 hover:text-yellow-500 transition-colors duration-300" />
      ) : (
        <BsMoonFill className="text-gray-50 hover:text-yellow-500 transition-colors duration-300" />
      )}
    </button>
  );
};

export default DarkModeToggle;
