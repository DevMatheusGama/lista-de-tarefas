'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import z from "zod";
import axios from 'axios'
import Link from "next/link";

const schema = z.object({
    nome: z.string().min(3, "Nome muito curto"),
    email: z.string().email("Digite um e-mail válido"),
    senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
})

type FormData = z.infer<typeof schema>

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const router = useRouter()

    async function registerUser(data: FormData) {
        try {
            const response = await axios.post('/api/register', {
                name: data.nome,
                email: data.email,
                password: data.senha
            })

            if (response.status === 200 || response.status === 201) {
                alert("Usuário cadastrado com sucesso!");
                router.push("/");
            } else {
                alert(response.data.error || "Erro ao cadastrar.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro ao cadastrar usuário.");
        }
    }


    return (
        <div className="w-full h-screen flex flex-col justify-center items-center font-mono bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400">
            <main className="flex flex-col items-center bg-white p-10 rounded-3xl shadow-2xl">
                <h1 className="text-4xl font-sans font-bold">Register</h1>
                <form onSubmit={handleSubmit(registerUser)} className="w-80 flex flex-col gap-4 relative">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Nome</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome"
                            {...register('nome')}
                            className="border p-2 rounded-md outline-none"
                        />
                        {errors.nome && <p className="text-red-400 text-sm">{errors.nome.message}</p>}
                    </div>
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
                            type="password"
                            placeholder="Digite sua senha:"
                            {...register('senha')}
                            className="border p-2 rounded-md outline-none"
                        />
                        {errors.senha && <p className="text-red-400 text-sm">{errors.senha.message}</p>}
                    </div>
                    <div>
                        <button className="w-full h-9 bg-black text-white rounded-md">
                            Cadratrar
                        </button>
                    </div>
                </form>
               
                <p className="text-sm font-light mt-10 ml-7 w-64">Já tem uma conta? <Link href='/' className="font-bold">Iniciar sessão</Link></p>
            </main>
        </div>
    );
}