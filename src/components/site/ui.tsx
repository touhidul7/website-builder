import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { faqs, processSteps, readinessItems, services, type Service } from "@/content/site";
import { track } from "@/lib/tracking";
export function PageHero({
  eyebrow,
  title,
  intro,
  actions,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  actions?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "page-hero compact" : "page-hero"}>
      <div className="container-page">
        <div className="measure">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {intro && <p className="hero-intro">{intro}</p>}
          {actions && <div className="button-row">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}
export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav className="breadcrumbs container-page" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item, i) => (
        <span key={item.label}>
          <i>/</i>
          {item.to && i < items.length - 1 ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span aria-current={i === items.length - 1 ? "page" : undefined}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="card">
      <div className="icon-box">
        <Icon />
      </div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <Link to={`/services/${service.slug}`} className="text-link">
        Explore service <ArrowRight />
      </Link>
    </article>
  );
}
export function ServiceGrid() {
  return (
    <div className="card-grid three">
      {services.map((s) => (
        <ServiceCard key={s.slug} service={s} />
      ))}
    </div>
  );
}
export function Checklist({ items }: { items: readonly string[] }) {
  return (
    <ul className="check-list">
      {items.map((i) => (
        <li key={i}>
          <Check aria-hidden="true" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
export function ProcessTimeline() {
  return (
    <ol className="process-grid">
      {processSteps.map((step, i) => (
        <li key={step.title}>
          <span>{String(i + 1).padStart(2, "0")}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
export function FAQList({ limit }: { limit?: number }) {
  return (
    <div className="faq-list">
      {faqs.slice(0, limit).map(([q, a]) => (
        <details
          key={q}
          onToggle={(event) => event.currentTarget.open && track("faq_expand", { question: q })}
        >
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function GlobalCTA() {
  return (
    <section className="global-cta">
      <div className="container-page">
        <div className="measure">
          <p className="eyebrow">Start a confidential conversation</p>
          <h2>Tell us what you are building—and what the right capital would make possible.</h2>
          <p>
            Share the opportunity, the purpose of the raise, and your current stage. Northline will
            review the information and respond to discuss potential fit.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise <ArrowRight />
          </Link>
          <small>Please do not send confidential records through the initial inquiry form.</small>
        </div>
      </div>
    </section>
  );
}
export function ReadinessPanel() {
  return (
    <div className="readiness-panel">
      <SectionHeading
        eyebrow="A useful first check"
        title="Assess the foundations of your raise"
        intro="Review nine areas that commonly shape whether an opportunity is ready for a serious capital conversation."
      />
      <Checklist items={readinessItems} />
      <Link to="/capital-raise-readiness-checklist" className="btn btn-dark">
        Assess Your Readiness
      </Link>
    </div>
  );
}
export function ServiceDetail({ service }: { service: Service }) {
  const Icon = service.icon;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    provider: { "@type": "Organization", name: "Northline Capital Partners" },
  };
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.title }]} />
      <PageHero
        eyebrow="Northline services"
        title={service.title}
        intro={service.short}
        actions={
          <>
            <Link to="/contact" className="btn btn-gold">
              Discuss Your Raise
            </Link>
            <Link to="/process" className="btn btn-outline">
              See How We Work
            </Link>
          </>
        }
      />
      <section className="section">
        <div className="container-page two-col">
          <div>
            <div className="icon-box large">
              <Icon />
            </div>
            <SectionHeading eyebrow="The objective" title={service.outcome} />
            <p className="body-large">
              Northline applies a disciplined advisory process to clarify decisions, strengthen the
              supporting case, and keep the work moving with appropriate specialists involved where
              required.
            </p>
          </div>
          <div className="card elevated">
            <h2>Core deliverables</h2>
            <Checklist items={service.deliverables} />
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page two-col">
          <SectionHeading eyebrow="When it fits" title="This service may be useful when…" />
          <Checklist items={service.suitable} />
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <ReadinessPanel />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GlobalCTA />
    </>
  );
}
