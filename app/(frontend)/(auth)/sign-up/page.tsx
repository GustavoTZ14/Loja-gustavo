"use client";
import { useState } from "react";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { redirect } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error } = await authClient.signUp.email({
      email,
      password,
      name
    }, {
      onSuccess: () => {
        redirect('/sign-in')
      }
    })

    console.error(JSON.stringify(error, null, 2))
  }
  return (
    <section>
      <article>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" value={password} onChange={(e) => setPassword(e.target.value)} />

            <div>
              <button type="submit">Registrar</button>
            </div>
          </form>
        </div>
      </article>
    </section>
  )
}
