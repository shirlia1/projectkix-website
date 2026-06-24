import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners — ProjectKix" },
      { name: "description", content: "Corporate partners, affiliates and organizations powering the ProjectKix mission." },
    ],
  }),
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <div className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand font-bold uppercase tracking-widest text-sm">Our Partners</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
          The brands and teams behind every bag.
        </h1>
        <p className="mt-6 text-body text-lg max-w-3xl">
          Companies, schools, teams and community groups partner with ProjectKix to run sneaker drives that fund disabled athletes and the charities they care about. Whether you're a Fortune 500 or a local non-profit, there's a place for you here.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="card-soft h-24 flex items-center justify-center text-body font-bold text-sm">
              Partner {i + 1}
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card-soft p-8">
            <h3 className="text-2xl font-extrabold text-ink">Corporate partners</h3>
            <p className="mt-3 text-body">
              Run a sneaker drive across your offices and turn employee engagement into measurable social impact. We'll handle the logistics; you choose the cause.
            </p>
          </div>
          <div className="card-soft p-8">
            <h3 className="text-2xl font-extrabold text-ink">Affiliate program</h3>
            <p className="mt-3 text-body">
              Schools, teams and community groups: earn funds for your organization while keeping sneakers out of landfills.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/contact" className="btn-red">Become a partner</Link>
        </div>
      </div>
    </div>
  );
}
