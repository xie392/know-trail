"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Inbox,
  MessageCircleQuestion,
  Settings2,
  Sparkles,
  Trash2,
  House,
  Plus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Search } from "~/components/common/search";
import { Button } from "~/components/ui/button";

import { NavTree } from "./nav-tree";
import { NavMain } from "./nav-main";
import { TeamSwitcher } from "./team-switcher";

// This is sample data.
const data = {
  teams: [
    {
      name: "test App",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "test App 2",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "开始",
      url: "#",
      icon: House,
    },
    {
      title: "知识库",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "关于",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "知识广场",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templates",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Help",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    [
      "第一章、介绍",
      [
        "Introduction",
        ["hello", ["route.ts"]],
        "page.tsx",
        "layout.tsx",
        ["blog", ["page.tsx"]],
      ],
    ],
    "Introduction.tsx",
  ],
};

const SidebarSearch = () => {
  return (
    <div className="flex gap-x-1">
      <Search className="w-full bg-background" />
      <Button
        variant="outline"
        size="icon"
        className="size-9 flex-shrink-0 rounded"
      >
        <Plus />
      </Button>
    </div>
  );
};

export const SidebarLeft = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <SidebarSearch />
        <NavMain />
      </SidebarHeader>
      <ScrollArea>
        <SidebarContent style={{ maxWidth: "255px" }}>
          <NavTree favorites={data.favorites} />
        </SidebarContent>
      </ScrollArea>
      <SidebarRail />
    </Sidebar>
  );
};
