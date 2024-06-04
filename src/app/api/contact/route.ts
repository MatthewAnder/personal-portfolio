import EmailTemplate from "@/email/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { ReactElement } from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, message } = body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: `${process.env.CONTACT_EMAIL}`,
      subject: "Message from Personal Portfolio",
      react: EmailTemplate({ name, email, message }) as ReactElement,
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 },
    );
  }
}
