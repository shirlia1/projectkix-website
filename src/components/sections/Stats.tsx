import { Reveal } from "../motion/Reveal";
import { CountUp } from "../motion/CountUp";

// Figures mirror claims already stated across the site (the 100k goal, ~40-year
// decomposition, 300M+ pairs discarded yearly, free prepaid program) — no
// invented numbers.
const stats = [
  { to: 100000, suffix: "", label: "Athletes we aim to support", help: "Our 5-year goal" },
  { to: 40, suffix: " yrs", label: "For a sneaker to break down", help: "If it's landfilled" },
  { to: 300, suffix: "M+", label: "Pairs thrown out each year", help: "Worldwide" },
  { to: 100, suffix: "%", label: "Free, prepaid program", help: "Always" },
];

export function Stats() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink">The impact, in numbers</h2>
          <p className="mt-4 text-body">Every pair you send keeps waste out of landfills and turns into real support for athletes and communities.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="card-soft card-hover p-6 text-center">
              <div className="text-4xl sm:text-5xl font-extrabold text-brand tracking-tight">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-3 font-semibold text-ink leading-snug">{s.label}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-body">{s.help}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
