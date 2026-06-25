// Site URL helpers for SEO. `VITE_SITE_URL` (e.g. "https://projectkix.com") is
// injected at build time by Vite. Everything degrades gracefully when it's unset
// (no canonical tag, relative OG/sitemap URLs) so the site still works locally
// and on preview deploys without the env var.

/** Production origin without a trailing slash, or "" when VITE_SITE_URL is unset. */
export const siteUrl = (import.meta.env.VITE_SITE_URL ?? "").replace(/\/$/, "");

/**
 * Canonical `<link>` for a page path, e.g. canonical("/about").
 * Returns [] when the site URL is unknown — a missing canonical is safer than a
 * wrong (relative or guessed) one.
 */
export function canonical(path: string) {
  return siteUrl ? [{ rel: "canonical" as const, href: `${siteUrl}${path}` }] : [];
}
