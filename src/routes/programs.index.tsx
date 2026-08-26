import { createFileRoute, Link } from "@tanstack/react-router";
import { Sprout, Leaf, TreeDeciduous } from "lucide-react";

import { CheckList, CtaBand, PageHero, SectionHeading, programs } from "@/components/site/ui";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Tutoring Programs for Grades 2–12 | Ontario" },
      {
        name: "description",
        content:
          "Explore personalized tutoring programs for Grades 2–12 across Ontario. Designed for confidence, skills, and steady progress.",
      },
      { property: "og:title", content: "Tutoring Programs for Grades 2–12 | Ontario" },
      {
        property: "og:description",
        content:
          "SproutStart, SproutBoost, and SproutPrep — consistent support, clear structure, and steady improvement.",
      },
    ],
  }),
  component: ProgramsOverview,
});

const icons = [Sprout, Leaf, TreeDeciduous];

function ProgramsOverview() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Our Tutoring Programs"
        intro="Each program is designed around consistent support, clear structure, and steady improvement — not pressure or shortcuts."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
      </PageHero>

      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = icons[index]!;
            return (
              <div key={program.slug} className="card-soft flex flex-col">
                <span className="icon-tile">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h2 className="mt-5 text-xl">{program.name}</h2>
                <p className="mt-1 text-sm font-semibold text-accent">{program.grades}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {program.summary}
                </p>
                <Link to={program.slug} className="btn-base btn-secondary mt-6 self-start">
                  Learn More
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-page">
          <SectionHeading eyebrow="Included in every program" title="What Every Family Gets" />
          <div className="mt-8 max-w-3xl">
            <CheckList
              columns={2}
              items={[
                "Initial assessment",
                "Personalized learning plan",
                "Consistent weekly sessions",
                "Parent progress updates",
              ]}
            />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
