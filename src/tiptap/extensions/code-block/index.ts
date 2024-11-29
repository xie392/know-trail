import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const lowlight = createLowlight(all);

export const CodeBlock = CodeBlockLowlight.configure({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  lowlight,
  defaultLanguage: "javascript",
});
