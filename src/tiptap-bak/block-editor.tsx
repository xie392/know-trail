"use client";

import "~/tiptap/styles/index.css";

import React, { useRef } from "react";
import { useBlockEditor } from "~/tiptap-bak/hooks/use-block-editor";
import { EditorContent } from "@tiptap/react";
import { ContentItemMenu } from "~/tiptap-bak/components/menus/content-item-menu";
import { LinkMenu } from "~/tiptap-bak/components/menus/link-menu";
import { TextMenu } from "~/tiptap-bak/components/menus/text-menu";
import ColumnsMenu from "~/tiptap-bak/extensions/multi-column/components/columns-menu";
import TableRowMenu from "~/tiptap-bak/extensions/table/menus/table-row";
import TableColumnMenu from "~/tiptap-bak/extensions/table/menus/table-column";
import ImageBlockMenu from "~/tiptap-bak/extensions/image-block/components/image-block-menu";

export function BlockEditor() {
  const { editor } = useBlockEditor();
  const menuContainerRef = useRef(null);

  return (
    <div className="mx-auto w-4/5">
      <EditorContent editor={editor} />
      {/* <ContentItemMenu editor={editor} /> */}
      {/* <LinkMenu editor={editor} appendTo={menuContainerRef} /> */}
      {/* <TextMenu editor={editor} /> */}
      {/* <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
      <TableRowMenu editor={editor} appendTo={menuContainerRef} />
      <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
      <ImageBlockMenu editor={editor} appendTo={menuContainerRef} /> */}
    </div>
  );
}
