import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Breadcrumbs,
  Checklist,
  FAQList,
  GlobalCTA,
  PageHero,
  ProcessTimeline,
  SectionHeading,
} from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/who-we-help/companies")({
  head: () =>
    pageHead(
      "Capital Raising Support for Companies | Nevio",
      "Capital strategy and raise-process support for founder-led, private, and growth-stage organizations.",
      "/who-we-help/companies",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Who We Help", to: "/who-we-help" }, { label: "Companies" }]} />
      <PageHero
        eyebrow="For companies"
        title="Prepare the company—and the story behind the raise."
        intro="Nevio supports founder-led, private, and growth-stage organizations preparing for growth, acquisition, working-capital, project, or new-market raises."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise
          </Link>
        }
      />
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="The work behind the raise"
            title="A coordinated process is a leadership advantage."
          />
          <Checklist
            items={[
              "Agree on the purpose, amount, timing, and decision criteria",
              "Connect strategic priorities to a defensible use-of-funds plan",
              "Organize financial, commercial, and operating information",
              "Prepare management for consistent questions and answers",
              "Coordinate internal owners and external advisers",
              "Track conversations, feedback, diligence, and decisions",
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container-page two-col">
          <div>
            <SectionHeading
              eyebrow="Support for management"
              title="Advance the raise without losing control of the business."
            />
            <p className="body-large">
              Nevio helps establish owners, work plans, meeting preparation, information discipline,
              and decision checkpoints so leadership can keep the process moving while continuing to
              run the company.
            </p>
          </div>
          <div className="card elevated">
            <h2>Bring to the first conversation</h2>
            <Checklist
              items={[
                "A concise company and opportunity overview",
                "The intended amount or range",
                "A defined use of funds",
                "Current stage and target timing",
                "Existing financial or investor materials",
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading eyebrow="Common questions" title="Clarify the starting point." />
          <FAQList limit={2} />
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="How it advances"
            title="Build readiness in a deliberate sequence."
          />
          <ProcessTimeline />
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
