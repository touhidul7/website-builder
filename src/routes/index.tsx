import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  ClipboardList,
  MessagesSquare,
  Sprout,
  TreeDeciduous,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import heroImage from "@/assets/hero-tutoring.jpg";
import {
  CheckList,
  CtaBand,
  IconCard,
  LeadMagnetBand,
  Quote,
  SectionHeading,
  programs,
} from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Personalized Tutoring in Ontario | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Calm, personalized tutoring for Grades 2–12 across Ontario. Consistent tutors, clear communication, and steady academic progress. Book a free consultation.",
      },
      { property: "og:title", content: "Personalized Tutoring in Ontario | My Tutor Sprout" },
      {
        property: "og:description",
        content:
          "Calm, relationship-based academic support for Ontario families — without pressure or one-size-fits-all programs.",
      },
    ],
  }),
  component: Home,
});

const whoWeHelp = [
  {
    icon: BookOpen,
    title: "Grades 2–5",
    body: "Build strong foundations in reading, math, and learning routines.",
  },
  {
    icon: ClipboardList,
    title: "Grades 6–10",
    body: "Subject support, organization, and study skills that reduce stress.",
  },
  {
    icon: MessagesSquare,
    title: "Grades 9–12",
    body: "Exam preparation, accountability, and confidence through key transitions.",
  },
];

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    body: "We listen first — no pressure, no sales scripts.",
  },
  {
    number: "02",
    title: "Personalized Tutor Match",
    body: "Based on learning style, goals, and personality.",
  },
  {
    number: "03",
    title: "Ongoing Support & Communication",
    body: "Monthly updates and steady progress you can see.",
  },
];

const programIcons = [Sprout, Leaf, TreeDeciduous];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className="eyebrow">Ontario · Grades 2–12</p>
            <h1 className="mt-4 text-4xl leading-[1.1] md:text-5xl lg:text-[3.4rem]">
              Personalized Tutoring That Builds Confidence, Skills, and Steady Progress
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Calm, relationship-based academic support for Ontario families — without pressure,
              sales tactics, or one-size-fits-all programs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="btn-base btn-primary">
                Book a Free Parent Consultation
              </Link>
              <Link to="/programs" className="btn-base btn-secondary">
                View Our Programs
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={1.75} />
              No obligation. No hard selling. Just clarity.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
            <img
              src={heroImage}
              alt="Ontario tutor working one-on-one with student"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who we help"
            title="Support That Grows With Your Child"
            intro="Matched with one consistent tutor. Guided by a clear learning plan."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whoWeHelp.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why My Tutor Sprout */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why My Tutor Sprout"
              title="A Better Alternative to Tutoring Chains and Tutor Marketplaces"
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "Personalized learning plans — not standardized programs",
                  "Stable tutor relationships — not constant turnover",
                  "Clear parent communication — not vague updates",
                  "Skill development and confidence — not just homework help",
                ]}
              />
            </div>
            <p className="mt-8 font-serif text-xl leading-relaxed text-primary">
              Parents don’t want miracles. They want reliable progress they can trust.
            </p>
          </div>
          <div className="card-soft md:p-10">
            <p className="eyebrow">How it works</p>
            <h3 className="mt-3 text-2xl md:text-3xl">A Simple, Reassuring Process</h3>
            <ol className="mt-8 space-y-7">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-5">
                  <span className="font-serif text-lg font-semibold text-accent">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="text-lg">{step.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-muted-foreground">
              Most families stay with us long-term because the system works.
            </p>
            <Link to="/how-it-works" className="btn-base btn-secondary mt-6">
              See the full process
            </Link>
          </div>
        </div>
      </section>

      {/* Programs snapshot */}
      <section className="section-y">
        <div className="container-page">
          <SectionHeading
            eyebrow="Programs"
            title="Programs Designed for Long-Term Growth"
            intro="Every program includes an initial assessment, a personalized learning plan, consistent weekly sessions, and parent progress updates."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programs.map((program, index) => {
              const Icon = programIcons[index]!;
              return (
                <div key={program.slug} className="card-soft flex flex-col">
                  <span className="icon-tile">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 text-xl">{program.name}</h3>
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
          <div className="mt-10">
            <Link to="/programs" className="btn-base btn-primary">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Proof */}
      <section className="section-y bg-surface">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Trust & proof" title="Trusted by Ontario Families" />
            <div className="mt-8">
              <CheckList
                items={[
                  "Carefully selected tutors",
                  "Clear standards and expectations",
                  "Professional communication",
                  "Transparent pricing and policies",
                ]}
              />
            </div>
            <Link to="/reviews" className="btn-base btn-secondary mt-8">
              Read parent reviews
            </Link>
          </div>
          <Quote
            quote="We finally found tutoring that feels supportive, not stressful."
            author="Ontario Parent"
          />
        </div>
      </section>

      <LeadMagnetBand />
      <CtaBand />
    </>
  );
}
