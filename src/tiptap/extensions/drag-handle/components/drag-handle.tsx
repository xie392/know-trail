import type { Node as ProsemirrorNode } from "@tiptap/pm/model";
import React, { useState, useEffect } from "react";

export const DragHandleComponent = ({ node, getPos }: { node: ProsemirrorNode; getPos: () => number; }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const pos = getPos();
      const dragHandleElement = document.querySelector('.drag-handle');
      if (dragHandleElement) {
        const rect = dragHandleElement.getBoundingClientRect();
        // 检查鼠标是否在拖动手柄的水平范围内
        if (event.clientY >= rect.top && event.clientY <= rect.bottom) {
          dragHandleElement.style.display = 'flex';
        } else {
          dragHandleElement.style.display = 'none';
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [getPos]);

  return (
    <div
      className="node-with-drag-handle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative' }}
    >
      {isHovered && (
        <div className="drag-handle" contentEditable={false} draggable>
          <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
            <circle cx="9" cy="5" r="1" />
            <circle cx="9" cy="12" r="1" />
            <circle cx="9" cy="19" r="1" />
            <circle cx="15" cy="5" r="1" />
            <circle cx="15" cy="12" r="1" />
            <circle cx="15" cy="19" r="1" />
          </svg>
        </div>
      )}
      <div className="node-content">
        {node.content.content.map((child, index) => (
          <div key={index}>{child.text}</div>
        ))}
      </div>
    </div>
  );
};
