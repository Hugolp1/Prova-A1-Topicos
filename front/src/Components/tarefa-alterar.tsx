import axios from "axios";
import { useEffect, useState } from "react";
import { Tarefa } from "../Interface/Tarefa";

function TarefaAlterar(){

    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const [status, setStatus] = useState<string>('');

    function handleSubmit(e: any){
        if(tarefas){}

    }
    
}

export default TarefaAlterar;