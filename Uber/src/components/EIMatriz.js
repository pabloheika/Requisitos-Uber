import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";
import { useColorMode } from "@docusaurus/theme-common";
import defaultData from "./matriz-ei.json";

export default function EIMatriz() {
  const [columns, setColumns] = useState(defaultData);
  const { colorMode } = useColorMode();

  // Carrega dados salvos do localStorage
  useEffect(() => {
    const saved = localStorage.getItem("csdData");
    if (saved) {
      try {
        setColumns(JSON.parse(saved));
      } catch {
        setColumns(defaultData);
      }
    }
  }, []);

  const isDark = colorMode === "dark";
  const colors = {
    bg: isDark ? "#1e1e1e" : "#f7f7f7",
    card: isDark ? "#2a2a2a" : "white",
    text: isDark ? "#f5f5f5" : "#333",
    shadow: isDark ? "0 2px 6px rgba(0,0,0,0.6)" : "0 2px 6px rgba(0,0,0,0.1)",
    border: isDark ? "#3c3c3c" : "#e0e0e0",
  };

  // 🔹 Salvar matriz localmente e baixar JSON atualizado
  const handleSave = () => {
    localStorage.setItem("eiData", JSON.stringify(columns));
    const blob = new Blob([JSON.stringify(columns, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "matriz-ei.json";
    link.click();
    URL.revokeObjectURL(link.href);
  };

  // 🔹 Importar JSON
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        setColumns(imported);
        localStorage.setItem("eiData", JSON.stringify(imported));
      } catch {
        alert("Arquivo inválido. Selecione um JSON válido da Matriz EI.");
      }
    };
    reader.readAsText(file);
  };

  // 🔹 Adicionar item
  const addItem = (colName) => {
    const newText = prompt(`Adicionar novo item em "${colName}":`);
    if (!newText || newText.trim() === "") return;
    const newItems = [...columns[colName], newText.trim()];
    setColumns({ ...columns, [colName]: newItems });
  };

  // 🔹 Excluir item
  const deleteItem = (colName, index) => {
    if (!window.confirm("Tem certeza que deseja excluir este item?")) return;
    const newItems = [...columns[colName]];
    newItems.splice(index, 1);
    setColumns({ ...columns, [colName]: newItems });
  };

  // 🔹 Drag & Drop
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const newItems = Array.from(columns[source.droppableId]);
      const [moved] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, moved);
      setColumns({ ...columns, [source.droppableId]: newItems });
    } else {
      const startItems = Array.from(columns[source.droppableId]);
      const [moved] = startItems.splice(source.index, 1);
      const endItems = Array.from(columns[destination.droppableId]);
      endItems.splice(destination.index, 0, moved);
      setColumns({
        ...columns,
        [source.droppableId]: startItems,
        [destination.droppableId]: endItems,
      });
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Controles principais */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
          flexWrap: "wrap",
        }}
      >
        <label
          onClick={handleSave}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: isDark ? "#2563eb" : "#0078d4",
            color: "white",
            cursor: "pointer",
          }}
        >
          💾 Salvar matriz
        </label>

        <label
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            backgroundColor: isDark ? "#3a3a3a" : "#f0f0f0",
            cursor: "pointer",
            color: colors.text,
          }}
        >
          📂 Importar matriz
          <input
            type="file"
            accept="application/json"
            onChange={handleImport}
            style={{ display: "none" }}
          />
        </label>
      </div>

      {/* Matriz EI */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
          gridTemplateRows: "repeat(2, auto)",
          gap: "0.8rem",
          justifyContent: "center",
          alignItems: "start",
          overflow: "visible", // permite arrastar além dos limites
        }}
      >

        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(columns).map(([colName, items]) => (
            <Droppable key={colName} droppableId={colName}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                  background: colors.bg,
                  borderRadius: "12px",
                  padding: "1rem",
                  minWidth: "260px",
                  minHeight: "200px",
                  width: "100%",
                  boxShadow: colors.shadow,
                  display: "flex",
                  flexDirection: "column",
                  border: `1px solid ${colors.border}`,
                  overflow: "visible",
                }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <h3 style={{ color: colors.text }}>{colName}</h3>
                    <button
                      onClick={() => addItem(colName)}
                      style={{
                        border: "none",
                        borderRadius: "6px",
                        backgroundColor: "#28a745",
                        color: "white",
                        cursor: "pointer",
                        padding: "0.3rem 0.6rem",
                        fontSize: "1rem",
                      }}
                    >
                      ＋
                    </button>
                  </div>

                  {items.map((item, index) => (
                    <Draggable
                      key={`${colName}-${item}`}
                      draggableId={`${colName}-${item}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: "none",
                            background: colors.card,
                            color: colors.text,
                            borderRadius: "8px",
                            padding: "0.5rem",
                            marginBottom: "0.5rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            boxShadow: isDark
                              ? "0 1px 3px rgba(255,255,255,0.05)"
                              : "0 1px 3px rgba(0,0,0,0.15)",
                            ...provided.draggableProps.style,
                          }}
                        >
                          <span>{item}</span>
                          <button
                            onClick={() => deleteItem(colName, index)}
                            style={{
                              border: "none",
                              background: "transparent",
                              color: isDark ? "#f87171" : "#d11a2a",
                              cursor: "pointer",
                              fontSize: "1rem",
                            }}
                            title="Excluir item"
                          >
                            🗑️
                          </button>
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
    </div>
  );
}
