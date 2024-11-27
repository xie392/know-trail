"use client";

import Link from "next/link";

import Menu from "./menu";
import Tool from "./tool";

export default function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 dark:border-border sticky top-0 z-50 border-b px-4 backdrop-blur md:px-6">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center">
        <Link className="flex-shrink-0" href="/">
          <h1 className="mr-5 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 bg-clip-text text-xl font-bold text-transparent">
            XIE392
          </h1>
        </Link>
        <Menu />
        <Tool />
      </div>
    </header>
  );
}
