import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, message } = data || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate email provider (e.g. Resend, SendGrid) or persist to DB.
    // For now we log the submission so it can be picked up in server logs.
    console.log("[gorudo:contact]", {
      at: new Date().toISOString(),
      ...data,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
