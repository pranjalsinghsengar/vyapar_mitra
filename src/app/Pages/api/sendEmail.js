// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { email, subject, message } = req.body;

  try {
    // Configure Nodemailer with your email provider's details
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail', 'Outlook'
      auth: {
        user: 'mistorekanpur100@gmail.com',
        pass: 'amazonrj',
      },
    });

    // Send email
    await transporter.sendMail({
      from: 'mistorekanpur100@gmail.com',
      to: email,
      subject,
      text: message,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Email sending failed' });
  }
}
