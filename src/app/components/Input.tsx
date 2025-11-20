'use client'

import { Plus, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

export default function Input({ addTask }: { addTask: (title: string) => void }) {
    const [value, setValue] = useState("");

    function handleSubmit() {
        if (!value.trim()) return;
        addTask(value);
        setValue("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-4">
                <div className='flex items-center px-3 w-full rounded-2xl border-2'>
                    <Sparkles className=" text-purple-400" />
                    <input
                        type="text"
                        value={value}
                        placeholder="Adicionar nova tarefa..."
                        className="w-full rounded-2xl outline-none p-4 "
                        onChange={(event) => setValue(event.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="flex items-center px-8 rounded-2xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all"
                >
                    <Plus className="size-5 mr-2" />
                    Adicionar
                </button>
            </form>
        </div>
    )
}