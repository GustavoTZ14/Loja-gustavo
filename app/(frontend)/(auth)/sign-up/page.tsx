"use client";
import { useState } from "react";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { redirect } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [erro, setErro] = useState<string>("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    const { error } = await authClient.signUp.email({
      email,
      password,
      name
    })

    if(error){
      setErro(error.message!);
      return;
    }

    redirect('/sign-in')
  }

  return (
    <section className="flex justify-center items-center min-h-screen">
      <article>
        <div className="outline-1 outline-gray-300 rounded-md p-15 w-120">
          <form onSubmit={handleSubmit} className="grid gap-2">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome"  className="outline-1 outline-gray-300 rounded-md p-2 text-gray-500 text-sm"/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email"  className="outline-1 outline-gray-300 rounded-md p-2 text-gray-500 text-sm" />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Crie uma senha"  className="outline-1 outline-gray-300 rounded-md p-2 text-gray-500 text-sm"/>
            <div className="text-xs text-red-700">{erro}</div>
            <div>
              <button type="submit" className="bg-gray-700 hover:bg-gray-500 text-white w-full rounded-md h-10 cursor-pointer">Registrar</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}
