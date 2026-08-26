import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/grades-2-5")({
  head: () => ({
    meta: [
      { title: "Elementary Tutoring Ontario | Grades 2–5" },
      {
        name: "description",
        content:
          "Personalized literacy and math tutoring for Grades 2–5 across Ontario, built around confidence, routines, and strong foundations.",
      },
    ],
  }),
  component: () => (
    <ProgramPage
      content={{
        eyebrow: "SproutStart · Grades 2–5",
        title: "SproutStart Tutoring for Grades 2–5",
        intro:
          "Early learning should feel encouraging, not overwhelming. SproutStart builds the literacy, math, and learning routines children need to grow with confidence.",
        included: [
          "Weekly 1:1 tutoring",
          "Personalized literacy and math plan",
          "Positive learning routines",
          "Monthly parent updates",
        ],
        whoItsFor: [
          "Children who need stronger foundations",
          "Students losing confidence in class",
          "Families who want calm, consistent support",
        ],
        startingAt: "Programs start with a consistent monthly plan",
      }}
    />
  ),
});
