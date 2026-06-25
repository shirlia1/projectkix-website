import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Mascot } from "../components/Mascot";
import { siteUrl } from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold italic text-brand">404</h1>
        <h2 className="mt-3 text-xl font-bold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-body">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn-red mt-6">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-bold text-ink">This page didn't load</h1>
        <p className="mt-2 text-sm text-body">Something went wrong. Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-red">Try again</button>
          <a href="/" className="btn-black">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    // Local OG/Twitter card image (no external dependency). Social scrapers
    // require an absolute URL, so `siteUrl` (from VITE_SITE_URL) is prefixed when
    // set; otherwise it falls back to a relative path.
    const ogImage = `${siteUrl}/og-image.png`;
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ProjectKix",
      alternateName: "ProjectKix™",
      url: siteUrl || "/",
      logo: `${siteUrl}/favicon.svg`,
      description:
        "ProjectKix collects and recycles gently used sneakers to fund disabled athletes, charities, and a greener planet.",
      sameAs: [
        "https://www.facebook.com/ProjectKixSneakers/",
        "https://www.instagram.com/projectkixsneakers/",
      ],
    };
    return {
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#E63950" },
      { title: "ProjectKix™ — Give your sneakers a new purpose" },
      { name: "description", content: "ProjectKix collects and recycles gently used sneakers to fund disabled athletes nationwide." },
      { property: "og:title", content: "ProjectKix™ — Give your sneakers a new purpose" },
      { property: "og:description", content: "ProjectKix collects and recycles gently used sneakers to fund disabled athletes nationwide." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ProjectKix" },
      { property: "og:locale", content: "en_US" },
      ...(siteUrl ? [{ property: "og:url", content: `${siteUrl}/` }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ProjectKix™ — Give your sneakers a new purpose" },
      { name: "twitter:description", content: "ProjectKix collects and recycles gently used sneakers to fund disabled athletes nationwide." },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "ProjectKix — give your sneakers a new purpose" },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "ProjectKix — give your sneakers a new purpose" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&display=swap",
      },
    ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-canvas">
        <a href="#main" className="skip-link">Skip to content</a>
        <Nav />
        <main id="main" tabIndex={-1} className="flex-1 outline-none"><Outlet /></main>
        <Footer />
        <Mascot />
      </div>
    </QueryClientProvider>
  );
}
