"use client";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { useState } from "react";

export default function Page(){
  const [senha, setSenha] = useState<string>("");

  async function ResetPass(){
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      // Handle the error
      return
    }

    await authClient.resetPassword({
      newPassword: senha,
      token,
    });
  }

  return(
    <section className="flex justify-center items-center min-h-screen">
      <article>
        <div className="outline-1 outline-gray-300 rounded-md p-15 w-120">
          <form onSubmit={ResetPass} className="grid gap-2">
            <label htmlFor="senha">Nova Senha</label>
            <input type="password" id="senha" placeholder="Digite sua nova senha" value={senha} onChange={(e) => setSenha(e.target.value)} className="outline-1 outline-gray-300 rounded-md text-gray-500 text-sm p-2"/>
          </form>
        </div>
      </article>
    </section>
  )
}