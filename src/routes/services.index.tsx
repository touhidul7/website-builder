import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Breadcrumbs,
  GlobalCTA,
  PageHero,
  SectionHeading,
  ServiceGrid,
} from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead(
      "Capital Raising Advisory Services | Nevio Capital Partners",
      "Strategy, readiness, investor materials, raise-process support, transaction coordination, and post-raise planning.",
      "/services",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="Services"
        title="A coordinated approach to raising capital."
        intro="Nevio helps shape the strategy, information, materials, management alignment, and operating discipline needed to pursue capital with greater clarity."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise
          </Link>
        }
      />
      <section className="section">
        <div className="container-page">
          <ServiceGrid />
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Where engagements begin"
            title="Start with the constraint that is holding the raise back."
          />
          <div className="card-grid three">
            <article className="card">
              <h3>Strategy is not yet defined</h3>
              <p>
                The purpose, amount, timing, use of funds, or suitable capital path still needs to
                be clarified.
              </p>
            </article>
            <article className="card">
              <h3>The raise is defined, but readiness is not</h3>
              <p>
                The supporting information, materials, management alignment, or diligence foundation
                needs work.
              </p>
            </article>
            <article className="card">
              <h3>The process is already underway</h3>
              <p>
                Conversations, follow-up, feedback, diligence, or specialist workstreams need
                greater structure.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="How support is scoped"
            title="Diagnose first, then define the work."
            intro="A confidential diagnostic conversation leads to clear priorities, a defined work plan, owners, milestones, and an execution cadence suited to the stage of the raise."
          />
          <div className="card elevated">
            <h2>Responsible scope</h2>
            <p className="body-large">
              Nevio does not guarantee funding. Legal, tax, accounting, investment, and regulated
              work remains with the appropriately qualified or licensed professionals.
            </p>
          </div>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
