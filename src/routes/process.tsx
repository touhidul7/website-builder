import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Breadcrumbs,
  GlobalCTA,
  PageHero,
  ProcessTimeline,
  SectionHeading,
} from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/process")({
  head: () =>
    pageHead(
      "Capital Raise Process | Northline Capital Partners",
      "See Northline's five-stage approach to diagnosing, preparing, positioning, pursuing, and advancing a capital raise.",
      "/process",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Process" }]} />
      <PageHero
        eyebrow="Our process"
        title="Preparation first. Progress with discipline."
        intro="Every engagement is scoped to the opportunity and stage. The five-stage framework creates a shared route, visible decisions, and practical ownership without promising a financing outcome."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise
          </Link>
        }
      />
      <section className="section">
        <div className="container-page">
          <ProcessTimeline />
        </div>
      </section>
      <section className="section surface">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="Throughout the work"
            title="Clear roles, current information, and honest checkpoints."
            intro="Northline helps keep strategy, materials, leadership communication, and process management connected as new information emerges."
          />
          <div>
            <h2>Specialists remain essential.</h2>
            <p className="body-large">
              Legal offering documents and legal, tax, accounting, investment, and regulated
              activities must be handled by appropriately qualified or licensed professionals.
              Northline coordinates with those advisers but does not replace them.
            </p>
          </div>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
