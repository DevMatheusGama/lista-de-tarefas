"use client";

import axios from "axios";
import { MdCheckCircleOutline } from "react-icons/md";
import ButaoDelete from "./ButaoDelete";
import { Tarefa } from "../types";


type Props = {
    tarefa: Tarefa;
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
};

function ItemTarefaConcluida({ tarefa, setTarefas }: Props) {
    async function atualizarDone(id: number, done: boolean) {
        try {
            await axios.patch(`/api/todos/${id}`, { done });
        } catch (err) {
            console.error("Erro ao atualizar done:", err);
        }
    }
    return (
        <>
            <li
                key={tarefa.id}
                className="group flex items-center justify-between gap-4 border-2 border-green-200 bg-green-50 p-4 rounded-xl transition-colors duration-300 hover:shadow-sm hover:shadow-green-700 font-thin "
            >
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={tarefa.done}
                            onChange={() => {
                                const novoDone = !tarefa.done;

                                setTarefas(prev =>
                                    prev.map(t =>
                                        t.id === tarefa.id ? { ...t, done: novoDone } : t
                                    )
                                );

                                atualizarDone(tarefa.id, novoDone);
                            }}
                            className="peer hidden"
                        />
                        <span
                            className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center peer-checked:bg-green-600 peer-checked:border-green-600 transition-all"
                        >
                            <svg
                                className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-all"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </span>
                    </label>
                    {tarefa.title}
                </div>
                <div className="flex items-center gap-4">
                    <span className="flex items-center bg-green-100 gap-2 px-3 py-1 rounded-2xl text-sm text-green-600"><MdCheckCircleOutline className="text-green-600" /> Feito</span>
                    <ButaoDelete id={tarefa.id} setTarefas={setTarefas} />
                </div>
            </li>
        </>
    )
}

export default ItemTarefaConcluida
