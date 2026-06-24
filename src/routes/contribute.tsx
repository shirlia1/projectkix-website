import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, ShoppingBag, Truck } from "lucide-react";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: "Contribute Sneakers — ProjectKix" },
      { name: "description", content: "Request a free prepaid mailing bag and turn your old sneakers into funds for disabled athletes." },
    ],
  }),
  component: ContributePage,
});

function ContributePage() {
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

        <form className="mt-12 card-soft p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-2xl font-bold text-ink">Create your account</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" id="cname" />
            <Field label="Email" id="cemail" type="email" />
            <Field label="Address" id="caddr" />
            <Field label="City / State / Zip" id="ccity" />
          </div>
          <button type="submit" className="btn-red">Request my bag</button>
        </form>

        <p className="mt-8 text-sm text-body">
          Looking to run a drive for your company or school? <Link to="/partners" className="text-brand font-semibold">Become a partner →</Link>
        </p>
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
