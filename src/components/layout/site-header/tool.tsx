"use client";

import { Github } from "~/components/ui/icon";

import Link from "next/link";
import { Moon, Sun, Globe } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useConfigStore } from "~/stores/config";
import { ThemeColor } from "~/utils/enum";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { locales } from "~/utils/config";

export default function Tool() {
  const theme = useConfigStore((state) => state.theme);
  const toggleTheme = useConfigStore((state) => state.toggleTheme);
  const locale = useConfigStore((state) => state.locale);

  return (
    <div className="items-cente flex flex-1 justify-end">
      <Button
        className="relative mr-1 hidden w-64 justify-between bg-transparent text-sm md:flex"
        variant="outline"
      >
        <span className="inline-flex">搜索文档...</span>
        <kbd className="bg-muted pointer-events-none -mr-2 flex select-none items-center space-x-1 rounded border px-1.5 align-middle font-mono text-[14px] font-medium">
          <span className="text-xs">⌘</span>
          <span className="-mt-[2px]">K</span>
        </kbd>
      </Button>
      <nav className="flex items-center gap-0.5">
        <Button variant="ghost" size="icon">
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://github.com/xie392/blog"
          >
            <Github className="size-5" />
          </Link>
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {theme === ThemeColor.Light ? (
            <Moon className="size-5" />
          ) : (
            <Sun className="size-5" />
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              <Globe className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {locales.map((item) => (
              <DropdownMenuItem
                key={item.value}
                className={
                  locale === item.value ? "bg-primary-500 text-primary" : ""
                }
              >
                {item.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
    </div>
  );
}
