import { useEditor, type UseEditorOptions } from "@tiptap/react";
import { ExtensionKit } from "~/tiptap/extensions/extension-kit";

interface BlockEditorProps {
  options?: Partial<UseEditorOptions>;
}

export function useBlockEditor({ options }: BlockEditorProps = {}) {
  const editor = useEditor({
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    autofocus: true,
    extensions: [...ExtensionKit()],
    editorProps: {
      attributes: {
        autocomplete: "off",
        autocorrect: "off",
        autocapitalize: "off",
        class: "min-h-full",
      },
    },
    ...options,
  });

  return { editor: editor! };
}
