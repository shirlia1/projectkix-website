// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Gallery images are stored in Lovable, not committed to the repo. The
// `src/assets/gallery/*.asset.json` manifests reference them at the Lovable-only
// path `/__l5e/assets-v1/<assetId>/<file>`, which doesn't exist on Vercel — so
// the images 404 there. Proxy that path to the project's public R2 bucket
// (object key = `a/v1/<projectId>/<assetId>/<file>`). Nitro turns `proxy` route
// rules into Vercel CDN-level rewrites at build time, so this is served at the
// edge without invoking a function. To make the deployment fully self-contained
// instead, drop the real files into `public/` and update the components.
const nitroConfig = {
  preset: "vercel",
  routeRules: {
    "/__l5e/assets-v1/**": {
      proxy:
        "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a/v1/31f6c235-177c-4986-b6f8-63078ca61a78/**",
    },
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
  // previews are unaffected. `routeRules` (above) is passed straight through to
  // Nitro; the wrapper's public type only documents preset/output/cloudflare.
  nitro: nitroConfig as unknown as { preset: string },
});

