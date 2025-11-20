'use client'

import { FaGoogle, FaApple, FaFacebook } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

const schema = z.object({
    email: z.string().email("Digite um e-mail válido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
})

type FormData = z.infer<typeof schema>

export default function Login() {
    const [error, setError] = useState("");
    const router = useRouter()

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const handleLogin = async (data: FormData) => {
        const result = await signIn("credentials", {
            redirect: false,
            email: data.email,
            password: data.senha,
        })

        if (result?.error) {
            setError("Email ou senha incorretos");
            return;
        }

        router.push("/lista");
    };

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center font-mono bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
            <main className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-2xl">
                <h1 className="text-4xl font-sans font-bold">Login</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="w-80 flex flex-col gap-4 relative">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Digite seu email:"
                            {...register('email')}
                            className="border p-2 rounded-md outline-none"
                        />
                        {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Senha</label>
                        <input
                            type="text"
                            placeholder="Digite sua senha:"
                            {...register('senha')}
                            className="border p-2 rounded-md outline-none"
                        />
                        {errors.senha && <p className="text-red-400 text-sm">{errors.senha.message}</p>}
                    </div>
                    <div>
                        <button className="w-full h-9 bg-black text-white rounded-md">
                            Login
                        </button>
                    </div>
                    {error && (
                        <p className="text-red-500 mt-3 text-center">{error}</p>
                    )}
                    
                </form>
                <p className="text-sm font-light mt-10 ml-7 w-64">Não tem uma conta? <Link href='/register' className="font-bold">Cadrastre-se</Link></p>
            </main>
        </div>
    );
}