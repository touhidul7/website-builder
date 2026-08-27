import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/investment-approach", label: "Investment Approach" },
  { to: "/investment-criteria", label: "Investment Criteria" },
  { to: "/business-owners", label: "For Business Owners" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 text-primary-foreground backdrop-blur">
      <div className="container-page flex min-h-20 items-center justify-between gap-6 py-3">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="h-9 w-px bg-accent" aria-hidden="true" />
          <span className="leading-none">
            <span className="block font-serif text-lg font-semibold tracking-[0.08em] text-white">NORTHLINE</span>
            <span className="mt-1 block text-[0.62rem] font-semibold tracking-[0.2em] text-white/60">CAPITAL PARTNERS</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {nav.map((item) => <Link key={item.to} to={item.to} className="text-sm font-medium text-white/70 transition-colors hover:text-white" activeProps={{ className: "text-white" }}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="btn-base btn-primary hidden sm:inline-flex">Start a Confidential Conversation</Link>
          <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white xl:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && <nav className="border-t border-white/10 bg-primary xl:hidden" aria-label="Mobile navigation"><div className="container-page flex flex-col gap-1 py-4">
        {nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium text-white/75 hover:bg-white/5 hover:text-white">{item.label}</Link>)}
        <Link to="/contact" onClick={() => setOpen(false)} className="btn-base btn-primary mt-3 w-full sm:hidden">Start a Confidential Conversation</Link>
      </div></nav>}
    </header>
  );
}
