import { createFileRoute, Link } from "@tanstack/react-router";
import { Checklist, PageHero } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { readinessItems } from "@/content/site";
export const Route = createFileRoute("/resources/readiness-checklist")({
  head: () =>
    pageHead(
      "Printable Capital Raise Readiness Checklist | Nevio",
      "A printable checklist covering nine foundations for capital-raise preparation.",
      "/resources/readiness-checklist",
      true,
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Printable resource"
        title="The Capital Raise Readiness Checklist"
        intro="Use this working list to record gaps, owners, supporting evidence, and next decisions before investor outreach."
      />
      <section className="section">
        <div className="container-page article-copy">
          <Checklist items={readinessItems} />
          <h2>How to use it</h2>
          <p>
            For each area, record what is complete, what evidence supports it, what remains
            uncertain, who owns the next action, and the target review date. Revisit the list as the
            opportunity and process develop.
          </p>
          <p>
            <em>
              General business-advisory information only. Obtain independent professional advice
              where required.
            </em>
          </p>
          <div className="button-row">
            <button className="btn btn-dark" onClick={() => window.print()}>
              Print Checklist
            </button>
            <Link to="/contact" className="btn btn-outline">
              Discuss Your Raise
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
