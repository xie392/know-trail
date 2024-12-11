import { useBlockEditor } from "~/tiptap/hooks/use-block-editor";
import { EditorContent } from "@tiptap/react";
import "~/tiptap/styles/index.css";

// import { BubbleMenu } from '~/tiptap/components/menu/bubble-menu'

export function BlockEditor() {
  const { editor } = useBlockEditor();

  return (
    <div className="mx-auto w-4/5">
      <EditorContent editor={editor} />
      {/* <BubbleMenu editor={editor} /> */}
    </div>
  );
}
