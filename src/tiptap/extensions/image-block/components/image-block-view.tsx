import { cn } from "~/lib/utils";
import type { Node } from "@tiptap/pm/model";
import { type Editor, NodeViewWrapper } from "@tiptap/react";
import { useCallback, useRef } from "react";
import Image from "next/image";

interface ImageBlockViewProps {
  editor: Editor;
  getPos: () => number;
  node: Node;
  updateAttributes: (attrs: Record<string, string>) => void;
}

export const ImageBlockView = (props: ImageBlockViewProps) => {
  const { editor, getPos, node } = props as ImageBlockViewProps & {
    node: Node & {
      attrs: {
        src: string;
      };
    };
  };
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const { src } = node.attrs;

  const wrapperClassName = cn(
    node.attrs.align === "left" ? "ml-0" : "ml-auto",
    node.attrs.align === "right" ? "mr-0" : "mr-auto",
    node.attrs.align === "center" && "mx-auto",
  );

  const onClick = useCallback(() => {
    editor.commands.setNodeSelection(getPos());
  }, [getPos, editor.commands]);

  return (
    <NodeViewWrapper>
      <div
        className={wrapperClassName}
        style={{ width: node.attrs.width as number }}
      >
        <div contentEditable={false} ref={imageWrapperRef}>
          <Image className="block" src={src} alt="" onClick={onClick} />
        </div>
      </div>
    </NodeViewWrapper>
  );
};

export default ImageBlockView;
