import { betterAuth } from "better-auth";
import { Resend } from 'resend';
import { Pool } from "pg";

const resend = new Resend(process.env.REDEND_API_KEY);

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL!,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  emailVerification: {
    sendOnSignUp: false,
    sendVerificationEmail: async ({ user, url }) => {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: user.email!,
        subject: "Verifique seu email",
        html: `<p>Verifique seu email <a href=${url}>Verifique</a></p>`
      })
    }
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
        input: false,
      },
    },
  },
});
