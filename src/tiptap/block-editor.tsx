import { useBlockEditor } from "~/tiptap/hooks/use-block-editor";
import { EditorContent } from "@tiptap/react";

export function BlockEditor() {
  const { editor } = useBlockEditor();

  return (
    <div className="mx-auto w-4/5">
      <EditorContent editor={editor} />
    </div>
  );
}
