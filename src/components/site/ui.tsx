import { Link } from "@tanstack/react-router";
import { AlertCircle, ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: string; children?: ReactNode }) {
  return <section className="border-b border-border bg-surface"><div className="container-page py-18 md:py-24"><div className="max-w-4xl">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1 className="mt-4 text-4xl leading-[1.08] md:text-6xl">{title}</h1>{intro && <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{intro}</p>}{children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
  </div></div></section>;
}

export function SectionHeading({ eyebrow, title, intro, centered = false }: { eyebrow?: string; title: string; intro?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className="mt-3 text-3xl leading-tight md:text-5xl">{title}</h2>{intro && <p className="mt-5 text-base leading-7 text-muted-foreground">{intro}</p>}</div>;
}

export function IconCard({ icon: Icon, title, body, number }: { icon: LucideIcon; title: string; body: string; number?: string }) {
  return <article className="card-soft h-full"><div className="flex items-center justify-between gap-4"><span className="icon-tile"><Icon className="h-5 w-5" strokeWidth={1.5} /></span>{number && <span className="font-serif text-sm text-accent">{number}</span>}</div><h3 className="mt-6 text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{body}</p></article>;
}

export function ConfirmNote({ children }: { children: ReactNode }) {
  return <div className="confirm-note"><AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.6} /><p>{children}</p></div>;
}

export function CtaBand({ title = "Begin a Confidential Conversation", body = "Share a brief overview. Please do not send highly sensitive documents or non-public financial information through the public form." }: { title?: string; body?: string }) {
  return <section className="bg-secondary-navy"><div className="container-page grid items-center gap-8 py-16 md:grid-cols-[1fr_auto] md:py-20"><div><p className="eyebrow">A considered first step</p><h2 className="mt-3 max-w-3xl text-3xl leading-tight text-white md:text-4xl">{title}</h2><p className="mt-4 max-w-2xl leading-7 text-white/65">{body}</p></div><Link to="/contact" className="btn-base btn-primary self-start md:self-center">Start a Conversation <ArrowRight className="h-4 w-4" /></Link></div></section>;
}
