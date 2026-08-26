import { Link } from "@tanstack/react-router";

import { CheckList, CtaBand, LeadMagnetBand, PageHero, SectionHeading } from "./ui";

export type ProgramPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  included: readonly string[];
  whoItsFor: readonly string[];
  startingAt: string;
};

export function ProgramPage({ content }: { content: ProgramPageContent }) {
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro}>
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
        <Link to="/pricing" className="btn-base btn-secondary">
          View Pricing
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="What’s included" title="Weekly Structure That Sticks" />
            <div className="mt-8">
              <CheckList items={content.included} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who it’s for" title="Families We Help Best" />
            <div className="mt-8">
              <CheckList items={content.whoItsFor} />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-page">
          <div className="card-soft bg-accent-soft md:p-10">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-3 text-2xl md:text-3xl">{content.startingAt}</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Monthly plans, not hourly bundles. Exact recommendations are provided during your free
              consultation.
            </p>
            <Link to="/pricing" className="btn-base btn-secondary mt-6">
              See pricing details
            </Link>
          </div>
        </div>
      </section>

      <LeadMagnetBand />
      <CtaBand />
    </>
  );
}
