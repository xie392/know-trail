import { type NodeViewRendererProps } from "@tiptap/core";
import { NodeViewWrapper } from "@tiptap/react";
import { TableOfContents } from "~/tiptap-bak/components/table/table-contents";

export const TableOfNodeContent = (props: NodeViewRendererProps) => {
  const { editor } = props;

  return (
    <NodeViewWrapper>
      <div className="-m-2 rounded-lg p-2" contentEditable={false}>
        <TableOfContents editor={editor} />
      </div>
    </NodeViewWrapper>
  );
};
