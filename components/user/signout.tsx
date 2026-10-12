"use client";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { redirect } from "next/navigation";

export default function Signout() {

  async function Sair() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/login"); // redirect to login page
        },
      },
    });
  }
  return (
    <div onClick={Sair}>Sair</div>
  )
}
