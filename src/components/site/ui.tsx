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
            Share the opportunity, the purpose of the raise, and your current stage. Nevio will
            review the information and respond to discuss potential fit.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise <ArrowRight />
          </Link>
          <small>
            Please do not send confidential financial records or sensitive non-public information
            until an appropriate process is agreed.
          </small>
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
  const serviceIndex = services.findIndex((item) => item.slug === service.slug);
  const related = [
    services[(serviceIndex + 1) % services.length],
    services[(serviceIndex + 2) % services.length],
  ].filter((item): item is Service => Boolean(item));
  const primaryCta =
    service.slug === "investor-readiness"
      ? { label: "Assess Your Readiness", to: "/capital-raise-readiness-checklist" as const }
      : service.slug === "investor-materials"
        ? { label: "Discuss Your Materials", to: "/contact" as const }
        : service.slug === "transaction-coordination" || service.slug === "post-raise-planning"
          ? { label: "Explore Fit", to: "/contact" as const }
          : { label: "Discuss Your Raise", to: "/contact" as const };
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    provider: { "@type": "Organization", name: "Nevio Capital Partners" },
  };
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", to: "/services" }, { label: service.title }]} />
      <PageHero
        eyebrow="Nevio services"
        title={service.headline}
        intro={service.short}
        actions={
          <>
            <Link to={primaryCta.to} className="btn btn-gold">
              {primaryCta.label}
            </Link>
            <Link to="/process" className="btn btn-outline">
              See How We Work
            </Link>
          </>
        }
      />
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="When this service helps"
            title="Bring structure to the decisions that shape the raise."
          />
          <Checklist items={service.suitable} />
        </div>
      </section>
      <section className="section surface">
        <div className="container-page two-col">
          <div>
            <div className="icon-box large">
              <Icon />
            </div>
            <SectionHeading eyebrow="The objective" title={service.outcome} />
            <p className="body-large">
              Nevio applies a disciplined advisory process to clarify decisions, strengthen the
              supporting case, and keep the work moving with appropriate specialists involved where
              required.
            </p>
          </div>
          <div className="card elevated">
            <h2>What the work can include</h2>
            <Checklist items={service.deliverables} />
            {service.slug === "investor-materials" && (
              <p>
                Legal offering documents must be prepared or reviewed by qualified legal
                professionals.
              </p>
            )}
            {service.slug === "transaction-coordination" && (
              <p>
                Nevio coordinates with—but does not replace—legal, tax, accounting, or licensed
                securities professionals.
              </p>
            )}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Connected support"
            title="How it connects to the wider raise"
            intro="Capital strategy, readiness, materials, process management, diligence, and post-raise planning work best as one connected system."
          />
          <div className="card-grid three">
            {related.map((item) => (
              <ServiceCard key={item.slug} service={item} />
            ))}
            <article className="card">
              <h3>See the complete service system</h3>
              <p>Understand all six areas of support and where an engagement may begin.</p>
              <Link to="/services" className="text-link">
                Explore all services <ArrowRight />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Service questions"
            title="Clarify the scope before the work begins."
          />
          <div className="faq-list">
            <details>
              <summary>Does this service guarantee funding?</summary>
              <p>
                No. Nevio provides strategy and process support. Financing outcomes depend on the
                opportunity, market conditions, diligence, decision processes, and other factors.
              </p>
            </details>
            <details>
              <summary>How is the engagement scoped?</summary>
              <p>
                The first conversation identifies the current stage, priorities, gaps, and
                appropriate work plan. Scope is tailored to the opportunity rather than applied as a
                fixed package.
              </p>
            </details>
          </div>
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
