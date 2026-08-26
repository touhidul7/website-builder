import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, HeartHandshake, MessagesSquare, RefreshCw } from "lucide-react";
import studyImage from "@/assets/student-study.jpg";
import { CtaBand, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/our-tutors")({
  head: () => ({
    meta: [
      { title: "Qualified Tutors in Ontario | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Meet our carefully selected tutors — trained, consistent, and focused on long-term student success.",
      },
    ],
  }),
  component: Tutors,
});

function Tutors() {
  return (
    <>
      <PageHero
        eyebrow="Tutor matching"
        title="Our Tutors"
        intro="We select tutors for communication skills, reliability, and care — not just grades or credentials."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={studyImage}
              alt="Tutor supporting a student during a focused learning session"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="A thoughtful match"
              title="The Right Fit Is More Than Subject Knowledge"
              intro="We look for tutors who can explain clearly, build trust, follow through, and adapt their approach without lowering expectations."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <IconCard
                icon={BadgeCheck}
                title="Carefully selected"
                body="Screened for subject knowledge, judgment, and professionalism."
              />
              <IconCard
                icon={MessagesSquare}
                title="Clear communicators"
                body="Able to connect with students and keep parents informed."
              />
              <IconCard
                icon={HeartHandshake}
                title="Relationship focused"
                body="Patient, encouraging, and committed to long-term growth."
              />
              <IconCard
                icon={RefreshCw}
                title="Consistent support"
                body="One stable tutor who learns how your child learns best."
              />
            </div>
          </div>
        </div>
      </section>
      <CtaBand title="Let’s Find a Tutor Your Child Can Trust" />
    </>
  );
}
