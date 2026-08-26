import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/grades-9-12")({
  head: () => ({
    meta: [
      { title: "High School Tutoring Ontario | Grades 9–12" },
      {
        name: "description",
        content:
          "Personalized high school tutoring across Ontario with exam preparation, accountability, and support through key transitions.",
      },
    ],
  }),
  component: () => (
    <ProgramPage
      content={{
        eyebrow: "SproutPrep · Grades 9–12",
        title: "SproutPrep Tutoring for Grades 9–12",
        intro:
          "High school asks students to manage more complex work and greater independence. SproutPrep adds clear accountability, focused exam preparation, and steady guidance.",
        included: [
          "Weekly 1:1 tutoring",
          "Course and exam preparation plan",
          "Accountability and time-management support",
          "Monthly parent updates",
        ],
        whoItsFor: [
          "Students preparing for tests and exams",
          "Teens who need stronger routines",
          "Families navigating academic transitions",
        ],
        startingAt: "Programs start with a consistent monthly plan",
      }}
    />
  ),
});
