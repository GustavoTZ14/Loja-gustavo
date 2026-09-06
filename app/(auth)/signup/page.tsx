"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  async function sub(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    await authClient.signUp.email({
      email, // user email address
      password, // user password -> min 8 characters by default
      name, // user display name
      callbackURL: "http://localhost:3000/"
    }, {
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 w-full h-screen p-5">
        <div className="flex justify-center items-center w-full h-full col-span-1">
          <div className="w-130 p-10">
            <div className="w-full text-center mb-10">
              <div className="flex justify-center w-full h-50">
                <img src="/logo.png" alt="logo" className="w-30 h-30 rounded-xl" />
              </div>
              <h1 className="font-serif font-bold text-2xl text-gray-500 mb-5">Criar uma conta</h1>
              <p className="font-serif text-sm text-gray-400">Cadastre-se para acompanhar seus pedidos e aproveitar nossas ofertas.</p>
            </div>
            <form onSubmit={sub} className="grid gap-2">
              <label htmlFor="name" className="font-serif text-sm text-gray-500 ml-1">Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="outline-1 outline-gray-300 rounded-sm p-2 text-md font-sans text-gray-500"
                placeholder="digite seu nome"
              />
              <label htmlFor="email" className="font-serif text-sm text-gray-500 ml-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-1 outline-gray-300 rounded-sm p-2 text-md font-sans text-gray-500"
                placeholder="digite seu email"
              />
              <label htmlFor="senha" className="font-serif text-sm text-gray-500 ml-1">Senha</label>
              <input
                type="password"
                id="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-1 outline-gray-300 rounded-sm p-2 text-md font-sans text-gray-500"
                placeholder="crie uma senha"
              />

              <button type="submit" className="bg-gray-500 rounded-sm p-2 mt-10 text-white font-serif cursor-pointer">Cadastrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
