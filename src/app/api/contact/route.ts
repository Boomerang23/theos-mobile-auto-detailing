import { NextResponse } from "next/server";
import { contactCopy } from "@/data/contact";
import { contactFormSchema, contactRequestSchema } from "@/lib/contact-schema";
import { sendContactEmails } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limited = rateLimit(`contact:${ip}`, {
    limit: RATE_LIMIT,
    windowMs: RATE_WINDOW_MS,
  });

  if (!limited.success) {
    return NextResponse.json(
      { ok: false, message: contactCopy.errorMessage },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil(limited.retryAfterMs / 1000) || 60),
        },
      },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: contactCopy.errorMessage },
      { status: 400 },
    );
  }

  const parsed = contactRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, message: contactCopy.errorMessage },
      { status: 400 },
    );
  }

  // Silent honeypot success — do not send mail for bot fills.
  if (parsed.data.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const hasEmailBackend =
    Boolean(process.env.RESEND_API_KEY) && Boolean(process.env.CONTACT_EMAIL);

  if (!hasEmailBackend) {
    return NextResponse.json(
      { ok: false, message: contactCopy.errorMessage },
      { status: 503 },
    );
  }

  try {
    await sendContactEmails(contactFormSchema.parse(parsed.data));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: contactCopy.errorMessage },
      { status: 502 },
    );
  }
}
