# Deploying ProjectKix to Vercel

This is a [TanStack Start](https://tanstack.com/start) app (React 19 + Vite +
Nitro) managed through Lovable. It server-renders, so it deploys as a Vercel
Function rather than a static site.

## One-time setup

1. Push this branch to GitHub (already connected to Lovable).
2. In Vercel, **Add New → Project** and import the repository.
3. Vercel reads `vercel.json` automatically, which:
   - sets the build command to `vite build`,
   - installs with `bun install`,
   - and sets `NITRO_PRESET=vercel` so Nitro emits Vercel's Build Output API
     (`.vercel/output`) instead of the default Cloudflare target.
4. Leave **Output Directory** on the default (auto-detected) and deploy.

> The Lovable build config (`@lovable.dev/vite-tanstack-config`) is published to
> a private registry. Vercel installs it from npm with no extra configuration —
> no auth token is required for the public package.

## Environment variables

No runtime secrets are required today. The contact and "request a bag" forms
are front-end only (they show a confirmation state). To capture real
submissions, wire them to a form backend (e.g. Formspree, Resend, or a Vercel
serverless route) and add the corresponding keys in **Project → Settings →
Environment Variables**.

## Local development

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
bun run preview  # preview the production build
```
