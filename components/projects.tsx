import Link from "next/link";
import React from "react";

type Props = {
  dropdownStatus: string;
};

const Projects = (props: Props) => {
  return (
    <div
      className={`projects-dropdown ${props.dropdownStatus}border-t-2 border-blue-300 w-[200px] bg-white absolute top-[40px] left-[0px] text-slate-900 overflow-hidden`}
    >
      <ul>
        <li className="pt-1 px-4 cursor-pointer hover:bg-slate-100">
          <Link href="/projects/ribbit">Ribbit</Link>
        </li>
        <li className="pt-1 px-4 cursor-pointer hover:bg-slate-100">
          <Link href="/projects/reduncrate">Reduncrate</Link>
        </li>
        <li className="pt-1 hover:bg-slate-100 px-4 cursor-pointer">
          <Link href="/projects/airbnbeezy">Airbnbeezy</Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
