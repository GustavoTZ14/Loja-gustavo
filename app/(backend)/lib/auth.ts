import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL!
  }),
  emailAndPassword: {
    enabled: true,
    sendResetPassword: async ({user,url}) => {
      void resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email!,
        subject: 'Hello world',
        html: `Click <a href="${url}">here</a> to reset your password.`,
      })
    },
    onPasswordReset: async ({ user }) => {
      // your logic here
      console.log(`Password for user ${user.email} has been reset.`);
    },
  }
});
