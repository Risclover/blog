import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);

    let tocElement: any = document.querySelector(".toc-ul");
    let mobileElement: any = document.querySelector(".mobile-toc-scroll");

    if (tocElement) {
      tocElement.style.overflow = "hidden";
      tocElement.setAttribute(
        "data-color-scheme",
        isDarkMode ? "light" : "dark"
      );
      tocElement.style.overflow = "";
    }

    if (mobileElement) {
      mobileElement.style.overflow = "hidden";
      mobileElement.setAttribute(
        "data-color-scheme",
        isDarkMode ? "light" : "dark"
      );
      mobileElement.style.overflow = "";
    }

    document.documentElement.style.overflow = "hidden";

    document.body.clientWidth;

    document.documentElement.setAttribute(
      "data-color-scheme",
      isDarkMode ? "light" : "dark"
    );

    document.documentElement.style.overflow = "";
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
    <button onClick={handleToggle} className="flex items-center justify-center">
      {isDarkMode ? (
        <BsSunFill className="text-gray-50 text-[20px] hover:text-yellow-500 transition-colors duration-300" />
      ) : (
        <BsMoonFill className="text-gray-50 text-[20px] hover:text-yellow-500 transition-colors duration-300" />
      )}
    </button>
  );
};

export default DarkModeToggle;
