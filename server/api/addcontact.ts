import { Resend } from 'resend';
import { BodyEmail } from '~/types/Email';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  try {
    const emailData = await readBody<BodyEmail>(event)
    const data = await resend.contacts.create({
        email: emailData.email,
        firstName: emailData.firstName || '',
        lastName: emailData.lastName || '',
        unsubscribed: false,
        audienceId: 'd95df533-01bc-4228-824b-d94519587ace',
    });

    return data;
  } catch (error) {
    return { error };
  }
});