import Link from "next/link";
import React from "react";
import { ClickAwayListener } from "@mui/base";

type Props = {
  dropdownStatus: string;
  setDropdownStatus: any;
};

const Projects = (props: Props) => {
  const handleClickAway = () => {
    props.setDropdownStatus("");
  };

  return (
    <div
      className={`projects-dropdown ${props.dropdownStatus}border-t-4 dark:border-slate-950 border-indigo-400 w-[200px] bg-white absolute top-[40px] left-[0px] text-black overflow-hidden flex flex-col dark:bg-slate-800 dark:text-gray-50`}
    >
      <Link
        href="/projects/ribbit"
        className="dark:hover:bg-slate-600 hover:bg-sky-100 pt-1 px-4 w-full cursor-pointer block"
      >
        Ribbit
      </Link>
      <Link
        className="dark:hover:bg-slate-600 hover:bg-sky-100 pt-1 px-4 w-full cursor-pointer block"
        href="/projects/reduncrate"
      >
        Reduncrate
      </Link>
      <Link
        className="dark:hover:bg-slate-600 hover:bg-sky-100 pt-1 px-4 w-full cursor-pointer block"
        href="/projects/airbnbeezy"
      >
        Airbnbeezy
      </Link>
    </div>
  );
};

export default Projects;
