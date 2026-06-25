import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

// Server functions that capture form submissions and email them via Resend.
// These handlers run on the server only, so the API key is never exposed.
//
// Required environment variables (set in Vercel → Project → Settings → Env):
//   RESEND_API_KEY     – your Resend API key (https://resend.com/api-keys)
//   CONTACT_TO_EMAIL   – the inbox that receives submissions (e.g. you@gmail.com)
//   CONTACT_FROM_EMAIL – optional. A verified Resend sender, e.g.
//                        "ProjectKix <hello@yourdomain.com>". Falls back to
//                        Resend's shared test sender, which can only deliver to
//                        the email on your own Resend account.

// The handlers below run server-side only, where Node's `process` is available.
// Declared locally so we don't widen the project's restricted `types` config.
declare const process: { env: Record<string, string | undefined> };

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_FROM = "ProjectKix <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendEmail({
  subject,
  html,
  replyTo,
}: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? DEFAULT_FROM;

  if (!apiKey || !to) {
    console.error(
      "Email is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL.",
    );
    throw new Error("Email is not configured on the server.");
  }

  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error(`Resend request failed (${res.status}): ${detail}`);
    throw new Error("We couldn't send your message. Please try again.");
  }
}

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  message: z.string().trim().min(1, "Message is required").max(5000),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator(contactSchema)
  .handler(async ({ data }) => {
    await sendEmail({
      subject: `New contact message from ${data.name}`,
      replyTo: data.email,
      html: `
        <h2>New contact message</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>
      `,
    });
    return { ok: true } as const;
  });

const bagRequestSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(200),
  address: z.string().trim().min(1, "Address is required").max(300),
  cityStateZip: z.string().trim().min(1, "City / State / Zip is required").max(200),
});

export const requestBag = createServerFn({ method: "POST" })
  .inputValidator(bagRequestSchema)
  .handler(async ({ data }) => {
    await sendEmail({
      subject: `New bag request from ${data.name}`,
      replyTo: data.email,
      html: `
        <h2>New "request a bag" submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Address:</strong> ${escapeHtml(data.address)}</p>
        <p><strong>City / State / Zip:</strong> ${escapeHtml(data.cityStateZip)}</p>
      `,
    });
    return { ok: true } as const;
  });
