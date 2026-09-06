import { betterAuth } from "better-auth";
import { prisma } from './prisma';
import { prismaAdapter } from "better-auth/adapters/prisma";
import { Resend } from 'resend';

const resend = new Resend(process.env.REDEND_API_KEY);

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
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
  }
});
