"use client";

import Link from "next/link";

import Menu from "./menu";
import Tool from "./tool";

function Header() {
  return (
    <div className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 dark:border-border fixed top-0 z-50 flex h-16 w-full items-center border-b px-4 shadow backdrop-blur md:px-6">
      <Link className="flex-shrink-0" href="/">
        <h1 className="mr-5 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
          XIE392
        </h1>
      </Link>

      <Menu />
      <Tool />
    </div>
  );
}

export default Header;
