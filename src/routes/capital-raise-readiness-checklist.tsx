import { createFileRoute } from "@tanstack/react-router";
import { ChecklistForm } from "@/components/site/LeadForms";
import { Checklist, PageHero, SectionHeading } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { readinessItems } from "@/content/site";
export const Route = createFileRoute("/capital-raise-readiness-checklist")({
  head: () =>
    pageHead(
      "Capital Raise Readiness Checklist | Nevio",
      "Review the strategy, information, materials, management alignment, and process foundations needed before investor outreach.",
      "/capital-raise-readiness-checklist",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageHero
        eyebrow="Free readiness resource"
        title="Is your opportunity ready for a serious capital conversation?"
        intro="Use The Capital Raise Readiness Checklist to identify decisions, information, and process foundations that deserve attention before outreach."
      />
      <section className="section">
        <div className="container-page two-col">
          <div>
            <SectionHeading
              eyebrow="The Capital Raise Readiness Checklist"
              title="Review nine foundations of a prepared raise."
            />
            <Checklist items={readinessItems} />
            <p className="body-large">
              The checklist is a planning resource, not legal, tax, accounting, or investment
              advice, and cannot predict or guarantee a financing outcome.
            </p>
          </div>
          <ChecklistForm />
        </div>
      </section>
    </>
  );
}
