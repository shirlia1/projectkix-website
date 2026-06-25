# Deploying ProjectKix to Vercel

This is a [TanStack Start](https://tanstack.com/start) app (React 19 + Vite +
Nitro) managed through Lovable. It server-renders, so it deploys as a Vercel
Function rather than a static site.

## One-time setup

1. Push this branch to GitHub (already connected to Lovable).
2. In Vercel, **Add New → Project** and import the repository.
3. Vercel reads `vercel.json` automatically (build command `vite build`,
   install with `bun install`).
4. Leave **Output Directory** on the default (auto-detected) and deploy.

> **Why `nitro: { preset: "vercel" }` is in `vite.config.ts`:** Lovable's build
> config (`@lovable.dev/vite-tanstack-config`) only runs the Nitro deploy plugin
> when it detects the Lovable sandbox, *unless* you pass an explicit `nitro`
> option. Without it, a Vercel build runs `vite build` successfully but emits no
> server output, so every route returns `404: NOT_FOUND`. Forcing the `vercel`
> preset makes Nitro write Vercel's Build Output API to `.vercel/output`, which
> Vercel serves automatically. Inside the Lovable sandbox the preset is forced
> back to Cloudflare, so Lovable previews are unaffected.

> The Lovable build config is also published to the public npm registry, so
> Vercel installs it with no auth token or extra configuration.

## Gallery images

The homepage gallery is fully self-contained: `src/routes/index.tsx` references
the images directly from `public/gallery/` (e.g. `/gallery/booth.jpg`), with no
dependency on Lovable or R2.

Drop these five files into `public/gallery/` (exact, case-sensitive names):
`booth.jpg`, `champions.png`, `lafitness.png`, `warriors.png`,
`certificate.png`. See `public/gallery/README.md` for what each one is.

## Environment variables

The Contact form and the Contribute "request a bag" form submit to server
functions (`src/lib/forms.ts`) that email each submission to you via
[Resend](https://resend.com). Add these in **Project → Settings → Environment
Variables** (for Production, Preview, and Development):

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | ✅ | Your Resend API key — create one at https://resend.com/api-keys |
| `CONTACT_TO_EMAIL` | ✅ | The inbox that receives submissions, e.g. `shirbeny1@gmail.com` |
| `CONTACT_FROM_EMAIL` | optional | The "from" address, e.g. `ProjectKix <hello@yourdomain.com>`. Must be a sender on a **verified domain** in Resend. If omitted, the shared test sender `onboarding@resend.dev` is used. |

### Getting Resend ready (≈5 minutes)

1. Sign up at https://resend.com (free tier: 3,000 emails/month, 100/day).
2. Create an API key → copy it into `RESEND_API_KEY`.
3. Set `CONTACT_TO_EMAIL` to the address where you want submissions delivered.
4. **Quick start without a domain:** leave `CONTACT_FROM_EMAIL` unset. Resend's
   test sender (`onboarding@resend.dev`) only delivers to the email address on
   your own Resend account, so make `CONTACT_TO_EMAIL` that same address.
5. **For real/production use:** in Resend, verify your domain (add the DNS
   records they give you), then set `CONTACT_FROM_EMAIL` to an address on that
   domain. You can then deliver to any inbox.

After adding or changing variables, redeploy so the new values take effect.

> Submissions arrive as an email with the sender's details, and the visitor's
> email is set as the `Reply-To`, so you can reply to them directly. Nothing is
> stored in a database; the email *is* the record. If you later want a stored
> copy too, you can add a webhook/spreadsheet step without touching the UI.

## Local development

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
bun run preview  # preview the production build
```
