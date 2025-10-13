import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

const initialData = {
  Certezas: [
    "O aplicativo precisa de login.",
    "O sistema deve registrar viagens.",
  ],
  Suposições: [
    "Os usuários usarão majoritariamente Android.",
    "O back-end pode ser feito em Node.js.",
  ],
  Dúvidas: [
    "Qual será o modelo de monetização?",
    "Quais integrações com APIs externas serão necessárias?",
  ],
};

export default function CSDMatrix() {
  const [columns, setColumns] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // mesma coluna → reordena
    if (source.droppableId === destination.droppableId) {
      const newItems = Array.from(columns[source.droppableId]);
      const [moved] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, moved);
      setColumns({ ...columns, [source.droppableId]: newItems });
      return;
    }

    // colunas diferentes → move item
    const startItems = Array.from(columns[source.droppableId]);
    const [moved] = startItems.splice(source.index, 1);
    const endItems = Array.from(columns[destination.droppableId]);
    endItems.splice(destination.index, 0, moved);

    setColumns({
      ...columns,
      [source.droppableId]: startItems,
      [destination.droppableId]: endItems,
    });
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      flexWrap: "wrap",
      marginTop: "1rem"
    }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([colName, items]) => (
          <Droppable key={colName} droppableId={colName}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: "#f7f7f7",
                  borderRadius: "12px",
                  padding: "1rem",
                  width: "300px",
                  minHeight: "300px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
                }}
              >
                <h3 style={{
                  textAlign: "center",
                  marginBottom: "1rem",
                  color: "#333"
                }}>
                  {colName}
                </h3>
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          background: "white",
                          borderRadius: "8px",
                          padding: "0.5rem",
                          marginBottom: "0.5rem",
                          boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
