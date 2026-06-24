import { createFileRoute, Link } from "@tanstack/react-router";
import { QrCode, Megaphone, Truck } from "lucide-react";

export const Route = createFileRoute("/impact-fundraising")({
  head: () => ({
    meta: [
      { title: "Impact & Fundraising — ProjectKix" },
      { name: "description", content: "Partner with ProjectKix: corporate QR-code program funding disabled athletes and charities of your choice." },
    ],
  }),
  component: ImpactPage,
});

function ImpactPage() {
  return (
    <div className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand font-bold uppercase tracking-widest text-sm">Impact & Fundraising</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
          Corporate partners. Real athletes. Measurable impact.
        </h1>
        <p className="mt-6 text-body text-lg max-w-3xl">
          When you partner with ProjectKix you create opportunities for disabled athletes and raise money for the charity or organization of your choice. As a Corporate Partner you'll receive a unique QR code to share with your employees, team, school or community — plus help with marketing materials and shipping costs.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[
            { icon: QrCode, title: "Your unique QR code", desc: "Share with your team, school or community to track every contribution back to your cause." },
            { icon: Megaphone, title: "Marketing support", desc: "We provide branded posters, social assets, and email templates to make your drive a success." },
            { icon: Truck, title: "Shipping covered", desc: "Prepaid bags and FedEx drop-off — no logistics for you to manage." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-soft p-6">
              <div className="w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center"><Icon size={22} /></div>
              <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-body text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-20 text-3xl font-extrabold text-ink">Athlete voices</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Quote text="I played basketball my whole life. When the accident happened, I thought I wasn't going to play again. Then I learned about wheelchair basketball." />
          <Quote text="Basketball is just like life — you've got ups and downs. When I have problems, I go to practice and it just takes all my problems away." />
        </div>

        <div className="mt-12">
          <Link to="/partners" className="btn-red">Become a partner</Link>
        </div>
      </div>
    </div>
  );
}

function Quote({ text }: { text: string }) {
  return (
    <div className="card-soft p-8 border-l-4 border-brand">
      <p className="text-ink text-lg italic">"{text}"</p>
    </div>
  );
}
