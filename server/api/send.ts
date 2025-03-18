import { Resend } from 'resend';
import { BodyEmail } from '~/types/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const emailData = await readBody<BodyEmail>(event)
    const data = await resend.emails.send({
      from: `${emailData.firstName} ${emailData.lastName} <$yummyblog.com>`,
      to: ['danyalan03@hotmail.com'],
      subject: `Email from ${emailData.firstName} ${emailData.lastName}`,
      html: `<p>${emailData.message}</p>`,
    });

    return data;
  } catch (error) {
    return { error };
  }
});