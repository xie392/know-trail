"use client";

import * as React from "react";
import {
  AudioWaveform,
  Blocks,
  Calendar,
  Command,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavMain } from "~/components/post/nav-main";
import { TeamSwitcher } from "~/components/post/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import { ScrollArea } from "~/components/ui/scroll-area";
import { NavTree } from "~/components/post/nav-tree";

// This is sample data.
const data = {
  teams: [
    {
      name: "Acme In 11c",
      logo: Command,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
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
      title: "首页",
      url: "#",
      icon: Search,
    },
    {
      title: "搜索",
      url: "#",
      icon: Search,
    },
    {
      title: "知识库",
      url: "#",
      icon: Sparkles,
    },
    // {
    //   title: "关于",
    //   url: "#",
    //   icon: Home,
    //   isActive: true,
    // },
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

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <ScrollArea>
        <SidebarContent style={{ maxWidth: "255px" }}>
          <NavTree favorites={data.favorites} />
        </SidebarContent>
      </ScrollArea>
      <SidebarRail />
    </Sidebar>
  );
}
