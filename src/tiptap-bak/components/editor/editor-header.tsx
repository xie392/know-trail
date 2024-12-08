import { Icon } from "~/components/ui/icon";
// import { EditorInfo } from "./EditorInfo";
// import { EditorUser } from '../types'
// import { WebSocketStatus } from '@hocuspocus/provider'
import { Toolbar } from "~/tiptap-bak/components/ui/toolbar";
import type { Editor } from "@tiptap/core";
// import { useEditorState } from "@tiptap/react";

export type EditorHeaderProps = {
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
  editor: Editor;
  //   collabState: WebSocketStatus
  //   users: EditorUser[]
};

export const EditorHeader = ({
  isSidebarOpen,
  toggleSidebar,
}: EditorHeaderProps) => {
  //   const { characters, words } = useEditorState({
  //     editor,
  //     selector: (ctx): { characters: number; words: number } => {
  //       const { characters, words } = ctx.editor?.storage.characterCount || {
  //         characters: () => 0,
  //         words: () => 0,
  //       };
  //       return { characters: characters(), words: words() };
  //     },
  //   });

  return (
    <div className="flex flex-none flex-row items-center justify-between border-b border-neutral-200 bg-white py-2 pl-6 pr-3 text-black dark:border-neutral-800 dark:bg-black dark:text-white">
      <div className="flex flex-row items-center gap-x-1.5">
        <div className="flex items-center gap-x-1.5">
          <Toolbar.Button
            tooltip={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            onClick={toggleSidebar}
            active={isSidebarOpen}
            className={isSidebarOpen ? "bg-transparent" : ""}
          >
            <Icon name={isSidebarOpen ? "PanelLeftClose" : "PanelLeft"} />
          </Toolbar.Button>
        </div>
      </div>
      {/* <EditorInfo
        characters={characters}
        words={words}
        collabState={collabState}
        users={users}
      /> */}
    </div>
  );
};
