import { Link } from "@tanstack/react-router";
import { Menu, X, Sprout } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/how-it-works", label: "How It Works" },
  { to: "/programs", label: "Programs" },
  { to: "/pricing", label: "Pricing" },
  { to: "/our-tutors", label: "Our Tutors" },
  { to: "/reviews", label: "Reviews" },
  { to: "/locations", label: "Locations" },
  { to: "/resources", label: "Resources" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-3">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="icon-tile !h-9 !w-9">
            <Sprout className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="font-serif text-lg leading-tight font-semibold text-primary">
            My Tutor Sprout
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/book" className="btn-base btn-primary hidden sm:inline-flex">
            Book Free Consultation
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="btn-base btn-secondary !px-3 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.75} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/book"
              onClick={() => setOpen(false)}
              className="btn-base btn-primary mt-3 w-full"
            >
              Book Free Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
