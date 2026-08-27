import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Compass, FileCheck2, UserRound } from "lucide-react";
import hero from "@/assets/northline-capital-path.webp";
import {
  FAQList,
  GlobalCTA,
  ProcessTimeline,
  ReadinessPanel,
  SectionHeading,
  ServiceGrid,
} from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Northline Capital Partners | Build a Stronger Case for Capital",
      "Capital-raising strategy, investor readiness, investor-facing materials, and disciplined process support for individuals and companies.",
      "/",
    ),
  component: Home,
});
function Home() {
  return (
    <>
      <section className="hero-home">
        <img
          src={hero}
          alt="Abstract structured pathway illuminated in navy and gold"
          width="1800"
          height="1013"
          fetchPriority="high"
        />
        <div className="container-page">
          <div className="measure">
            <p className="eyebrow">Northline Capital Partners</p>
            <h1>Build a stronger case for capital.</h1>
            <p className="hero-intro">
              Capital-raising strategy, investor readiness, investor-facing materials, and
              disciplined process support for individuals and companies pursuing a serious
              opportunity.
            </p>
            <div className="button-row">
              <Link to="/contact" className="btn btn-gold">
                Discuss Your Raise <ArrowRight />
              </Link>
              <Link
                to="/services"
                className="btn btn-outline"
                style={{ color: "white", borderColor: "rgba(255,255,255,.4)" }}
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Northline does"
            title="Preparation that makes every capital conversation more productive."
            intro="A credible raise depends on more than a deck. Strategy, evidence, materials, management alignment, and process discipline must tell the same story."
          />
          <ServiceGrid />
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we help"
            title="Support shaped around the opportunity—not a generic fundraising script."
          />
          <div className="card-grid three">
            <article className="card">
              <div className="icon-box">
                <UserRound />
              </div>
              <h3>Individuals and founders</h3>
              <p>
                Entrepreneurs and project sponsors with a defined opportunity that needs a
                structured capital case.
              </p>
              <Link to="/who-we-help/individuals" className="text-link">
                For individuals <ArrowRight />
              </Link>
            </article>
            <article className="card">
              <div className="icon-box">
                <Building2 />
              </div>
              <h3>Companies</h3>
              <p>
                Founder-led, private, and growth-stage organizations preparing for a consequential
                raise.
              </p>
              <Link to="/who-we-help/companies" className="text-link">
                For companies <ArrowRight />
              </Link>
            </article>
            <article className="card">
              <div className="icon-box">
                <Compass />
              </div>
              <h3>Defined opportunities</h3>
              <p>
                Serious plans with a clear commercial or strategic purpose—not speculative promises
                or guaranteed outcomes.
              </p>
              <Link to="/who-we-help" className="text-link">
                See who we help <ArrowRight />
              </Link>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page two-col">
          <SectionHeading
            eyebrow="Why raises lose momentum"
            title="A strong opportunity can still be weakened by preventable gaps."
            intro="Unclear use of funds, inconsistent numbers, thin supporting evidence, an unfocused narrative, or unmanaged follow-up can make serious review harder than it needs to be."
          />
          <div className="card elevated">
            <div className="icon-box">
              <FileCheck2 />
            </div>
            <h3>Northline brings the parts together.</h3>
            <p>
              We help leadership identify gaps early, establish owners and milestones, align the
              investor story with the underlying information, and prepare for the questions that
              follow.
            </p>
            <Link to="/capital-raise-readiness-checklist" className="text-link">
              Assess Your Readiness <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="A clear path from opportunity to an organized process."
            intro="The work advances through five practical stages. Scope depends on readiness, needs, and where the raise stands today."
          />
          <ProcessTimeline />
          <Link to="/process" className="btn btn-dark" style={{ marginTop: "2rem" }}>
            See How We Work
          </Link>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Working principles"
            title="Clear thinking. Credible information. Disciplined follow-through."
          />
          <div className="card-grid three">
            <article className="card">
              <h3>Start with the purpose</h3>
              <p>
                The raise should connect directly to specific business priorities, milestones, and
                decisions.
              </p>
            </article>
            <article className="card">
              <h3>Prepare before pressure</h3>
              <p>
                Readiness work is most valuable before outreach and diligence expose avoidable gaps.
              </p>
            </article>
            <article className="card">
              <h3>Communicate responsibly</h3>
              <p>
                Materials should be clear and persuasive without guarantees, unsupported claims, or
                blurred professional boundaries.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <ReadinessPanel />
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Insights"
            title="Practical guidance for a better-prepared raise."
          />
          <div className="card-grid three">
            {[
              [
                "Strategy",
                "How to Prepare for a Capital Raise Before Investor Outreach",
                "/insights/preparing-for-a-capital-raise",
              ],
              [
                "Readiness",
                "What Capital Partners Commonly Review Before a Serious Conversation",
                "/insights/what-investors-review",
              ],
              [
                "Process",
                "Building an Organized Capital-Raise Data Room",
                "/insights/data-room-checklist",
              ],
            ].map(([cat, title, to]) => (
              <article className="card" key={to}>
                <p className="eyebrow">{cat}</p>
                <h3>{title}</h3>
                <Link to={to} className="text-link">
                  Read insight <ArrowRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading eyebrow="Frequently asked" title="Start with clarity." />
          <FAQList limit={4} />
          <Link to="/faqs" className="btn btn-outline" style={{ marginTop: "2rem" }}>
            View All FAQs
          </Link>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
