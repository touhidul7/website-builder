import { Link } from "@tanstack/react-router";
import { Breadcrumbs, GlobalCTA, PageHero } from "./ui";
import type { Article } from "@/content/insights";
export function ArticlePage({ article }: { article: Article }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "Northline Capital Partners" },
  };
  return (
    <>
      <Breadcrumbs items={[{ label: "Insights", to: "/insights" }, { label: article.title }]} />
      <PageHero eyebrow={article.category} title={article.title} intro={article.description} />
      <article className="section">
        <div className="container-page article-copy">
          {article.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.bullets && (
                <ul>
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <div className="readiness-panel" style={{ marginTop: "3rem" }}>
            <h2>Prepare before outreach creates pressure.</h2>
            <p>
              Use Northline's readiness checklist to review the strategy, information, materials,
              management alignment, and process foundations behind your raise.
            </p>
            <Link
              to="/capital-raise-readiness-checklist"
              className="btn btn-dark"
              style={{ marginTop: "1.5rem" }}
            >
              Download the Readiness Checklist
            </Link>
          </div>
          <p>
            <em>
              This article is general business-advisory information, not legal, tax, accounting, or
              investment advice, and not an offer or solicitation.
            </em>
          </p>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <GlobalCTA />
    </>
  );
}
