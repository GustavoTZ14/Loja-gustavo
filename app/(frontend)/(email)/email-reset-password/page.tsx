"use client";
import {useState} from "react";
import resetPassword from "@/components/user/resetPassword"

export default function Page(){
  const [email, setEmail] = useState<string>("");

  return(
    <section className="flex justify-center items-center min-h-screen">
      <article>
        <div className="outline-1 outline-gray-300 rounded-md p-15 w-120">
          <form onSubmit={(e) => {e.preventDefault(); resetPassword({email: email})}} className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} className="outline-1 outline-gray-300 rounded-md text-gray-500 h-10 p-2 text-sm"/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </article>
    </section>
  )
}