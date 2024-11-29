"use client";

import type { Editor as CoreEditor } from "@tiptap/core";
import {
  type AwaitedReactNode,
  type JSXElementConstructor,
  type Key,
  type ReactElement,
  type ReactNode,
  type ReactPortal,
  memo,
} from "react";
import { cn } from "~/lib/utils";
import { useEditorState } from "@tiptap/react";

export type TableOfContentsProps = {
  editor: CoreEditor;
  onItemClick?: () => void;
};

export const TableOfContents = memo(
  ({ editor, onItemClick }: TableOfContentsProps) => {
    const content = useEditorState({
      editor,
      selector: (ctx) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        ctx.editor.storage.tableOfContents.content,
    });

    return (
      <>
        <div className="mb-2 text-xs font-semibold uppercase text-neutral-500 dark:text-neutral-400">
          Table of contents
        </div>
        {content.length > 0 ? (
          <div className="flex flex-col gap-1">
            {content.map(
              (item: {
                id: Key | null | undefined;
                level: number;
                isActive: any;
                itemIndex:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
                textContent:
                  | string
                  | number
                  | bigint
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
              }) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  style={{ marginLeft: `${1 * item.level - 1}rem` }}
                  onClick={onItemClick}
                  className={cn(
                    "block w-full truncate rounded bg-opacity-10 p-1 text-sm font-medium text-neutral-500 transition-all hover:bg-black hover:bg-opacity-5 hover:text-neutral-800 dark:text-neutral-300",
                    item.isActive &&
                      "bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-100",
                  )}
                >
                  {item.itemIndex}. {item.textContent}
                </a>
              ),
            )}
          </div>
        ) : (
          <div className="text-sm text-neutral-500">
            Start adding headlines to your document …
          </div>
        )}
      </>
    );
  },
);

TableOfContents.displayName = "TableOfContents";
