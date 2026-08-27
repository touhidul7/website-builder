import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, GlobalCTA, PageHero, SectionHeading } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Nevio Capital Partners",
      "Learn about Nevio's practical, strategy-first approach to capital-raising preparation and process support.",
      "/about",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About" }]} />
      <PageHero
        eyebrow="About Nevio"
        title="Clear thinking before capital conversations."
        intro="Nevio Capital Partners was built around a simple belief: a capital raise is strongest when the business case, supporting information, communication, and process are aligned before outreach begins."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Contact Nevio
          </Link>
        }
      />
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="Our purpose"
            title="Help leaders prepare a clearer, more credible path to capital."
            intro="Nevio brings structure to decisions and workstreams that can otherwise become fragmented across leadership, finance, materials, advisers, and outreach."
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
            eyebrow="Our philosophy"
            title="Evidence over hype. Preparation before promotion."
            intro="Nevio works with leadership to align the strategy, supporting information, investor communication, and day-to-day process before outreach creates pressure."
          />
          <div className="card-grid three">
            <article className="card">
              <h3>Strategy first</h3>
              <p>
                Begin with the purpose, amount, timing, use of funds, decision criteria, and
                credible capital paths.
              </p>
            </article>
            <article className="card">
              <h3>Disciplined execution</h3>
              <p>
                Keep owners, milestones, materials, conversations, feedback, and diligence work
                visible and current.
              </p>
            </article>
            <article className="card">
              <h3>The right specialists</h3>
              <p>
                Coordinate legal, tax, accounting, and regulated work with appropriately qualified
                or licensed professionals.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="Our role"
            title="Business-advisory support across the raise."
            intro="Nevio helps leadership prepare and manage the business case and process. The work is collaborative, tailored to the opportunity, and deliberately conservative about outcomes."
          />
          <div className="card elevated">
            <h2>Responsible scope</h2>
            <p className="body-large">
              Nevio does not provide legal, tax, accounting, or investment advice; does not make a
              securities offer or solicitation; and does not guarantee funding, introductions,
              closing, returns, or any outcome.
            </p>
          </div>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
