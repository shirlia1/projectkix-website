import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock } from "lucide-react";
import { canonical } from "@/lib/seo";
import { Reveal } from "@/components/motion/Reveal";
import { articles, categories, readingMinutes, formatDate } from "@/lib/blog";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blog — Sneaker Recycling, Donations & Adaptive Sports | ProjectKix" },
      { name: "description", content: "Guides and stories on shoe donations, sneaker recycling, adaptive sports, and how schools, gyms, and companies can run impactful shoe drives." },
    ],
    links: canonical("/blogs"),
  }),
  component: BlogsPage,
});

function BlogsPage() {
  const [active, setActive] = useState<string>("All");
  const visible = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <div className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-brand font-bold uppercase tracking-widest text-sm">Blog</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">
            Stories &amp; guides from the laces up.
          </h1>
          <p className="mt-5 text-body text-lg max-w-2xl">
            Practical guides and real stories about sneaker recycling, shoe donations, adaptive sports, and running drives that make a difference.
          </p>
        </Reveal>

        {/* Category filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand ${
                active === cat ? "bg-brand text-white" : "bg-white card-soft text-ink hover:text-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="h-full">
              <Link
                to="/blogs/$slug"
                params={{ slug: p.slug }}
                className="group card-soft card-hover overflow-hidden flex flex-col h-full focus-visible:outline focus-visible:outline-3 focus-visible:outline-brand"
              >
                <div className="h-44 bg-gradient-to-br from-brand/20 to-canvas relative">
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand">
                    {p.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-body uppercase tracking-wider">
                    <span>{formatDate(p.date)}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {readingMinutes(p)} min read</span>
                  </div>
                  <h2 className="mt-2 text-xl font-bold text-ink">{p.title}</h2>
                  <p className="mt-2 text-body flex-1">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-brand font-semibold">
                    Read article
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
