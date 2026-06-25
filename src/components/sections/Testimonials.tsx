import { Quote } from "lucide-react";
import { Reveal } from "../motion/Reveal";

// Athlete voices already published on the Impact & Fundraising page.
const quotes = [
  {
    text: "I played basketball my whole life. When the accident happened, I thought I wasn't going to play again. Then I learned about wheelchair basketball.",
    who: "Adaptive basketball athlete",
  },
  {
    text: "Basketball is just like life — you've got ups and downs. When I have problems, I go to practice and it just takes all my problems away.",
    who: "ProjectKix community athlete",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-brand font-bold uppercase tracking-widest text-sm">Voices</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-ink">Why this matters</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <Reveal key={q.who} delay={i * 0.1}>
              <figure className="card-soft card-hover p-8 border-l-4 border-brand h-full">
                <Quote className="text-brand/30" size={32} aria-hidden="true" />
                <blockquote className="mt-3 text-ink text-lg italic">{q.text}</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-body">— {q.who}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
