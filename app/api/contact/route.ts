// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, email, phone, message } = body as {
      fullName?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Full name, email, and message are required." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const toEmail =
      process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER || email;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || email;

    // Compose email
    const mailOptions = {
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New contact form submission from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${message}
      `.trim(),
      html: `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in /api/contact:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
