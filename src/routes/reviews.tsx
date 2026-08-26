import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircleHeart, TrendingUp, Users } from "lucide-react";
import { CtaBand, IconCard, PageHero, Quote, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Tutoring Reviews Ontario | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Read parent feedback and learn what supportive, consistent tutoring can feel like for Ontario families.",
      },
    ],
  }),
  component: Reviews,
});

function Reviews() {
  return (
    <>
      <PageHero
        eyebrow="Parent stories"
        title="What Parents Say"
        intro="Progress is more than a single grade. Families value calmer routines, stronger confidence, and a tutor their child trusts."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Quote
            quote="We finally found tutoring that feels supportive, not stressful."
            author="Ontario Parent"
          />
          <div>
            <SectionHeading
              eyebrow="What progress can look like"
              title="Steady Change Families Can Feel"
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <IconCard
                icon={MessageCircleHeart}
                title="Less tension"
                body="Learning conversations become calmer and more constructive."
              />
              <IconCard
                icon={TrendingUp}
                title="Stronger habits"
                body="Students build routines they can use beyond one assignment."
              />
              <IconCard
                icon={Users}
                title="Clearer communication"
                body="Parents know what is being worked on and why."
              />
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
