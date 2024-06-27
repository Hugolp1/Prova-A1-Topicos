import { Categoria } from "./Categoria";


export interface Tarefa {
    tarefaId?: string;
    titulo: string;
    descricao: string;
    criadoEm: Date;
    categoria?: Categoria;
    categoriaId: string;
    status: string;
}