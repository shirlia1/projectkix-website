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
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ProjectKix™ — Give your sneakers a new purpose" },
      { name: "description", content: "ProjectKix collects and recycles gently used sneakers to fund disabled athletes nationwide." },
      { property: "og:title", content: "ProjectKix™ — Give your sneakers a new purpose" },
      { property: "og:description", content: "ProjectKix collects and recycles gently used sneakers to fund disabled athletes nationwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "ProjectKix™ — Give your sneakers a new purpose" },
      { name: "twitter:description", content: "ProjectKix collects and recycles gently used sneakers to fund disabled athletes nationwide." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/22568ce6-fc85-4d46-8c6b-b628853f003f/id-preview-d6bc1dee--31f6c235-177c-4986-b6f8-63078ca61a78.lovable.app-1782323006419.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/22568ce6-fc85-4d46-8c6b-b628853f003f/id-preview-d6bc1dee--31f6c235-177c-4986-b6f8-63078ca61a78.lovable.app-1782323006419.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&display=swap",
      },
    ],
  }),
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
        <Nav />
        <main className="flex-1"><Outlet /></main>
        <Footer />
        <Mascot />
      </div>
    </QueryClientProvider>
  );
}
