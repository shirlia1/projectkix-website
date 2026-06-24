import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — ProjectKix" },
      { name: "description", content: "Start your first or next sneaker drive. We answer all email requests within 2 business days." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="text-brand font-bold uppercase tracking-widest text-sm">Contact Us</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
          Start your first (or next) sneaker drive.
        </h1>
        <p className="mt-6 text-body text-lg">
          Please drop us a message with any questions or for more information on getting started. We answer all email requests within 2 business days.
        </p>

        {sent ? (
          <div className="mt-10 card-soft p-8 flex items-start gap-4">
            <CheckCircle2 className="text-brand shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-ink">Message received!</h2>
              <p className="mt-1 text-body">Thanks for reaching out — we'll be in touch within 2 business days.</p>
            </div>
          </div>
        ) : (
          <form
            className="mt-10 card-soft p-8 space-y-5"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <Field label="Name" id="name" />
            <Field label="Email" id="email" type="email" />
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-ink">Message</label>
              <textarea id="message" rows={5} required className="mt-2 w-full rounded-2xl border border-canvas bg-canvas px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            <button type="submit" className="btn-red">Send message</button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">{label}</label>
      <input id={id} type={type} required className="mt-2 w-full rounded-2xl border border-canvas bg-canvas px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}
