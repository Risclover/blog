import React, { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const DarkModeToggle: React.FC = () => {
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
    <button onClick={handleToggle} className="flex items-center justify-center">
      {isDarkMode ? (
        <BsSunFill className="text-gray-50 text-[24px]" />
      ) : (
        <BsMoonFill className="text-gray-50 text-[24px]" />
      )}
    </button>
  );
};

export default DarkModeToggle;
