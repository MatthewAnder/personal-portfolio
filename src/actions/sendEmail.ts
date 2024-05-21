"use server";

import { EmailTemplate } from "@/email/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["matthewanh@hotmail.com"],
      subject: "Message from Contact Form",
      react: EmailTemplate({
        name,
        email,
        message,
      }) as React.ReactElement,
    });

    if (error) {
      return JSON.parse(
        JSON.stringify(NextResponse.json({ error }, { status: 500 })),
      );
    }

    return JSON.parse(JSON.stringify(NextResponse.json({ data })));
  } catch (error) {
    return JSON.parse(
      JSON.stringify(NextResponse.json({ error }, { status: 500 })),
    );
  }
}
