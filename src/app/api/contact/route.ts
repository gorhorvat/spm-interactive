import { NextRequest, NextResponse } from 'next/server';
import { MailtrapClient } from "mailtrap";

const client = new MailtrapClient({ token: process.env.MAILTRAP_TOKEN || '' });

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  // Validate input
  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: 'All fields are required' },
      { status: 400 }
    );
  }

  try {
    // Send email using Mailtrap
    await client.send({
      from: { email: process.env.EMAIL_FROM || 'info@spm-interactive.com' },
      to: [{ email: process.env.EMAIL_FROM || 'info@spm-interactive.com' }],
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error("Mailtrap error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
