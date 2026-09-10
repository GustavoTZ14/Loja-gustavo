import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "../../../prisma/db";

export default async function Page() {
  const produtos = await db.orm.public.Product.all();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== "admin" || !session) {
    redirect("/usuario")
  }

  return (
    <>
      <div>
        {produtos.map((item) => (
          <div>{item.name}</div>
        ))}
      </div>
    </>
  )
}
