"use client";
import { authClient } from "@/lib/auth-client"; //import the auth client
import { useState } from "react";

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
      <form onSubmit={sub}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </>
  )
}
