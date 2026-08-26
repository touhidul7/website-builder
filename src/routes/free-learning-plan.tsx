import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";
import { CheckList, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/free-learning-plan")({
  head: () => ({
    meta: [
      { title: "Free Learning Guide for Parents | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Download The Calm Parent’s Guide to Supporting Your Child’s Learning, created for Ontario parents of students in Grades 2–10.",
      },
    ],
  }),
  component: LearningPlan,
});

const inputClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";

function LearningPlan() {
  const [ready, setReady] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReady(true);
  }
  return (
    <>
      <PageHero
        eyebrow="Free parent guide"
        title="The Calm Parent’s Guide to Supporting Your Child’s Learning"
        intro="A practical guide for Ontario parents in Grades 2–10 — without pressure, guilt, or burnout."
      />
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Inside the guide"
              title="Know What to Notice and What to Ask"
            />
            <div className="mt-8">
              <CheckList
                items={[
                  "How to spot skill gaps early",
                  "What tutoring should — and shouldn’t — feel like",
                  "Grade-transition checklists",
                  "Questions to ask any tutor",
                ]}
              />
            </div>
            <div className="mt-10 aspect-[4/3] rounded-2xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-card)]">
              <BookOpen className="h-10 w-10 text-accent" strokeWidth={1.5} />
              <p className="mt-8 text-sm font-bold tracking-[0.14em] text-accent uppercase">
                Free guide preview
              </p>
              <h2 className="mt-3 max-w-md text-3xl leading-tight text-primary-foreground">
                Calmer Support. Clearer Next Steps.
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/75">
                A concise parent resource from My Tutor Sprout.
              </p>
            </div>
          </div>
          {ready ? (
            <div className="card-soft h-fit bg-accent-soft" role="status">
              <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl">Your guide request is ready.</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Thank you. Download your copy now and keep it handy for teacher or tutor
                conversations.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="/calm-parents-guide.pdf" download className="btn-base btn-primary">
                  Download the PDF Guide
                </a>
                <Link to="/book" className="btn-base btn-secondary">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="card-soft h-fit">
              <h2 className="text-2xl">Download the Free Guide</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Enter your details and we’ll send the guide directly to you.
              </p>
              <label className="mt-6 block text-sm font-semibold text-primary">
                Your name
                <input name="name" required autoComplete="name" className={inputClass} />
              </label>
              <label className="mt-5 block text-sm font-semibold text-primary">
                Email address
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className={inputClass}
                />
              </label>
              <label className="mt-5 block text-sm font-semibold text-primary">
                Child’s grade
                <select name="grade" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a grade
                  </option>
                  {Array.from({ length: 9 }, (_, i) => i + 2).map((g) => (
                    <option key={g}>Grade {g}</option>
                  ))}
                </select>
              </label>
              <button className="btn-base btn-primary mt-6 w-full" type="submit">
                Unlock Free Guide
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Helpful learning guidance and occasional My Tutor Sprout updates. Unsubscribe
                anytime.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
