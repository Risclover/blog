import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme(); // `resolvedTheme` is 'light' | 'dark'

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark/light mode"
      className="flex items-center justify-center"
    >
      {resolvedTheme === "dark" ? (
        <BsSunFill className="text-gray-50 text-large hover:text-yellow-500 transition-colors duration-300" />
      ) : (
        <BsMoonFill className="text-gray-50 text-large hover:text-yellow-500 transition-colors duration-300" />
      )}
    </button>
  );
};

export default DarkModeToggle;
