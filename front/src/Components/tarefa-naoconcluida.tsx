import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tarefa } from "../Interface/Tarefa";


function TarefaNaoConcluida() {

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
      carregarTarefas();
    }, []);
  
    function carregarTarefas() {
      axios.get("http://localhost:5000/tarefas/naoconcluidas")
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
                <h2>Lista de tarefas não concluídas</h2>
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
                    {tarefas.map((Tarefa) => (
                        <tr key={Tarefa.tarefaId}>
                        <td>{Tarefa.tarefaId}</td>
                        <td>{Tarefa.titulo}</td>
                        <td>{Tarefa.descricao}</td>
                        <td>{new Date(Tarefa.criadoEm).toLocaleDateString()}</td>
                        <td>{Tarefa.status}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>     
        );
  }

export default TarefaNaoConcluida;