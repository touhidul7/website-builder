import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpenCheck, ClipboardCheck, SearchCheck } from "lucide-react";
import { CtaBand, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Parent Resources & Learning Guides | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Calm, practical learning resources for Ontario parents, including study habits, skill-gap guidance, and questions to ask a tutor.",
      },
    ],
  }),
  component: Resources,
});

function Resources() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Parent Resources & Learning Guides"
        intro="Practical, low-pressure guidance to help you understand learning gaps, strengthen routines, and choose the right support."
      >
        <Link to="/free-learning-plan" className="btn-base btn-primary">
          Download the Free Parent Guide
        </Link>
        <Link to="/book" className="btn-base btn-secondary">
          Book a Consultation
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Start here"
            title="Clear Guidance for the Questions Parents Ask Most"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <IconCard
              icon={SearchCheck}
              title="How to Spot Skill Gaps Early"
              body="Look beyond one difficult assignment and identify patterns in confidence, recall, and independence."
            />
            <IconCard
              icon={BookOpenCheck}
              title="What Tutoring Should Feel Like"
              body="Supportive and focused — with clear goals, a stable relationship, and progress that is understandable."
            />
            <IconCard
              icon={ClipboardCheck}
              title="Questions to Ask Any Tutor"
              body="Explore fit, communication, planning, expectations, and how progress will be reviewed."
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
