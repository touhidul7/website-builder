import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, CalendarRange, MessageCircleQuestion } from "lucide-react";
import { CtaBand, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Tutoring Pricing Ontario | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Transparent monthly tutoring plans designed for long-term academic growth. View pricing options and book a consultation.",
      },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing and plans"
        title="Simple, Transparent Pricing"
        intro="We offer monthly tutoring plans, not hourly bundles — because progress comes from consistency."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
        <Link to="/faqs" className="btn-base btn-secondary">
          See FAQs
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Choose your rhythm"
            title="A Plan Built Around Your Child"
            intro="Pricing depends on grade level, learning goals, and session frequency. We recommend the lightest plan that can provide meaningful continuity."
            centered
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <IconCard
              icon={CalendarDays}
              title="Once per week"
              body="Consistent support for targeted skills, homework routines, and steady progress."
              meta="Monthly plan"
            />
            <IconCard
              icon={CalendarRange}
              title="Twice per week"
              body="More frequent guidance when gaps are wider, workload is heavier, or exams are approaching."
              meta="Monthly plan"
            />
          </div>
          <div className="mt-8 card-soft bg-accent-soft">
            <div className="flex gap-4">
              <MessageCircleQuestion
                className="mt-1 h-6 w-6 shrink-0 text-accent"
                strokeWidth={1.5}
              />
              <div>
                <h2 className="text-xl">Exact recommendations come after we listen.</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Your free consultation includes a clear plan and monthly price before you decide.
                  No obligation and no hard selling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Get a Clear Recommendation for Your Child" />
    </>
  );
}
