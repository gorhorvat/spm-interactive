import { NextRequest, NextResponse } from 'next/server';
import { MailerooClient, EmailAddress, Attachment } from "maileroo-sdk";

const client = new MailerooClient(process.env.MAILEROO_API_KEY!);

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
    // Send email using Maileroo
    await client.sendBasicEmail({
      from: new EmailAddress(process.env.EMAIL_FROM!, 'noreply@spm-interactive.com'),
      to: [new EmailAddress(process.env.EMAIL_TO!, 'info@spm-interactive.com')],
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      plain: `
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
    console.error("Maileroo error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
