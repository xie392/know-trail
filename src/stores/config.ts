import { ThemeColor } from "~/utils/enum";
import { createPersistStore } from "~/utils/store";

export const useConfigStore = createPersistStore(
  {
    theme: ThemeColor.Light,
  },
  (set, get) => ({
    toggleTheme: () => {
      const theme = get().theme;
      const newTheme =
        theme === ThemeColor.Light ? ThemeColor.Dark : ThemeColor.Light;
      set({ theme: newTheme });
    },
  }),
  {
    name: "blog-config",
    version: 1,
  },
);
