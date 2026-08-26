import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/grades-6-10")({
  head: () => ({
    meta: [
      { title: "Middle School Tutoring Ontario | Grades 6–10" },
      {
        name: "description",
        content:
          "Personalized tutoring for Grades 6–10 across Ontario. Subject support, study skills, and confidence-building.",
      },
    ],
  }),
  component: () => (
    <ProgramPage
      content={{
        eyebrow: "SproutBoost · Grades 6–10",
        title: "SproutBoost Tutoring for Grades 6–10",
        intro:
          "Middle school is where gaps widen — or close. SproutBoost provides steady support that keeps students on track academically and emotionally.",
        included: [
          "Weekly 1:1 tutoring",
          "Personalized learning plan",
          "Study and organization support",
          "Monthly parent updates",
        ],
        whoItsFor: [
          "Students feeling overwhelmed",
          "Families seeking structure",
          "Parents who want long-term support",
        ],
        startingAt: "Programs start with a consistent monthly plan",
      }}
    />
  ),
});
