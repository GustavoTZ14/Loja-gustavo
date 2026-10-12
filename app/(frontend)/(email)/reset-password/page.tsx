"use client";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Page(){
  const [senha, setSenha] = useState<string>("");

  async function ResetPass(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      redirect('/sign-in')
      return
    }

    await authClient.resetPassword({
      newPassword: senha,
      token,
    });

    redirect('/sign-in')
  }

  return(
    <section className="flex justify-center items-center min-h-screen">
      <article>
        <div className="outline-1 outline-gray-300 rounded-md p-15 w-120">
          <form onSubmit={ResetPass} className="grid gap-2">
            <label htmlFor="senha">Nova Senha</label>
            <input type="password" id="senha" placeholder="Digite sua nova senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="outline-1 outline-gray-300 rounded-md text-gray-500 text-sm p-2"/>
            <div>
              <button type="submit" className="w-full bg-gray-700 hover:bg-gray-500 h-10 rounded-md text-white">Redefinir senha</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}