import { betterAuth } from "better-auth";
import { prisma } from './prisma';
import { prismaAdapter } from "better-auth/adapters/prisma";
import { sendEmail } from '../api/send/route';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        emailDe: 'onboarding@resend.dev',
        emailPara: user.email!,
        subjetivo: "Verifique seu email",
        primeiroNome: user.name,
        urlEmail: url
      })
    }
  }
});
