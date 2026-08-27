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
      "Our Capital Raising Process | Nevio Capital Partners",
      "See Nevio's five-stage approach to diagnosing, preparing, positioning, pursuing, and advancing a capital raise.",
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
        title="A disciplined route from opportunity to investor conversation."
        intro="Every engagement is scoped to the opportunity and stage. The five-stage framework creates a shared route, visible decisions, and practical ownership without promising a financing outcome."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Start a Conversation
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
            intro="Nevio helps keep strategy, materials, leadership communication, and process management connected as new information emerges."
          />
          <div>
            <h2>Specialists remain essential.</h2>
            <p className="body-large">
              Legal offering documents and legal, tax, accounting, investment, and regulated
              activities must be handled by appropriately qualified or licensed professionals. Nevio
              coordinates with those advisers but does not replace them.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Working together"
            title="A defined scope, clear responsibilities, and honest expectations."
          />
          <div className="card-grid three">
            <article className="card">
              <h3>What happens in the first conversation</h3>
              <p>
                We discuss the opportunity, purpose and approximate amount of the raise, current
                stage, timing, existing materials, and the decisions that matter most.
              </p>
            </article>
            <article className="card">
              <h3>How engagements are scoped</h3>
              <p>
                The initial diagnostic identifies priorities, readiness gaps, owners, deliverables,
                dependencies, and an appropriate execution cadence.
              </p>
            </article>
            <article className="card">
              <h3>What Nevio needs from the client</h3>
              <p>
                Committed decision-makers, timely access to reasonable information, candid
                discussion of risk, and coordination with appropriate professional advisers.
              </p>
            </article>
          </div>
          <div className="readiness-panel space-top-lg">
            <h2>What Nevio does not promise</h2>
            <p className="body-large">
              Nevio does not promise funding, introductions, a closing date, returns, or a
              particular outcome. The work is designed to strengthen preparation and process
              discipline while financing decisions remain with the relevant parties.
            </p>
          </div>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
