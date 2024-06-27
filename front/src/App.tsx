import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import TarefaListar from './Components/tarefa-listar';
import TarefaCadastrar from './Components/tarefa-cadastrar';
import TarefaNaoConcluida from './Components/tarefa-naoconcluida';
import TarefaConcluida from './Components/tarefa-concluida';


function App() {
  return (
    <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Lista de Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/cadastro">Cadastro de Tarefas</Link>
                        </li>
                        <li>
                            <Link to="/alterar">Alteração da Tarefa</Link>
                        </li>
                        <li>
                            <Link to="/naoconcluidas">Tarefas Não Concluídas</Link>
                        </li>
                        <li>
                            <Link to="/concluidas">Tarefas Concluídas</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                  <Route path='/' element={<TarefaListar />} />
                  <Route path='/cadastro' element={<TarefaCadastrar />} />
                  <Route path='/naoconcluidas' element={< TarefaNaoConcluida/>} />
                  <Route path='/concluidas' element={< TarefaConcluida/>} />
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
