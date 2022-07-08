/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { nanoid } from "nanoid";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
  Droppable,
  DroppableProvided,
} from "react-beautiful-dnd";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  box-shadow: rgb(43 45 54 / 12%) 0px 1px 1px -1px,
    rgb(43 45 54 / 6%) 0px 1px 2px -1px, rgb(43 45 54 / 8%) 0px 1px 4px;
`;

const headerStyle = ({ isDragging }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  background-color: ${isDragging ? "#24BB54" : "#F7F7FA"};
  &:hover {
    background-color: #e4e4e7;
  }
  padding: 4px 8px;
`;

interface ColumnProps {
  droppableId: string;
}

const Column = ({ droppableId }: ColumnProps) => {
  const events = [...Array(Math.ceil(Math.random() * 5))].map(() => ({
    id: nanoid(),
    text: "event item",
  }));

  return (
    <Droppable
      droppableId={`board_${droppableId}`}
      type="COLUMN"
      direction="vertical"
    >
      {(provided: DroppableProvided) => (
        <div
          css={css`
            display: grid;
            gap: 8px;
            padding: 8px;
          `}
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {events.map(({ id, text }, index) => (
            <Draggable key={id} draggableId={id} index={index + 1}>
              {(
                provided: DraggableProvided,
                snapshot: DraggableStateSnapshot
              ) => (
                <div
                  css={containerStyle}
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                >
                  <div
                    {...provided.dragHandleProps}
                    css={headerStyle({ isDragging: snapshot.isDragging })}
                  >
                    {text}
                  </div>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
