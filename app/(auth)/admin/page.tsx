import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AdminContent from "./admin-content";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session?.user.role !== "admin" || !session) {
    redirect("/signin")
  }

  return (
    <>
      <AdminContent />
    </>
  )
}
