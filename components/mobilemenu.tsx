import React, { SetStateAction, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

type Props = {
  menu: boolean;
  setMenu: React.Dispatch<SetStateAction<boolean>>;
};

function MobileMenu({ menu, setMenu }: Props) {
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu]);

  return (
    <div
      className={`mobile-menu ${
        menu ? "open" : ""
      } h-[100vh] w-[100%] p-20 backdrop-blur-sm text-4xl font-wotfard flex flex-col justify-between top-[3.8rem]`}
      onClick={() => setMenu(!menu)}
    >
      <div className="max-w-6xl mx-auto w-full lg:px-12">
        <ul className="w-full">
          <li className="w-full">
            <Link
              href="/#about"
              className="mb-4 w-[100%] block hover:text-slate-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/#projects"
              className="mb-4 block hover:text-slate-400 transition duration-300"
            >
              Projects
            </Link>
            <ul className="mb-4 text-3xl ml-6 w-full">
              <li className="mb-4 w-full">
                <Link
                  href="/projects/ribbit"
                  className="w-full block hover:text-slate-400 transition duration-300"
                >
                  Ribbit
                </Link>
              </li>
              <li className="mb-4 w-full">
                <Link
                  href="/projects/reduncrate"
                  className="w-full block hover:text-slate-400 transition duration-300"
                >
                  Reduncrate
                </Link>
              </li>
              <li className="mb-4 w-full">
                <Link
                  href="/projects/airbnbeezy"
                  className="w-full block hover:text-slate-400 transition duration-300"
                >
                  Airbnbeezy
                </Link>
              </li>
            </ul>
          </li>
          <li className="w-full">
            <Link
              href="/blog"
              className="mb-4 w-[100%] block hover:text-slate-400 transition duration-300"
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className="mt-20 mb-[40px] text-3xl">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
