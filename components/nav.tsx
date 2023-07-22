import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";
import { useEffect, useState } from "react";

export default function Nav() {
  return (
    <div
      className={`py-3 flex items-center justify-between text-4xl text-gray-900 bg-slate-900 z-50 w-full sticky top-0 lg:py-4`}
    >
      <div className="max-w-6xl lg:px-12 w-full mx-auto flex justify-between items-center px-6">
        <div className="text-3xl font-logo min-w-fit text-gray-50">
          <Link href="/">Sara Dunlop</Link>
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
}
