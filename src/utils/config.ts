import type { icons } from "lucide-react";
import { Locale } from "~/utils/enum";

export const Locales = [
  {
    label: "English",
    value: Locale.En,
  },
  {
    label: "中文(简体)",
    value: Locale.ZhCN,
  },
  {
    label: "中文(繁體)",
    value: Locale.ZhTW,
  },
];

export interface WorkSpaceMeunsItem {
  title: string;
  url: string;
  icon: keyof typeof icons;
}

export const WorkSpaceMeuns: WorkSpaceMeunsItem[] = [
  {
    title: "开始",
    url: "/workspace",
    icon: "House",
  },
  {
    title: "知识库",
    url: "/workspace/noets",
    icon: "Sparkles",
  },
  {
    title: "关于",
    url: "/workspace/about",
    icon: "House",
  },
  {
    title: "知识广场",
    url: "/workspace/#",
    icon: "Inbox",
  },
];
