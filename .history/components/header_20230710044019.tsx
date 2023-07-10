import React from "react";
import Avatar from "../images/avatar2.png";
import Image from "next/image";

type Props = {
  type: string;
};

export const Header = (props: Props) => {
  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      {props.type === "home" && (
        <div className="sm:h-72 flex flex-col justify-end">
          <Image className="w-96 m-auto" src={Avatar} alt="Me" />
        </div>
      )}
      {props.type === "post" && (
        <div className="sm:h-72 flex flex-col justify z-10">
          <div className="mt-20 mb-5 capitalize">Home</div>
          <span className="mx-5">&gt;</span>
          <
        </div>
      )}
    </header>
  );
};

export default Header;
