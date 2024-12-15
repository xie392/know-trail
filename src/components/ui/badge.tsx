import * as React from "react";

import { cn } from "~/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  // 小红点
  dot?: boolean;
  num?: number;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, children, dot, num, ...props }, ref) => {
    const numStr = React.useMemo(() => {
      if (!num) return "";
      return num <= 0 ? "" : num > 99 ? "99+" : num.toString();
    }, [num]);

    return (
      <div className={cn("relative", className)} ref={ref} {...props}>
        {children}
        <div
          className={cn(
            "absolute -top-1.5 left-1/2 flex scale-75 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white",
            dot &&
              num &&
              num > 0 &&
              "-top-1 left-2/3 size-1.5 rounded-full px-0",
          )}
        >
          {!dot && num && <span>{numStr}</span>}
        </div>
      </div>
    );
  },
);
Badge.displayName = "Badge";

export { Badge };
