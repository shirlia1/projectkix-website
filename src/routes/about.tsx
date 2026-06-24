import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — ProjectKix" },
      { name: "description", content: "ProjectKix's mission, story, and goal to support 100,000 disabled athletes in under 5 years." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand font-bold uppercase tracking-widest text-sm">About Us</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
          A second life for sneakers. A new life for athletes.
        </h1>

        <div className="mt-12 space-y-10">
          <Section title="Our Mission">
            At ProjectKix, we're on a mission to give unwanted sneakers a second chance — creating a sustainable future and empowering communities. By recycling sneakers, we provide funding for adaptive sports programs, support local charities, and reduce landfill waste.
          </Section>
          <Section title="Our Story">
            Born from a passion for adaptive sports, ProjectKix started as a small initiative to support disabled athletes. Today, we've expanded to help organizations of all kinds while promoting sustainability and social impact.
          </Section>
          <Section title="A Greener Future, One Sneaker at a Time">
            Did you know sneakers can take up to 40 years to decompose in landfills? By recycling with ProjectKix, you're reducing waste, lowering CO2 emissions, and contributing to a circular economy.
          </Section>
          <div className="card-soft p-8 bg-brand text-white">
            <h2 className="text-2xl font-extrabold">Our Goal</h2>
            <p className="mt-3 text-lg text-white/90">
              ProjectKix aims to financially support <span className="font-extrabold">100,000 disabled athletes</span> in under 5 years by repurposing gently used sneakers.
            </p>
          </div>
        </div>

        <div className="mt-12 flex gap-3 flex-wrap">
          <Link to="/contribute" className="btn-red">Request a bag</Link>
          <Link to="/partners" className="btn-black">Become a partner</Link>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-brand">{title}</h2>
      <p className="mt-3 text-body text-lg">{children}</p>
    </div>
  );
}
