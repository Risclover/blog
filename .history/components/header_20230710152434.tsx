import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

export const Header = (props: Props) => {
  const router = useRouter();
  console.log("query:", router.query.id);
  console.log("path:", router.pathname);
  console.log("asPath:", router.asPath);
  return (
    <header className="w-full flex flex-col text-slate-50 bg-slate-800">
      <div className="py-2 flex items-end justify-between pt-5 text-4xl text-gray-900 mb-4 bg-slate-800 z-50 max-w-6xl mx-auto w-full px-12">
        <div className="text-3xl font-logo min-w-fit text-white">
          <Link href="/">Sara Dunlop</Link>
        </div>
      </div>
      {props.children}
    </header>
  );
};

export default Header;
