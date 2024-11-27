"use client";

import { Github } from "~/components/ui/icon";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useConfigStore } from "~/stores/config";
import { ThemeColor } from "~/utils/enum";

export default function Tool() {
  const theme = useConfigStore((state) => state.theme);
  const toggleTheme = useConfigStore((state) => state.toggleTheme);

  return (
    <div className="flex flex-1 items-center justify-between md:justify-end">
      <div className="mr-1 w-full flex-1 md:w-auto md:flex-none">
        <Button
          className="relative flex w-64 justify-between bg-transparent text-sm"
          variant="outline"
        >
          <span className="inline-flex">搜索文档...</span>
          <kbd className="bg-muted pointer-events-none -mr-2 flex select-none items-center space-x-1 rounded border px-1.5 align-middle font-mono text-[14px] font-medium">
            <span className="text-xs">⌘</span>
            <span className="-mt-[2px]">K</span>
          </kbd>
        </Button>
      </div>
      <nav className="flex items-center gap-0.5">
        <Button variant="ghost" size="sm">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/xie392/blog"
          >
            <Github className="size-5" />
          </Link>
        </Button>

        <Button variant="ghost" size="sm" onClick={toggleTheme}>
          {theme === ThemeColor.Light ? (
            <Moon className="size-5" />
          ) : (
            <Sun className="size-5" />
          )}
        </Button>
      </nav>
    </div>
  );
}
