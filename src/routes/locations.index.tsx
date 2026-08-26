import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Monitor, Route as RouteIcon } from "lucide-react";
import { CtaBand, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/locations/")({
  head: () => ({
    meta: [
      { title: "Tutoring Services Across Ontario | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Find calm, personalized tutoring for Grades 2–12 in Toronto, Mississauga, Oakville, North York, Scarborough, and across Ontario.",
      },
    ],
  }),
  component: Locations,
});

const cities = [
  ["toronto", "Toronto"],
  ["north-york", "North York"],
  ["scarborough", "Scarborough"],
  ["mississauga", "Mississauga"],
  ["oakville", "Oakville"],
] as const;

function Locations() {
  return (
    <>
      <PageHero
        eyebrow="Ontario tutoring"
        title="Tutoring Services Across Ontario"
        intro="Find a consistent tutor and personalized learning plan for your family — wherever you are in Ontario."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Find your area"
            title="Local Support, One Consistent Standard"
            centered
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map(([slug, city]) => (
              <Link
                key={slug}
                to="/locations/$city"
                params={{ city: slug }}
                className="card-soft group flex items-center gap-4 transition-transform hover:-translate-y-0.5"
              >
                <span className="icon-tile">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="font-serif text-lg font-semibold text-primary group-hover:text-accent">
                  {city}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <IconCard
              icon={Monitor}
              title="Online across Ontario"
              body="Meet your tutor from home with a reliable schedule and the same personalized learning plan."
            />
            <IconCard
              icon={RouteIcon}
              title="Built to grow with you"
              body="Our location pages connect families to the right program, consultation, and local support."
            />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
