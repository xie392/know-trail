import type { Editor } from "@tiptap/core";
import { BubbleMenu as TiptapBubbleMenu } from "@tiptap/react";
import type { icons } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Icon } from "~/components/ui/icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { useCallback } from "react";

interface BubbleMenuProps {
  editor: Editor;
}

interface MeunItem {
  type: string;
  icon: keyof typeof icons;
  command: (editor: Editor) => void;
  isActive: (editor: Editor) => boolean;
  tip: string;
  shortcut?: string;
  options?: Array<{ value: string; label: string }>;
}

const meuns: MeunItem[] = [
  {
    type: "menu",
    icon: "Heading",
    command: (editor: Editor) =>
      editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: (editor: Editor) => editor.isActive("heading", { level: 1 }),
    tip: "标题1",
    options: [],
  },
  {
    type: "button",
    icon: "Bold",
    command: (editor: Editor) => editor.chain().focus().toggleBold().run(),
    isActive: (editor: Editor) => editor.isActive("bold"),
    tip: "加粗",
    shortcut: "⌘B",
  },
  {
    type: "button",
    icon: "Italic",
    command: (editor: Editor) => editor.chain().focus().toggleItalic().run(),
    isActive: (editor: Editor) => editor.isActive("italic"),
    tip: "斜体",
    shortcut: "⌘I",
  },
  {
    type: "button",
    icon: "Strikethrough",
    command: (editor: Editor) => editor.chain().focus().toggleStrike().run(),
    isActive: (editor: Editor) => editor.isActive("strike"),
    tip: "删除线",
    shortcut: "⌘K",
  },
  {
    type: "button",
    icon: "Underline",
    command: (editor: Editor) => editor.chain().focus().toggleUnderline().run(),
    isActive: (editor: Editor) => editor.isActive("underline"),
    tip: "下划线",
    shortcut: "⌘U",
  },
  {
    type: "button",
    icon: "Code",
    command: (editor: Editor) => editor.chain().focus().toggleCode().run(),
    isActive: (editor: Editor) => editor.isActive("code"),
    tip: "代码块",
  },
];

export function BubbleMenu({ editor }: BubbleMenuProps) {

  const shouldShow = useCallback(() => {
    return true
  }, []);

  return (
    <TiptapBubbleMenu editor={editor} shouldShow={shouldShow}>
      <div className="relative flex gap-x-1 rounded border border-gray-200 bg-background px-2 py-1 shadow">
        {meuns.map((menu) => {
          if (menu.type === "button") {
            return (
              <TooltipProvider key={menu.icon}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      key={menu.icon}
                      variant="ghost"
                      size="icon"
                      onClick={() => menu.command(editor)}
                    >
                      <Icon name={menu.icon} className="!size-3.5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="px-2">
                    <div className="flex items-center gap-x-1">
                      <span>{menu.tip}</span>
                      {menu.shortcut && <span> {menu.shortcut}</span>}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          }

          if (menu.type === "menu") {
            return (
              <DropdownMenu key={menu.icon}>
                <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return null;
        })}
      </div>
    </TiptapBubbleMenu>
  );
}
