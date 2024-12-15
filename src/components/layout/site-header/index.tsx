"use client";

import { Menu } from "./menu";
import { Tool } from "./tool";
import { Logo } from "~/components/common/logo";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 px-5 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:border-border md:px-6">
      <div className="mx-auto flex h-16 w-full max-w-screen-xl items-center">
        <Logo />
        <Menu />
        <Tool />
      </div>
    </header>
  );
}
