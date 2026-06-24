import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { sendContactMessage } from "@/lib/forms";

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
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setSending(true);
    setError(null);
    try {
      await sendContactMessage({
        data: {
          name: String(fd.get("name") ?? ""),
          email: String(fd.get("email") ?? ""),
          message: String(fd.get("message") ?? ""),
        },
      });
      setSent(true);
      form.reset();
    } catch {
      setError("Something went wrong sending your message. Please try again.");
    } finally {
      setSending(false);
    }
  }

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
          <form className="mt-10 card-soft p-8 space-y-5" onSubmit={handleSubmit}>
            <Field label="Name" id="name" autoComplete="name" />
            <Field label="Email" id="email" type="email" autoComplete="email" />
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-ink">Message</label>
              <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-2xl border border-canvas bg-canvas px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand" />
            </div>
            {error && <p role="alert" className="text-sm font-semibold text-brand">{error}</p>}
            <button type="submit" disabled={sending} className="btn-red disabled:opacity-70">
              {sending ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, id, type = "text", autoComplete }: { label: string; id: string; type?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink">{label}</label>
      <input id={id} name={id} type={type} required autoComplete={autoComplete} className="mt-2 w-full rounded-2xl border border-canvas bg-canvas px-4 py-3 text-ink focus:outline-none focus:ring-2 focus:ring-brand" />
    </div>
  );
}
