"use client";
import { useEditor } from "@tiptap/react";
import { ExtensionKit } from "~/tiptap/extensions/extension-kit";

export const useBlockEditor = () => {
  const editor = useEditor(
    {
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
    },
    [],
  );

  return { editor };
};
