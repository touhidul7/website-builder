import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="container-page py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl leading-tight md:text-5xl">{title}</h1>
          {intro && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl leading-tight md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

export function IconCard({
  icon: Icon,
  title,
  body,
  meta,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  meta?: string;
}) {
  return (
    <div className="card-soft">
      <span className="icon-tile">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <h3 className="mt-5 text-xl">{title}</h3>
      {meta && <p className="mt-1 text-sm font-semibold text-accent">{meta}</p>}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}

export function CheckList({ items, columns = 1 }: { items: readonly string[]; columns?: 1 | 2 }) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
          <Check className="mt-1 h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Quote({ quote, author }: { quote: string; author: string }) {
  return (
    <figure className="card-soft bg-accent-soft">
      <blockquote className="font-serif text-xl leading-relaxed text-primary">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-muted-foreground">
        — {author}
      </figcaption>
    </figure>
  );
}

export function CtaBand({
  title = "Let’s Talk About What Your Child Actually Needs",
  body = "No obligation. No pressure. Just clarity.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="container-page py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-2xl text-3xl leading-tight text-primary-foreground md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/75">{body}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/book" className="btn-base btn-primary">
            Book a Free Parent Consultation
          </Link>
          <Link to="/programs" className="btn-base btn-on-navy">
            View Our Programs
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LeadMagnetBand() {
  return (
    <section className="section-y bg-surface">
      <div className="container-page">
        <div className="card-soft grid items-center gap-8 md:grid-cols-[1.4fr_1fr] md:p-10">
          <div>
            <p className="eyebrow">Free parent guide</p>
            <h2 className="mt-3 text-2xl md:text-3xl">
              The Calm Parent’s Guide to Supporting Your Child’s Learning
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              How to spot skill gaps early, what tutoring should (and shouldn’t) feel like,
              grade-transition checklists, and the questions to ask any tutor.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link to="/free-learning-plan" className="btn-base btn-primary">
              Download the Free Parent Guide
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export const programs = [
  {
    slug: "/programs/grades-2-5",
    name: "SproutStart",
    grades: "Grades 2–5",
    summary: "Foundations in literacy, math, and confidence.",
  },
  {
    slug: "/programs/grades-6-10",
    name: "SproutBoost",
    grades: "Grades 6–10",
    summary: "Subject support, organization, and study skills.",
  },
  {
    slug: "/programs/grades-9-12",
    name: "SproutPrep",
    grades: "Grades 9–12",
    summary: "Exam prep, accountability, and transitions.",
  },
] as const;
