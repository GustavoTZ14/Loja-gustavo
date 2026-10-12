"use client";
import {useState} from "react";
import { authClient } from "@/app/(backend)/lib/auth-client";

export default function Page(){
  const [email, setEmail] = useState<string>("");

  async function sendEmail(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    
    const { error } = await authClient.requestPasswordReset({
      email: email, // required, The email address of the user to send a password reset email to
      redirectTo: "http://localhost:3000/reset-password", // The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN
    });

    if(error){
      console.error(JSON.stringify(error, null, 2))
    };
  }

  return(
    <section className="flex justify-center items-center min-h-screen">
      <article>
        <div className="outline-1 outline-gray-300 rounded-md p-15 w-120">
          <form onSubmit={sendEmail} className="grid gap-2">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} className="outline-1 outline-gray-300 rounded-md text-gray-500 h-10 p-2 text-sm"/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </article>
    </section>
  )
}