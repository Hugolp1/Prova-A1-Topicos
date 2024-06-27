import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tarefa } from "../Interface/Tarefa";

function TarefaListar() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  useEffect(() => {
    carregarTarefas();
  }, []);

  function carregarTarefas() {
    axios.get<Tarefa[]>("http://localhost:5000/tarefas/listar")
      .then((response) => {
        setTarefas(response.data);
        console.table(response.data);
      })
      .catch((error) => {
        console.log("Erro ao carregar Tarefas", error);
      });
  }

  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Criado em:</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{new Date(tarefa.criadoEm).toLocaleDateString()}</td>
              <td>{tarefa.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TarefaListar;
