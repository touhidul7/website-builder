import { createFileRoute } from "@tanstack/react-router";
import { Clock3, HeartHandshake, UserRoundCheck } from "lucide-react";
import { ConsultationForm } from "@/components/site/ConsultationForm";
import { IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Free Parent Consultation | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Tell us about your child and request a calm, no-pressure tutoring consultation. We’ll respond personally within 24 hours.",
      },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <>
      <PageHero
        eyebrow="Free parent consultation"
        title="Let’s Talk About What Your Child Actually Needs"
        intro="This is a calm, no-pressure conversation to understand your child’s needs. No obligation. No hard selling. Just clarity."
      />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="What happens next" title="A Clear, Reassuring First Step" />
            <div className="mt-8 grid gap-4">
              <IconCard
                icon={Clock3}
                title="Personal reply"
                body="We follow up within 24 hours to arrange your consultation."
              />
              <IconCard
                icon={HeartHandshake}
                title="We listen first"
                body="We clarify goals, concerns, preferences, and schedule without pressure."
              />
              <IconCard
                icon={UserRoundCheck}
                title="Tutor matching"
                body="If it feels right, we explain the recommended tutor match and timeline."
              />
            </div>
          </div>
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
