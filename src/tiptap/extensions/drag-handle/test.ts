import { Extension, Node } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { DragHandleComponent } from "./components/drag-handle";

// Drag Handle Node
const DragHandleNode = Node.create({
  name: "dragHandleNode",
  group: "block",
  content: "block+",
  addNodeView() {
    return ReactNodeViewRenderer(DragHandleComponent);
  },
});

// Drag Handle Extension
export const DragHandle = Extension.create({
  name: "dragHandle",

  // addExtensions() {
  //   return [DragHandleNode];
  // },

  addProseMirrorPlugins() {
    let dragHandleElement: HTMLElement;

    return [
      new Plugin({
        key: new PluginKey("dragHandle"),
        props: {
          handleDOMEvents: {
            mousemove: (view, event) => {
              const pos = view.posAtCoords({
                left: event.clientX,
                top: event.clientY,
              });

              if (!pos) {
                if (dragHandleElement) {
                  dragHandleElement.style.display = 'none';
                }
                return false;
              }

              // 获取当前节点
              // const node = view.state.doc.nodeAt(pos.pos);

              // 获取当前行的块级元素
              const domAtPos = view.domAtPos(pos.pos);
              const element = (domAtPos.node instanceof Text ? domAtPos.node.parentElement : domAtPos.node) as HTMLElement;

              if (!(element instanceof HTMLElement)) {
                if (dragHandleElement) {
                  dragHandleElement.style.display = 'none';
                }
                return false;
              }

              const blockElement = element.closest('p, h1, h2, h3, h4, h5, h6, li, blockquote');

              if (!dragHandleElement) {
                console.log("!dragHandleElement");

                dragHandleElement = document.createElement('div');
                dragHandleElement.className = 'drag-handle';
                dragHandleElement.draggable = true;
                dragHandleElement.innerHTML = `
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none">
                    <circle cx="9" cy="5" r="1" />
                    <circle cx="9" cy="12" r="1" />
                    <circle cx="9" cy="19" r="1" />
                    <circle cx="15" cy="5" r="1" />
                    <circle cx="15" cy="12" r="1" />
                    <circle cx="15" cy="19" r="1" />
                  </svg>
                `;
                document.body.appendChild(dragHandleElement);

                dragHandleElement.addEventListener('dragstart', (e) => {
                  e.dataTransfer?.setData('text/plain', '');
                  e.dataTransfer?.setData('application/node-id', String(pos.pos));
                });

                dragHandleElement.addEventListener('mouseenter', () => {
                  dragHandleElement.style.display = 'flex'; // 确保手柄在悬停时可见
                });

                dragHandleElement.addEventListener('mouseleave', () => {
                  dragHandleElement.style.display = 'none';
                });
              }

              if (blockElement) {
                const rect = blockElement.getBoundingClientRect();
                dragHandleElement.style.position = 'fixed';
                dragHandleElement.style.display = 'flex';
                dragHandleElement.style.left = rect.left - 40 + 'px';
                dragHandleElement.style.top = rect.top + 12 + 'px';
              } else {
                dragHandleElement.style.display = 'none';
              }

              return false;
            },
            mouseleave: (view, event) => {
              const target = event.relatedTarget;
              const mouseY = event.clientY;
              const rect = dragHandleElement.getBoundingClientRect();

              // 检查鼠标是否离开编辑器容器和拖动手柄
              if (dragHandleElement && !dragHandleElement.contains(target) && !view.dom.contains(target)) {
                dragHandleElement.style.display = 'none';
              } else if (mouseY >= rect.top && mouseY <= rect.bottom) {
                // 鼠标在手柄的水平范围内，保持手柄可见
                dragHandleElement.style.display = 'flex';
              }
              return false;
            },
            dragstart: (view, event) => {
              if (!(event.target instanceof HTMLElement)) return false;

              const dragHandle = event.target.closest('.drag-handle');
              if (!dragHandle) return false;

              const pos = Number(event.dataTransfer?.getData('application/node-id'));
              if (isNaN(pos)) return false;

              const node = view.state.doc.nodeAt(pos);
              if (!node) return false;

              view.dispatch(view.state.tr.setMeta('dragStart', { pos, node }));
              return true;
            },
            drop: (view, event) => {
              if (!(event.target instanceof HTMLElement)) return false;

              const dragStart = view.state.tr.getMeta('dragStart');
              if (!dragStart) return false;

              const { pos: sourcePos, node } = dragStart;

              const targetPos = view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos;
              if (targetPos === undefined) return false;

              if (targetPos === sourcePos) return false;

              view.dispatch(
                view.state.tr
                  .delete(sourcePos, sourcePos + node.nodeSize)
                  .insert(targetPos, node)
              );

              return true;
            },
          
          },
        },
      }),
    ];
  },
});
