"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { useConfigStore } from "~/stores/config";
import { ThemeColor } from "~/utils/enum";

interface ThemeIconProps {
  className?: string;
  iconClassName?: string;
}

export const ThemeIcon = ({ className, iconClassName }: ThemeIconProps) => {
  const theme = useConfigStore((state) => state.theme);
  const toggleTheme = useConfigStore((state) => state.toggleTheme);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={className}
    >
      {theme === ThemeColor.Light ? (
        <Moon className={cn("size-5", iconClassName)} />
      ) : (
        <Sun className={cn("size-5", iconClassName)} />
      )}
    </Button>
  );
};
