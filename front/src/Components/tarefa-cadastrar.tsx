import React, { useEffect, useState } from 'react';
import { Tarefa } from '../Interface/Tarefa';
import { Categoria } from '../Interface/Categoria';
import axios from 'axios';

function TarefaCadastrar() {
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoriaId, setCategoriaId] = useState<string>("");

    useEffect(() => {
      axios.get<Categoria[]>("http://localhost:5000/categoria/listar")
        .then((response) => setCategorias(response.data))
        .catch((error) => console.error("Erro ao carregar Categorias", error));
    }, []);

    function handleSubmit (e: any) {
        e.preventDefault();

        const novaTarefa: Tarefa = {
          titulo,
          descricao,
          categoriaId,
          status: 'Não Iniciado',
          criadoEm: new Date()
        };

      axios
      .post<Tarefa>('http://localhost:5000/tarefas/cadastrar', novaTarefa) 
      .then((response) => {
        console.log("Tarefa cadastrada com sucesso", response.data);
        setTitulo("");
        setDescricao("");
        setCategoriaId("");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar tarefa", error);
      });
    }

    return (
        <div>
            <h2>Cadastrar Nova Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Titulo:
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} required />
                </label>
                <label>
                    Descrição:
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </label>
                <label>
                    Categoria:
                    <select
          value={categoriaId}
          onChange={(e) => setCategoriaId(e.target.value)}
          required
        >
          <option value="">Selecione uma categoria</option>
          {categorias.map((Categoria) => (
            <option key={Categoria.categoriaId} value={Categoria.categoriaId}>
              {Categoria.nome}
            </option>
          ))}
        </select>
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
  }
  
export default TarefaCadastrar;