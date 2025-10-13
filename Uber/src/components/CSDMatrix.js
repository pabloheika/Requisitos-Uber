import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

const defaultData = {
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
  const [columns, setColumns] = useState(defaultData);

  // 🔹 Carrega dados salvos do localStorage (se existirem)
  useEffect(() => {
    const saved = localStorage.getItem("csdData");
    if (saved) {
      try {
        setColumns(JSON.parse(saved));
      } catch (err) {
        console.error("Erro ao ler dados do localStorage:", err);
      }
    }
  }, []);

  // 🔹 Salva automaticamente no localStorage sempre que há mudanças
  useEffect(() => {
    localStorage.setItem("csdData", JSON.stringify(columns));
  }, [columns]);

  // 🔹 Função para exportar como JSON
  const handleExport = () => {
    const blob = new Blob([JSON.stringify(columns, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "matriz-csd.json";
    a.click();
  };

  // 🔹 Função para importar JSON
  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        setColumns(imported);
      } catch (err) {
        alert("Arquivo inválido! Certifique-se de que é um JSON da matriz CSD.");
      }
    };
    reader.readAsText(file);
  };

  // 🔹 Função do drag & drop
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
      {/* 🔹 Botões de controle */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "1rem",
        flexWrap: "wrap",
      }}>
        <button
          onClick={handleExport}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#0078d4",
            color: "white",
            cursor: "pointer",
          }}
        >
          💾 Exportar matriz
        </button>

        <label
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            backgroundColor: "#f0f0f0",
            cursor: "pointer",
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

      {/* 🔹 Matriz de colunas */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexWrap: "wrap",
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
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      marginBottom: "1rem",
                      color: "#333",
                    }}
                  >
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
    </div>
  );
}
