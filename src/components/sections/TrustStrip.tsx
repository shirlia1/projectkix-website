import { Reveal } from "../motion/Reveal";

// Contexts shown in the site's own gallery photos — honest credibility signals
// (swap for real partner logos when available).
const items = ["LA Fitness drives", "NWBA champions", "Wounded Warrior athletes", "FedEx drop-off"];

export function TrustStrip() {
  return (
    <section className="px-4 pb-6">
      <Reveal className="max-w-6xl mx-auto">
        <div className="card-soft px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <span className="text-xs font-bold uppercase tracking-widest text-body shrink-0">
            Out in the community
          </span>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {items.map((label) => (
              <li key={label} className="text-sm font-semibold text-ink/70">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
