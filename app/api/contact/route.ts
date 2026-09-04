import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();

    const {
      name,
      email,
      company,
      service,
      message,
      budget,
      website,
    } = body;

    // Honeypot: real visitors never see or fill this field.
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Limit field lengths to reduce abuse.
    if (
      name.length > 100 ||
      email.length > 200 ||
      company?.length > 150 ||
      service.length > 100 ||
      budget?.length > 100 ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || "Not provided");
    const safeService = escapeHtml(service);
    const safeBudget = escapeHtml(budget || "Not specified");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

    const { error } = await resend.emails.send({
      from: "Connect2U <hello@connect2u.xyz>",
      to: ["hello@connect2u.xyz"],
      replyTo: email,
      subject: `New Connect2U inquiry: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto;">
          <h1 style="margin-bottom: 8px;">New Connect2U Project Inquiry</h1>
          <p style="color: #666; margin-top: 0;">
            A potential client submitted the contact form at connect2u.xyz.
          </p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Service:</strong> ${safeService}</p>
          <p><strong>Budget / Project Size:</strong> ${safeBudget}</p>

          <h2 style="margin-top: 28px;">Project Description</h2>
          <p style="line-height: 1.6;">${safeMessage}</p>

          <hr style="border: 0; border-top: 1px solid #ddd; margin: 24px 0;" />

          <p style="color: #666;">
            Reply to this email to respond directly to ${safeName}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { error: "Your message could not be sent. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
