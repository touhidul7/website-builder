import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageSquareText, NotebookPen } from "lucide-react";
import { CtaBand, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

const cityNames: Record<string, string> = {
  toronto: "Toronto",
  "north-york": "North York",
  scarborough: "Scarborough",
  mississauga: "Mississauga",
  oakville: "Oakville",
};

function getCity(slug: string) {
  return (
    cityNames[slug] ??
    slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
}

export const Route = createFileRoute("/locations/$city")({
  head: ({ params }) => {
    const city = getCity(params.city);
    return {
      meta: [
        { title: `Tutor in ${city} | Personalized Tutoring` },
        {
          name: "description",
          content: `Personalized tutoring in ${city} for Grades 2–12. Consistent tutors, clear communication, and online support across Ontario.`,
        },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city: slug } = Route.useParams();
  const city = getCity(slug);
  return (
    <>
      <PageHero
        eyebrow={`${city}, Ontario`}
        title={`Personalized Tutoring in ${city}`}
        intro={`Calm, relationship-based academic support for Grades 2–12 in ${city}, with one consistent tutor and a clear learning plan.`}
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
        <Link to="/programs" className="btn-base btn-secondary">
          View Programs
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Local families"
            title={`Tutoring Support That Fits Life in ${city}`}
            intro="We start by understanding the student, then match for subject needs, personality, goals, and schedule. Sessions can take place online, making consistent support easier to maintain."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <IconCard
              icon={MapPin}
              title={`Serving ${city}`}
              body="Personalized support for local students from elementary through high school."
            />
            <IconCard
              icon={NotebookPen}
              title="A clear plan"
              body="Focused sessions, practical routines, and goals matched to the student."
            />
            <IconCard
              icon={MessageSquareText}
              title="Parent updates"
              body="Professional communication so you understand the focus and progress."
            />
          </div>
        </div>
      </section>
      <CtaBand title={`Find the Right Tutor in ${city}`} />
    </>
  );
}
