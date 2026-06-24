import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blogs")({
  head: () => ({
    meta: [
      { title: "Blogs — ProjectKix" },
      { name: "description", content: "Stories from the ProjectKix community: athletes, drives, partnerships and impact." },
    ],
  }),
  component: BlogsPage,
});

const posts = [
  { title: "How one school drive funded 12 wheelchairs", date: "Mar 12, 2025", excerpt: "When a fifth-grade class decided to collect sneakers, they had no idea where it would lead…" },
  { title: "Inside our partnership with adaptive basketball leagues", date: "Feb 28, 2025", excerpt: "Meet the coaches turning recycled footwear into court time for new athletes." },
  { title: "40 years to decompose: the sneaker problem we're solving", date: "Feb 02, 2025", excerpt: "A look at what really happens to the 300+ million pairs thrown out each year." },
  { title: "Corporate drives that actually move the needle", date: "Jan 15, 2025", excerpt: "Three playbooks from Fortune 500 partners running standout campaigns." },
];

function BlogsPage() {
  return (
    <div className="px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand font-bold uppercase tracking-widest text-sm">Blogs</p>
        <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold text-ink leading-tight">Stories from the laces up.</h1>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="card-soft overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-brand/20 to-canvas" />
              <div className="p-6">
                <div className="text-xs text-body uppercase tracking-wider">{p.date}</div>
                <h2 className="mt-2 text-xl font-bold text-ink">{p.title}</h2>
                <p className="mt-2 text-body">{p.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-brand font-semibold">→ Read more</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
