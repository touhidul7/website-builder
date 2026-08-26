import { Link } from "@tanstack/react-router";
import { Sprout, Mail, MapPin } from "lucide-react";

const groups = [
  {
    title: "Programs",
    links: [
      { to: "/programs", label: "All Programs" },
      { to: "/programs/grades-2-5", label: "SproutStart (2–5)" },
      { to: "/programs/grades-6-10", label: "SproutBoost (6–10)" },
      { to: "/programs/grades-9-12", label: "SproutPrep (9–12)" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/how-it-works", label: "How It Works" },
      { to: "/our-tutors", label: "Our Tutors" },
      { to: "/reviews", label: "Reviews" },
      { to: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { to: "/resources", label: "Parent Resources" },
      { to: "/free-learning-plan", label: "Free Parent Guide" },
      { to: "/locations", label: "Locations" },
      { to: "/faqs", label: "FAQs" },
      { to: "/contact", label: "Contact" },
      { to: "/book", label: "Book a Consultation" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="icon-tile !h-9 !w-9">
              <Sprout className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="font-serif text-lg font-semibold text-primary">My Tutor Sprout</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Calm, relationship-based tutoring for Ontario families. Consistent tutors, personalized
            plans, and steady progress you can see.
          </p>
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" strokeWidth={1.75} />
              Serving families across Ontario
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" strokeWidth={1.75} />
              hello@mytutorsprout.ca
            </p>
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-bold tracking-wide text-primary uppercase">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} My Tutor Sprout. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
