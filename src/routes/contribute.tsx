import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Package, ShoppingBag, Truck, CheckCircle2, Loader2 } from "lucide-react";
import { requestBag } from "@/lib/forms";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: "Contribute Sneakers — ProjectKix" },
      { name: "description", content: "Request a free prepaid mailing bag and turn your old sneakers into funds for disabled athletes." },
    ],
    links: canonical("/contribute"),
  }),
  component: ContributePage,
});

function ContributePage() {
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
      await requestBag({
        data: {
          name: String(fd.get("cname") ?? ""),
          email: String(fd.get("cemail") ?? ""),
          address: String(fd.get("caddr") ?? ""),
          cityStateZip: String(fd.get("ccity") ?? ""),
        },
      });
      setSent(true);
      form.reset();
    } catch {
      setError("Something went wrong submitting your request. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand font-bold uppercase tracking-widest text-sm">Contribute Sneakers</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
          Request your free bag in under a minute.
        </h1>
        <p className="mt-6 text-body text-lg">
          Create a ProjectKix account, tell us where to send your prepaid bag, and we'll handle the rest. Up to 7 pairs per bag — any FedEx location works for drop-off.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Package, title: "1. Request a bag", desc: "Create an account and we'll mail you a free prepaid bag." },
            { icon: ShoppingBag, title: "2. Fill it up", desc: "Add up to 7 pairs of wearable sneakers." },
            { icon: Truck, title: "3. Drop and forget", desc: "Drop at any FedEx location. We do the rest." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-soft p-6">
              <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center"><Icon size={22} /></div>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-body text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="mt-12 card-soft p-8 flex items-start gap-4">
            <CheckCircle2 className="text-brand shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-ink">Your bag is on its way!</h2>
              <p className="mt-1 text-body">Thanks for joining ProjectKix. We'll email your prepaid mailing label and next steps within 2 business days.</p>
              <button type="button" onClick={() => setSent(false)} className="mt-4 inline-flex items-center gap-1 text-brand font-semibold">Request another bag</button>
            </div>
          </div>
        ) : (
          <form className="mt-12 card-soft p-8 space-y-5" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-ink">Create your account</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" id="cname" autoComplete="name" />
              <Field label="Email" id="cemail" type="email" autoComplete="email" />
              <Field label="Address" id="caddr" autoComplete="street-address" />
              <Field label="City / State / Zip" id="ccity" autoComplete="address-level2" />
            </div>
            {error && <p role="alert" className="text-sm font-semibold text-brand">{error}</p>}
            <button type="submit" disabled={sending} className="btn-red disabled:opacity-70">
              {sending ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : "Request my bag"}
            </button>
          </form>
        )}

        <p className="mt-8 text-sm text-body">
          Looking to run a drive for your company or school? <Link to="/partners" className="text-brand font-semibold">Become a partner →</Link>
        </p>
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
