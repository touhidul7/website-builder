import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, UserCheck, LineChart } from "lucide-react";

import studyImage from "@/assets/student-study.jpg";
import { CtaBand, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How Our Tutoring Works | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Learn how My Tutor Sprout delivers calm, personalized tutoring with consistent tutors and clear communication for Ontario families.",
      },
      { property: "og:title", content: "How Our Tutoring Works | My Tutor Sprout" },
      {
        property: "og:description",
        content:
          "A simple three-step process: free parent consultation, tutor matching and learning plan, then ongoing weekly support.",
      },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  {
    icon: CalendarCheck,
    title: "Step 1: Free Parent Consultation",
    body: "We learn about your child, concerns, goals, and schedule.",
  },
  {
    icon: UserCheck,
    title: "Step 2: Tutor Matching & Learning Plan",
    body: "Your child is matched with a tutor who fits academically and personally.",
  },
  {
    icon: LineChart,
    title: "Step 3: Ongoing Support",
    body: "Weekly sessions, steady routines, and regular parent updates.",
  },
];

function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="Our process"
        title="How Our Tutoring Works"
        intro="We’ve designed My Tutor Sprout to feel calm, professional, and supportive — for both parents and students."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Parent Consultation
        </Link>
        <Link to="/programs" className="btn-base btn-secondary">
          View Our Programs
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page">
          <SectionHeading eyebrow="Step by step" title="Three Steps, Clearly Explained" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <IconCard key={step.title} {...step} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={studyImage}
              alt="Personalized tutoring session with consistent tutor"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="What makes this work" title="Consistency Is the Difference" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Students learn best when they feel safe, understood, and supported — not rushed or
              judged.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              That’s why we focus on long-term relationships, not quick fixes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/our-tutors" className="btn-base btn-secondary">
                Meet our tutors
              </Link>
              <Link to="/pricing" className="btn-base btn-secondary">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
