"use client";
import { authClient } from "@/app/(backend)/lib/auth-client";
import { redirect } from "next/navigation";

export default function Signout() {

  async function Sair() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          redirect("/sign-in");
        },
      },
    });
  }
  return (
    <div onClick={Sair}>Sair</div>
  )
}
