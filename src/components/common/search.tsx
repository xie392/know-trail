import { Button, type ButtonProps } from "~/components/ui/button";
import { Kbd } from "./kdb";
import { cn } from "~/lib/utils";

interface SearchProps extends ButtonProps {
  placeholder?: string;
}

export const Search = ({ className, placeholder }: SearchProps) => {
  return (
    <Button
      className={cn(
        "relative mr-1 hidden w-64 justify-between bg-transparent text-sm md:flex rounded",
        className,
      )}
      variant="outline"
    >
      <span className="inline-flex">{placeholder ?? "搜索文档..."}</span>
      <Kbd shortcut="Ctrl+K" />
    </Button>
  );
};
