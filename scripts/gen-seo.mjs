// Generates public/sitemap.xml and public/robots.txt at build time.
// Domain-aware via VITE_SITE_URL (e.g. "https://projectkix.com"); when it's
// unset it falls back to root-relative paths so the build still succeeds.
// Plain Node, no dependencies. Never throws — a failure here must not fail the
// build (it just leaves the committed fallback files in place).
import { writeFile } from "node:fs/promises";

try {
  const base = (process.env.VITE_SITE_URL ?? "").replace(/\/+$/, "");
  const loc = (path) => `${base}${path}`;

  // Keep blog slugs in sync with src/lib/blog.ts (articles[].slug).
  const blogSlugs = [
    "how-shoe-donations-create-impact",
    "sneaker-recycling-how-it-works",
    "what-are-adaptive-sports",
    "wheelchair-basketball-and-your-sneakers",
    "why-gyms-make-great-sneaker-drive-partners",
    "sneaker-drives-for-schools",
    "sneaker-recycling-corporate-social-responsibility",
    "sustainable-footwear-make-sneakers-last",
    "what-happens-after-you-donate-sneakers",
    "how-to-host-a-shoe-drive",
  ];

  const routes = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/contribute", changefreq: "monthly", priority: "0.9" },
    { path: "/impact-fundraising", changefreq: "monthly", priority: "0.8" },
    { path: "/partners", changefreq: "monthly", priority: "0.7" },
    { path: "/blogs", changefreq: "weekly", priority: "0.6" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
    ...blogSlugs.map((slug) => ({ path: `/blogs/${slug}`, changefreq: "monthly", priority: "0.6" })),
  ];

  const urls = routes
    .map(
      (r) =>
        `  <url><loc>${loc(r.path)}</loc><changefreq>${r.changefreq}</changefreq><priority>${r.priority}</priority></url>`,
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Sitemap: ${loc("/sitemap.xml")}
`;

  await writeFile("public/sitemap.xml", sitemap);
  await writeFile("public/robots.txt", robots);
  console.log(`[gen-seo] wrote sitemap.xml + robots.txt (base="${base || "(relative)"}")`);
} catch (err) {
  console.warn("[gen-seo] skipped (using committed fallback files):", err?.message ?? err);
}
