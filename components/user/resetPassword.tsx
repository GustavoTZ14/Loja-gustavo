import { authClient } from "@/app/(backend)/lib/auth-client";

export default async function Page({email}: {email: string}){
  const { error } = await authClient.requestPasswordReset({
    email: email, // required, The email address of the user to send a password reset email to
    redirectTo: "http://localhost:3000/reset-password", // The URL to redirect the user to reset their password. If the token isn't valid or expired, it'll be redirected with a query parameter `?error=INVALID_TOKEN`. If the token is valid, it'll be redirected with a query parameter `?token=VALID_TOKEN
  });

  if(error){
    console.error(JSON.stringify(error, null, 2))
  };
}
