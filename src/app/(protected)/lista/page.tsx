'use client'

import { signOut } from 'next-auth/react';
import React, { useState } from 'react'
import { LuListChecks } from "react-icons/lu";
import { HiOutlineLogout } from "react-icons/hi";
import Input from '@/app/components/Input';
import Tarefas from '@/app/components/Tarefas';
import axios from 'axios';

type TarefaType = {
    id: number;
    title: string;
    done: boolean;
};

function page() {
    const [tarefas, setTarefas] = useState<TarefaType[]>([])

    async function addTarefa(title: string) {
        const response = await axios.post('/api/todos', {
            title: title
        })

        const newTask: TarefaType = response.data;

        setTarefas(prev => [...prev, newTask]);
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 py-12 px-4">
            <button
                onClick={() => signOut()}
                className='flex bg-white text-red-500 p-2 rounded-2xl gap-2 font-semibold fixed top-5'
            >
                <HiOutlineLogout size={24} /> Sair
            </button>
            <div className="max-w-[800px] mx-auto">

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                        <LuListChecks className="size-10 text-white" />
                    </div>
                    <h1 className="text-white mb-2">Minhas Tarefas</h1>
                    <p className="text-white/90">Organize seu dia de forma simples e eficiente</p>
                </div>

                <div className='w-full bg-white rounded-3xl shadow-2xl p-8'>
                    <div>
                        <Input addTask={addTarefa} />
                    </div>
                    <div>
                        <Tarefas tarefas={tarefas} setTarefas={setTarefas} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default page