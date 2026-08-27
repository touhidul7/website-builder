import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Compass, FileCheck2, UserRound } from "lucide-react";
import hero from "@/assets/nevio-hero.webp";
import {
  FAQList,
  GlobalCTA,
  Checklist,
  ProcessTimeline,
  SectionHeading,
  ServiceGrid,
} from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Capital Raising Strategy & Support | Nevio Capital Partners",
      "Nevio helps individuals and companies prepare, position, and manage a disciplined capital-raising process. Start a confidential conversation.",
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
            <p className="eyebrow">Capital-raising strategy &amp; process support</p>
            <h1>Build a stronger case for capital.</h1>
            <p className="hero-intro">
              Nevio Capital Partners helps individuals and companies prepare for a raise,
              communicate the opportunity clearly, and move through the capital process with
              discipline.
            </p>
            <div className="button-row">
              <Link to="/contact" className="btn btn-gold">
                Start a Confidential Conversation <ArrowRight />
              </Link>
              <Link to="/process" className="btn btn-outline btn-on-dark">
                See How We Work
              </Link>
            </div>
            <div className="hero-trust" aria-label="Nevio principles">
              <span>Strategy first</span>
              <span>Investor-ready communication</span>
              <span>Focused execution</span>
            </div>
            <p className="hero-callout">
              Capital is most useful when the strategy is already clear.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="More than a pitch deck"
            title="A capital raise is a business process—not a single presentation."
            intro="Strategy, preparation, materials, outreach, follow-up, and diligence must operate as one coordinated process. A credible raise begins with a clear use of funds, supporting information, prepared conversations, and organized follow-through."
          />
          <ServiceGrid />
        </div>
      </section>
      <section className="section surface">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we help"
            title="Ambitious opportunities that need a credible path to capital."
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
            <h3>Nevio brings the parts together.</h3>
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
          <Link to="/process" className="btn btn-dark space-top">
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
          <div className="readiness-panel">
            <SectionHeading
              eyebrow="Readiness diagnostic"
              title="Are you ready to approach capital partners?"
              intro="A useful first check is whether five essential questions can be answered clearly."
            />
            <Checklist
              items={[
                "Is the use of funds defined?",
                "Are the amount and timing realistic?",
                "Does the financial story explain its assumptions?",
                "Are the supporting materials consistent?",
                "Is the team ready for diligence questions?",
              ]}
            />
            <Link to="/capital-raise-readiness-checklist" className="btn btn-dark">
              Assess Your Readiness
            </Link>
          </div>
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
          <Link to="/faqs" className="btn btn-outline space-top">
            View All FAQs
          </Link>
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
