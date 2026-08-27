import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { Footer } from "../components/site/Footer";
import { Header } from "../components/site/Header";
import { AnalyticsBridge } from "../components/site/AnalyticsBridge";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="section">
      <div className="container-page measure">
        <p className="eyebrow">404</p>
        <h1>This page is not on the current path.</h1>
        <p className="body-large">
          The address may have changed, or the page may no longer be available.
        </p>
        <div className="button-row">
          <Link to="/" className="btn btn-gold">
            Return Home
          </Link>
          <Link to="/services" className="btn btn-outline">
            Explore Services
          </Link>
        </div>
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
    <div className="flex min-h-[70vh] items-center justify-center bg-surface px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl">This page did not load</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          Please try again or return to the Nevio home page.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-base btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-base btn-secondary">
            Return home
          </a>
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
      { title: "Nevio Capital Partners" },
      {
        name: "description",
        content:
          "Capital-raising strategy, investor readiness, investor-facing materials, and disciplined process support.",
      },
      { name: "author", content: "Nevio Capital Partners" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
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
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <AnalyticsBridge />
        <main id="main-content" className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Nevio Capital Partners",
            }),
          }}
        />
      </div>
    </QueryClientProvider>
  );
}
