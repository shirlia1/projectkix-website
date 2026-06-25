// Generates public/sitemap.xml and public/robots.txt at build time.
// Domain-aware via VITE_SITE_URL (e.g. "https://projectkix.com"); when it's
// unset it falls back to root-relative paths so the build still succeeds.
// Plain Node, no dependencies. Never throws — a failure here must not fail the
// build (it just leaves the committed fallback files in place).
import { writeFile } from "node:fs/promises";

try {
  const base = (process.env.VITE_SITE_URL ?? "").replace(/\/+$/, "");
  const loc = (path) => `${base}${path}`;

  const routes = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/contribute", changefreq: "monthly", priority: "0.9" },
    { path: "/impact-fundraising", changefreq: "monthly", priority: "0.8" },
    { path: "/partners", changefreq: "monthly", priority: "0.7" },
    { path: "/blogs", changefreq: "weekly", priority: "0.6" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
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
