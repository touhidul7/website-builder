import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, UserRound } from "lucide-react";
import {
  Breadcrumbs,
  GlobalCTA,
  PageHero,
  ReadinessPanel,
  SectionHeading,
} from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/who-we-help/")({
  head: () =>
    pageHead(
      "Who We Help | Northline Capital Partners",
      "Capital-raise support for founders, individual project sponsors, founder-led companies, and growth-stage organizations.",
      "/who-we-help",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Who We Help" }]} />
      <PageHero
        eyebrow="Who we help"
        title="Serious opportunities that need a stronger route to capital."
        intro="Northline works with individuals and companies that have a defined purpose for capital and want to prepare the opportunity and process with discipline."
      />
      <section className="section">
        <div className="container-page card-grid three">
          <article className="card">
            <div className="icon-box">
              <UserRound />
            </div>
            <h2>Individuals</h2>
            <p>
              Founders, entrepreneurs, and project sponsors turning a defined opportunity into an
              organized capital case.
            </p>
            <Link to="/who-we-help/individuals" className="text-link">
              Explore support <ArrowRight />
            </Link>
          </article>
          <article className="card">
            <div className="icon-box">
              <Building2 />
            </div>
            <h2>Companies</h2>
            <p>
              Founder-led, private, and growth-stage organizations aligning strategy, information,
              materials, and leadership.
            </p>
            <Link to="/who-we-help/companies" className="text-link">
              Explore support <ArrowRight />
            </Link>
          </article>
          <article className="card">
            <SectionHeading
              eyebrow="A practical fit"
              title="Defined purpose. Credible case. Willingness to prepare."
            />
            <p>
              Northline does not guarantee funding or a particular timeline. The best fit begins
              with a real business or project opportunity and a commitment to responsible
              preparation.
            </p>
          </article>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <ReadinessPanel />
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
