import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";
import { PiCaretDownFill } from "react-icons/pi";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Nav() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <div
      className={`navbar py-3 flex items-center text-4xl text-gray-900 bg-slate-900 z-50 w-full sticky top-0 lg:py-4`}
    >
      <div className="max-w-6xl lg:px-12 w-full mx-auto flex items-center px-6">
        <div className="flex items-center w-full">
          <div className="text-3xl font-logo min-w-fit text-gray-50">
            <Link href="/">Sara Dunlop</Link>
          </div>
          <div className="flex mt-2">
            <div className="ml-12 text-[16px] font-wotfard text-gray-50">
              <Link
                href="/"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                About
              </Link>
            </div>
            <div className="ml-10 text-[16px] font-wotfard text-gray-50 flex items-center">
              <Link
                href="/#projects"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Projects
              </Link>{" "}
              <PiCaretDownFill className="ml-2 hover:text-gray-400 cursor-pointer transition-colors duration-300" />
            </div>
            <div className="ml-10 text-[16px] font-wotfard text-gray-50">
              <Link
                href={`/blog`}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}
