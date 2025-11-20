import { Resend } from "resend";
require('dotenv').config(); 

console.log("1")

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("2")

export async function emailService(to: string, subject: string, textBody: string) {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified sender
      to,
      subject,
      text: `Message: ${textBody}`
    });

    return data;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}

console.log("3")