import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default async function Page() {
  const { data: session } = authClient.useSession();

  return (
    <>
    </>
  )
}
