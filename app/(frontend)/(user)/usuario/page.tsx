export const instant = false;

import { redirect } from "next/navigation";
import { auth } from "../../../(backend)/lib/auth";
import { headers } from "next/headers";
import { db } from "@/src/prisma/db";
import Signout from "@/components/user/signout";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session){ 
    redirect('/sign-in');
  }

  return (
    <section>
      <article>
        <h1>Usuario {session.user.name}</h1>
        <Signout />
      </article>
    </section>
  )
}
