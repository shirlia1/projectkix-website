// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Security headers applied to every response. Nitro emits these into the Vercel
// output config (vercel.json `headers` are ignored once Build Output API is
// used). No CSP here — it needs live testing against the Google Fonts + inline
// styles this app uses, and a wrong policy silently breaks the page.
const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
};

const nitroConfig = {
  preset: "vercel",
  routeRules: {
    "/**": { headers: securityHeaders },
    // Fingerprinted build assets are immutable — cache them aggressively.
    "/assets/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
  },
};

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Outside the Lovable sandbox (e.g. on Vercel) the wrapper SKIPS the Nitro
  // deploy plugin unless `nitro` is set explicitly — so `vite build` produced
  // no server output and every route returned a 404. Forcing the Vercel preset
  // makes Nitro emit Vercel's Build Output API (.vercel/output). Inside the
  // Lovable sandbox the preset/output are forced back to Cloudflare, so Lovable
  // previews are unaffected. `routeRules` (security headers + asset caching) is
  // passed straight through to Nitro; the wrapper's public type only documents
  // preset/output/cloudflare.
  nitro: nitroConfig as unknown as { preset: string },
});

