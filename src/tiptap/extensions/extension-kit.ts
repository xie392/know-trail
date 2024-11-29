"use client";

// import { HocuspocusProvider } from "@hocuspocus/provider";

// import { API } from "~/lib/api";

import {
  CharacterCount,
  CodeBlock,
  Color,
  Document,
  Dropcursor,
  Focus,
  FontFamily,
  FontSize,
  Heading,
  Highlight,
  Horizontal,
  ImageBlock,
  Placeholder,
  StarterKit,
  Subscript,
  Superscript,
  TextAlign,
  TextStyle,
  Typography,
  Underline,
  TaskItem,
  TaskList,
} from "~/tiptap";

export const ExtensionKit = () => [
  Document,
  StarterKit,
  Placeholder.configure({ placeholder: "Write something..." }),
  Focus,
  // Dropcursor,
  // CharacterCount,
  Heading,
  // TextStyle,
  // FontFamily,
  // FontSize,
  // TextAlign,
  // Underline,
  // Subscript,
  // Superscript,
  // Color,
  // Highlight,
  // Horizontal,
  // CodeBlock,
  // ImageBlock,
  // TaskList,
  // TaskItem,
  // Typography,
];

export default ExtensionKit;
