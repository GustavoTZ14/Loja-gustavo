"use client";
import { useState } from "react";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error } = await authClient.signIn.email({ email, password });

    if(error){
      setErro("email e senha invalidos")
    }

    redirect('/usuario')
  }
  return (
    <section className="min-h-screen flex justify-center items-center">
      <article className="w-120 outline-1 outline-gray-300 rounded-md p-15">
        <div>
          <form onSubmit={handleSubmit} className="grid gap-2 mb-10">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} className="outline-1 outline-gray-300 rounded-md h-10 p-2 text-base text-gray-700"/>

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={password} placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} className="outline-1 outline-gray-300 rounded-md h-10 p-2 text-base text-gray-700"/>
            <div>
              <span className="text-xs">Esqueceu sua senha? <Link href="/email-reset-password" className="text-blue-700">Criar outra</Link></span>
            </div>
            {/*menssagem de erro caso login errado */}
            <div className="text-red-700 text-xs">{erro}</div>
            
            <div className="w-full flex justify-center items-center">
              <button type="submit" className="bg-gray-700 hover:bg-gray-500 w-full rounded-md h-10 text-white cursor-pointer">
                Entrar
              </button>
            </div>
          </form>
          <div className="w-full text-center">
            <span className="text-sm">Não tenho uma conta!: <Link href="/sign-up" className="text-blue-700">Criar agora</Link></span>
          </div>
        </div>
      </article>
    </section>
  )
}
