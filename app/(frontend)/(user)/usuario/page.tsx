import { redirect } from "next/navigation";
import { auth } from "../../../(backend)/lib/auth";
import { headers } from "next/headers";
import { db } from "@/src/prisma/db";
import Signout from "@/components/user/signout";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) redirect('/sign-in');

  const user = await db.orm.public.User.where({ email: session.user.email }).first();

  return (
    <section>
      <article>
        <h1>Usuario {user!.name}</h1>
        <Signout />
      </article>
    </section>
  )
}
