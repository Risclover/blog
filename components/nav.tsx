import React, { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { PiCaretDownFill } from "react-icons/pi";
import Hamburger from "hamburger-react";
import { ClickAwayListener } from "@mui/base";
import Aos from "aos";
import DarkModeToggle from "./DarkModeToggle";
import Projects from "./projects";
import "aos/dist/aos.css";

type Props = {
  menu: boolean;
  setMenu: React.Dispatch<SetStateAction<boolean>>;
};

export default function Nav({ menu, setMenu }: Props) {
  const [dropdownStatus, setDropdownStatus] = useState<string>("");

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const handleMenu = () => {
    if (dropdownStatus === "open ") {
      setDropdownStatus("");
    } else {
      setDropdownStatus("open ");
    }
  };

  const handleMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      className={`navbar py-3 flex items-center text-4xl text-gray-900 bg-slate-900 z-50 w-full sticky top-0 lg:py-4`}
    >
      <div className="max-w-6xl lg:px-12 w-full mx-auto flex items-center px-6">
        <div className="flex items-center w-full">
          <div className="text-3xl font-logo min-w-fit text-gray-50">
            <Link href="/">Sara Dunlop</Link>
          </div>
          <div className="flex mt-2 hidden sm:flex">
            <div className="ml-12 text-base font-wotfard text-gray-50">
              <Link
                href="/"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Home
              </Link>
            </div>
            <div className="ml-10 text-base font-wotfard text-gray-50 flex items-center relative">
              <Link
                href="/#projects"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Projects
              </Link>{" "}
              <ClickAwayListener onClickAway={() => setDropdownStatus("")}>
                <div
                  className="ml-2 p-1 cursor-pointer hover:text-gray-400 transition-colors duration-300"
                  tabIndex={0}
                  onClick={handleMenu}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleMenu();
                    }
                  }}
                >
                  <PiCaretDownFill />{" "}
                  <Projects dropdownStatus={dropdownStatus} />
                </div>
              </ClickAwayListener>
            </div>
            <div className="ml-6 text-base font-wotfard text-gray-50">
              <Link
                href={`/blog`}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden sm:block text-[1.25rem]">
          <DarkModeToggle />
        </div>
        <div className="block sm:hidden">
          <Hamburger
            color="white"
            size={20}
            rounded
            onToggle={handleMobileMenu}
            toggled={menu}
          />
        </div>
      </div>
    </div>
  );
}
