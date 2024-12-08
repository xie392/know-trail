import { type Editor } from "@tiptap/react";

import {
  Figcaption,
  Horizontal,
  ImageBlock,
  ImageUpload,
  Link,
  CodeBlock,
} from "~/tiptap-bak/extensions";
import { TableOfContentsNode } from "~/tiptap-bak/extensions/table-contents-node";

export const isTableGripSelected = (node: HTMLElement) => {
  let container = node;

  while (container && !["TD", "TH"].includes(container.tagName)) {
    container = container.parentElement!;
  }

  const gripColumn = container?.querySelector?.("a.grip-column.selected");
  const gripRow = container?.querySelector?.("a.grip-row.selected");

  if (gripColumn || gripRow) {
    return true;
  }

  return false;
};

export const isCustomNodeSelected = (editor: Editor, node: HTMLElement) => {
  const customNodes = [
    Horizontal.name,
    ImageBlock.name,
    ImageUpload.name,
    CodeBlock.name,
    ImageBlock.name,
    Link.name,
    Figcaption.name,
    TableOfContentsNode.name,
  ];

  return (
    customNodes.some((type) => editor.isActive(type)) ||
    isTableGripSelected(node)
  );
};

export default isCustomNodeSelected;
