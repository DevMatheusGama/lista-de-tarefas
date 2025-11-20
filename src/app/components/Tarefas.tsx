"use client";

import axios from "axios";
import { useEffect } from "react";
import ItemTarefa from "./ItemTarefa";
import ItemTarefaConcluida from "./ItemTarefaConcluida";
import { Tarefa } from "../types";


type TarefasProps = {
    tarefas: Tarefa[];
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>;
};

export default function Tarefas({ tarefas, setTarefas }: TarefasProps) {
    useEffect(() => {
        async function fetchTarefas() {
            const response = await axios.get('/api/todos');
            setTarefas(response.data);
        }

        fetchTarefas();
    }, [setTarefas]);

    return (
        <div>
            {tarefas.length > 0 && (
                <div className="flex flex-col gap-4 mt-4">
                    {tarefas.some(t => !t.done) && (
                        <h2 className="px-2 text-2xl font-semibold text-slate-700 border-l-4 border-purple-600">Pendentes</h2>
                    )}
                    <ul className="flex flex-col gap-2 px-2">
                        {tarefas
                            .filter(tarefa => !tarefa.done)
                            .map(tarefa => (
                                <ItemTarefa key={tarefa.id} tarefa={tarefa} setTarefas={setTarefas} />
                            ))}
                    </ul>
                </div>
            )}

            {tarefas.length > 0 && (
                <div className="flex flex-col gap-4 mt-4">
                    {tarefas.some(t => t.done) && (
                        <h2 className="px-2 text-2xl font-semibold text-slate-700 border-l-4 border-green-400">Concluídas</h2>
                    )}
                    <ul className="flex flex-col gap-2 px-2">
                        {tarefas
                            .filter(tarefa => tarefa.done)
                            .map(tarefa => (
                                <ItemTarefaConcluida key={tarefa.id} tarefa={tarefa} setTarefas={setTarefas} />
                            ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
