import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * Validates server-side as well as in the form, because client validation is a
 * convenience for the visitor and not a guarantee.
 *
 * DELIVERY IS NOT WIRED UP. There is no email provider configured, so this
 * returns 200 with `delivered: false` and the client falls back to opening a
 * pre-filled mailto: draft. That way the form genuinely works with no API keys
 * and no secret in the repository.
 *
 * To send for real, set RESEND_API_KEY and CONTACT_TO, then replace the marked
 * block below with a Resend call. Keep the key server-side: this route must stay
 * on the server and must never import the value into a client component.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  /** Honeypot. Bots fill every field they find. */
  website?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed request." },
      { status: 400 },
    );
  }

  // Honeypot: pretend to succeed so a bot gets no signal, and drop it.
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required";
  if (!email) errors.email = "Email is required";
  else if (!EMAIL.test(email)) errors.email = "Enter a valid email address";
  if (!message) errors.message = "Message is required";
  else if (message.length > 4000) errors.message = "Message is too long";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // TODO: real delivery. Replace this block with a provider call, e.g.
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({ from: ..., to: process.env.CONTACT_TO, ... });
  // Until then the client composes a mailto: draft, so nothing is lost.

  return NextResponse.json({ ok: true, delivered: false });
}
