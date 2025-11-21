import { Resend } from "resend";
require('dotenv').config(); 


const resend = new Resend(process.env.RESEND_API_KEY);


export async function emailService(to: string, subject: string, textBody: string) {
  try {
    const data = await resend.emails.send({
      from: 'devChef <onboarding@resend.dev>', // Replace with your verified sender
      to,
      subject,
      text: `Message: ${textBody}`,
      html: '<h1>${textBody}</h1><p>Sender:${to}</p>',
    });

    return data;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}

