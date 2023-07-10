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
    <header className=" flex flex-col text-slate-50 bg-slate-800">
      {children}
    </header>
  );
};

export default Header;
