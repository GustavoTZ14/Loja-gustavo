"use client";
import { authClient } from "@/lib/auth-client"
import { redirect } from "next/navigation"

export default function User(){
  async function SignOut(){
    await authClient.signOut({
      fetchOptions:{
        onSuccess: () => {
          redirect('/signup')
        }
      }
    })
  }
  return (
    <>
      <h1>Usuario</h1>
      <span onClick={SignOut} className="cursor-pointer">
        Sair
      </span>
    </>
  )
}