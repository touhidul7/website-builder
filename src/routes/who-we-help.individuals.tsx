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
export const Route = createFileRoute("/who-we-help/individuals")({
  head: () =>
    pageHead(
      "Capital Raising Support for Founders & Sponsors | Nevio",
      "Strategy, readiness, materials, and process support for founders, entrepreneurs, and project sponsors.",
      "/who-we-help/individuals",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Who We Help", to: "/who-we-help" }, { label: "Individuals" }]}
      />
      <PageHero
        eyebrow="For individuals"
        title="Turn a defined opportunity into a credible capital story."
        intro="Nevio helps founders, entrepreneurs, and project sponsors translate an opportunity into clear decisions, supporting information, investor materials, and a disciplined process."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise
          </Link>
        }
      />
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="Common challenges"
            title="The opportunity may be clear to you—but not yet clear to an outside reviewer."
          />
          <Checklist
            items={[
              "The use of funds or amount is still evolving",
              "The business case lives across notes, models, and conversations",
              "The narrative is stronger than the supporting evidence",
              "There is no clear owner for materials, follow-up, and next steps",
              "Professional advisers have not yet been coordinated",
            ]}
          />
        </div>
      </section>
      <section className="section">
        <div className="container-page two-col">
          <div>
            <SectionHeading
              eyebrow="How Nevio helps"
              title="Connect the vision to investor-ready facts."
            />
            <Checklist
              items={[
                "Clarify the capital strategy and defined use of funds",
                "Organize proof points and supporting information",
                "Shape clear investor-facing materials",
                "Prepare for scrutiny and maintain follow-up discipline",
                "Coordinate the appropriate specialist work",
              ]}
            />
          </div>
          <div className="card elevated">
            <h2>Bring to the first conversation</h2>
            <Checklist
              items={[
                "A concise opportunity overview",
                "The approximate amount or range",
                "The intended use of funds",
                "Current stage and target timing",
                "Any existing materials",
              ]}
            />
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading eyebrow="Common questions" title="Begin with the essentials." />
          <FAQList limit={2} />
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="A structured route"
            title="Prepare the case before the conversation carries consequences."
          />
          <ProcessTimeline />
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
