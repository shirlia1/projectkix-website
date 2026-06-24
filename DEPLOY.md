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
