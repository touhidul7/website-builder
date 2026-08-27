import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, GlobalCTA, PageHero, SectionHeading } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Northline Capital Partners",
      "Northline helps align the business case, supporting information, communication, and process behind a capital raise.",
      "/about",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageHero
        eyebrow="About Northline"
        title="Serious capital conversations begin with aligned preparation."
        intro="Northline Capital Partners was built around a simple belief: a capital raise is strongest when the business case, supporting information, communication, and process are aligned before outreach begins."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise
          </Link>
        }
      />
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="Our purpose"
            title="Help leaders prepare a clearer, more credible path to capital."
            intro="Northline brings structure to decisions and workstreams that can otherwise become fragmented across leadership, finance, materials, advisers, and outreach."
          />
          <div className="card elevated">
            <h2>What guides the work</h2>
            <p className="body-large">
              Clarity about the purpose of capital. Credible information and assumptions. Consistent
              communication. Appropriate professional boundaries. Disciplined follow-through and
              honest checkpoints.
            </p>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Team information"
            title="People and credentials will be published only when approved."
            intro="The roadmap intentionally avoids invented biographies, credentials, locations, transaction history, or regulated-status claims. Verified team information can be added through the site's data-driven structure when available."
          />
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
