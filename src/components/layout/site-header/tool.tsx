"use client";

import { Github } from "~/components/ui/icon";

import Link from "next/link";
import { Globe } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useConfigStore } from "~/stores/config";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { Locales } from "~/utils/config";
import { Search } from "~/components/common/search";
import { ThemeIcon } from "~/components/common/theme-icon";

const LocaleDropdownMenu = () => {
  const locale = useConfigStore((state) => state.locale);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Locales.map((item) => (
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
  );
};

export const Tool = () => {
  return (
    <div className="items-cente flex flex-1 justify-end">
      <Search />
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
        <ThemeIcon />
        <LocaleDropdownMenu />
      </nav>
    </div>
  );
};
