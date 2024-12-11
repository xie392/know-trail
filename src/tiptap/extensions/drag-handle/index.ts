import { Node, mergeAttributes } from "@tiptap/core";
// import { NodeView } from "@tiptap/view";
import { Plugin } from "@tiptap/pm/state";

export const DragHandle = Node.create({
  name: "dragHandle",

  group: "block",

  draggable: true,

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-drag-handle]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(
        { "data-drag-handle": "" },
        this.options.HTMLAttributes,
        HTMLAttributes,
      ),
      0,
    ];
  },

  addNodeView() {
    return ({ node, view, getPos }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-drag-handle", "");
      dom.classList.add("drag-handle-wrapper");

      const contentDOM = document.createElement("div");
      contentDOM.classList.add("drag-handle-content");

      const handle = document.createElement("div");
      handle.classList.add("drag-handle");
      handle.innerHTML = "&#x2630;"; // Unicode for hamburger icon

      handle.addEventListener("mousedown", (event) => {
        event.preventDefault();
        view.dispatch(
          view.state.tr.setMeta("dragging", { pos: getPos(), node }),
        );
      });

      dom.appendChild(handle);
      dom.appendChild(contentDOM);

      return {
        dom,
        contentDOM,
        update: (updatedNode) => {
          if (updatedNode.type !== node.type) {
            return false;
          }
          return true;
        },
      };
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        props: {
          handleDOMEvents: {
            mousemove: (view) => {
              const dragData = view.state.tr.getMeta("dragging");
              if (!dragData) return false;

              // Implement drag move logic here

              return true;
            },
            mouseup: (view) => {
              if (view.state.tr.getMeta("dragging")) {
                // Handle drop logic
                view.dispatch(view.state.tr.setMeta("dragging", null));
                return true;
              }
              return false;
            },
          },
        },
      }),
    ];
  },
});


