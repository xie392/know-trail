"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "~/components/ui/sidebar";
import { WorkSpaceMeuns } from "~/utils/config";
import { usePathname } from "next/navigation";
import { Icon } from "~/components/ui/icon";
import Link from "next/link";

export const NavMain = () => {
  const path = usePathname();

  console.log("path", path);

  return (
    <SidebarMenu>
      {WorkSpaceMeuns.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={path.startsWith(item.url)}>
            <Link href={item.url}>
              <Icon name={item.icon} />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};
