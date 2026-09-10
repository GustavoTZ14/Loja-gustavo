"use client";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function UserContent({ userRole }: any) {
  const { data: session } = authClient.useSession();

  async function SignOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect('/signin')
        }
      }
    })
  }

  return (
    <>
      <h1>Bem vindo,</h1>
      <h1>{session?.user.name}</h1>
      <span onClick={SignOut} className="cursor-pointer">
        Sair
      </span>
      <div>{userRole === "admin" && <a href="/admin">Admin</a>}</div>
    </>
  )
}
