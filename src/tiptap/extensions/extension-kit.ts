import {
  Document,
  Paragraph,
  TextStyle,
  StarterKit,
  Highlight,
  CharacterCount,
  Underline,
  Placeholder,
  TextAlign,
  FontFamily,
  Typography,
  Color,
  Focus,
  // Dropcursor,
  // CollaborationCursor,
  Subscript,
  Superscript,
  BulletList,
  OrderedList,
  // Collaboration,
  TaskItem,
  TaskList,
} from ".";

const placeholders = [
  "start typing...",
  "type something here...",
  "write something...",
  "add some text here...",
];

export function ExtensionKit() {
  return [
    StarterKit,
    Document,
    Paragraph,
    TextStyle,
    Highlight,
    CharacterCount,
    Underline,
    Placeholder.configure({
      placeholder: () => {
        return placeholders[Math.floor(Math.random() * placeholders.length)]!;
      },
    }),
    TextAlign,
    FontFamily,
    Typography,
    Color,
    Focus,
    Subscript,
    Superscript,
    BulletList,
    OrderedList,
    TaskItem,
    TaskList,
  ];
}
