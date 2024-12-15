import { memo, useMemo } from "react";

interface KbdProps {
  shortcut: string;
}

export const Kbd = memo(({ shortcut }: KbdProps) => {
  const keys = useMemo(() => {
    return shortcut.split("+");
  }, [shortcut]);

  return (
    <kbd className="pointer-events-none select-none text-xs font-medium text-muted-foreground/80">
      {keys?.length &&
        keys.map((key, index) => {
          return (
            <span key={index}>
              {key}
              {index < keys.length - 1 && <span className="mx-0.5">+</span>}
            </span>
          );
        })}
    </kbd>
  );
});

Kbd.displayName = "Kbd";
