"use client";

import axios from "axios";
import { RiDeleteBinLine } from "react-icons/ri";
import { Tarefa } from "../types";


type Props = {
    id: number;
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
};

export default function ButaoDelete({ id, setTarefas }: Props) {
    async function deletarTarefa() {
        try {
            const response = await axios.delete(`/api/todos/${id}`)
            setTarefas(prev => prev.filter(tarefa => tarefa.id !== id));
        } catch (error: any) {
            console.error(error);
            alert(error.response?.data?.error || "Erro ao deletar");
        }
    }
    return (
        <button className="mr-4 p-1 rounded-xl" onClick={deletarTarefa}>
            <RiDeleteBinLine className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-red-500" />
        </button>
    )
}