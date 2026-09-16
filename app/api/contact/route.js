import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { error: "Contact service is not configured yet. Please email hello@novaframe.studio directly." },
        { status: 503 }
      );
    }

    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const brief = String(formData.get("brief") || "").trim();
    const budget = String(formData.get("budget") || "Select a range").trim();

    if (!name || !email || !brief) {
      return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `New NovaFrame project brief from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget}`,
        "",
        "Project brief:",
        brief,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend contact error:", error);
      return NextResponse.json({ error: "We could not send your brief. Please try again or email us directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "We could not process your brief. Please try again." }, { status: 500 });
  }
}
