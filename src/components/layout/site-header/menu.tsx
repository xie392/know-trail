import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";

import Link from "next/link";
import { cn } from "~/lib/utils";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "知识库",
    link: "/notes",
  },
  {
    name: "资源分享",
    link: "/resources",
  },
  {
    name: "关于我",
    link: "/about",
  },
];

export default function Menu() {
  const pathnmae = usePathname();

  return (
    <NavigationMenu className="flex-1 flex-shrink-0">
      <NavigationMenuList>
        {menus.map((menu) => {
          return (
            <NavigationMenuItem key={menu.link}>
              <Link href={menu.link} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), {
                    "text-primary font-semibold": pathnmae.startsWith(
                      menu.link,
                    ),
                  })}
                >
                  {menu.name}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
