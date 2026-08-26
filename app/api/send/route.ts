import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface emailProps {
  emailPara: string;
  emailDe: string;
  subjetivo: string;
  primeiroNome: string;
  urlEmail: string;
}

export async function sendEmail({ emailPara, emailDe, subjetivo, primeiroNome, urlEmail }: emailProps) {
  try {
    await resend.emails.send({
      from: `Acme <${emailDe}>`,
      to: [`${emailPara}`],
      subject: `${subjetivo}`,
      react: EmailTemplate({ firstName: `${primeiroNome}`, url: `${urlEmail}` }),
    });

  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
