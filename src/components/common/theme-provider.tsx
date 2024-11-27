"use client";

import { useEffect } from "react";
import { useConfigStore } from "~/stores/config";
import { ThemeColor } from "~/utils/enum";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useConfigStore((state) => state.theme);

  useEffect(() => {
    const isDark = theme === ThemeColor.Dark;
    document?.startViewTransition(() => {
      document.documentElement.classList.toggle("dark", isDark);
    });

    if (!document?.startViewTransition) {
      document.documentElement.classList.toggle("dark", isDark);
    }
  }, [theme]);

  return children;
}
