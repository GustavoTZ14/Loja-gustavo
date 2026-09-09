import { redirect } from "next/navigation"
import UserContent from "./user-content";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function User() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    redirect('/signin')
  }

  return (
    <UserContent />
  )
}
