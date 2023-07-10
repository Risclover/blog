import React from "react";
import Avatar from "../images/avatar2.png";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  type: string;
};

export const Header = (props: Props) => {
  const router = useRouter();
  console.log("query:", router.query.id);
  console.log("path:", router.pathname);
  console.log("asPath:", router.asPath);
  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      {router.pathname === "/" && (
        <div className="sm:h-72 flex flex-col justify-end">
          <Image className="w-96 m-auto" src={Avatar} alt="Me" />
        </div>
      )}
      {router.query.id === "/posts" && (
        <div className="sm:h-72 flex flex-col justify z-10">
          <div className="mt-20 mb-5 capitalize">
            <span>Home</span>
            <span className="mx-5">&gt;</span>
            <span>Category</span>
          </div>
          <div className="text-2xl sm:text-4xl font-medium leading-snug">
            Title
          </div>
          <div className="mt-2 text-medium sm:text-lg font-normal pb-14 text-slate-400">
            Subtitle
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
