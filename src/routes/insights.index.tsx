import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, GlobalCTA, PageHero } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { articles } from "@/content/insights";
export const Route = createFileRoute("/insights/")({
  head: () =>
    pageHead(
      "Capital Raising Insights | Nevio Capital Partners",
      "Practical guidance on capital strategy, investor readiness, data rooms, and disciplined raise processes.",
      "/insights",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Insights" }]} />
      <PageHero
        eyebrow="Insights"
        title="Practical thinking for a better-prepared raise."
        intro="Practical, business-focused guidance for leaders building a more credible case for capital."
      />
      <section className="section">
        <div className="container-page">
          <div className="card-grid three">
            {articles.map((a) => (
              <article className="card" key={a.slug}>
                <p className="eyebrow">{a.category}</p>
                <h2 className="article-card-title">{a.title}</h2>
                <p>{a.description}</p>
                <Link to={`/insights/${a.slug}`} className="text-link">
                  Read insight <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
          <div className="readiness-panel space-top-lg">
            <h2>How ready is your capital case?</h2>
            <p>Review nine foundations before investor outreach.</p>
            <Link to="/capital-raise-readiness-checklist" className="btn btn-dark space-top">
              Download the Readiness Checklist
            </Link>
          </div>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
