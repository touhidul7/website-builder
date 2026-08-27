import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeadContent, Link, Outlet, Scripts, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { Footer } from "../components/site/Footer";
import { Header } from "../components/site/Header";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="flex min-h-[70vh] items-center justify-center bg-surface px-4"><div className="max-w-md text-center"><p className="eyebrow">404</p><h1 className="mt-3 text-4xl">Page not found</h1><p className="mt-4 text-sm leading-7 text-muted-foreground">The page you requested is not part of the approved Northline website model.</p><Link to="/" className="btn-base btn-primary mt-7">Return home</Link></div></div>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="flex min-h-[70vh] items-center justify-center bg-surface px-4"><div className="max-w-md text-center"><h1 className="text-3xl">This page did not load</h1><p className="mt-4 text-sm leading-7 text-muted-foreground">Please try again or return to the Northline home page.</p><div className="mt-7 flex flex-wrap justify-center gap-3"><button onClick={() => { router.invalidate(); reset(); }} className="btn-base btn-primary">Try again</button><a href="/" className="btn-base btn-secondary">Return home</a></div></div></div>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Northline Capital Partners" },
      { name: "description", content: "Northline Capital Partners website model. Approved business positioning and criteria are pending confirmation." },
      { name: "author", content: "Northline Capital Partners" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><div className="flex min-h-screen flex-col"><Header /><main className="flex-1"><Outlet /></main><Footer /></div></QueryClientProvider>;
}
