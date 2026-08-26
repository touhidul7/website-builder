import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Tutoring FAQs | My Tutor Sprout" },
      {
        name: "description",
        content:
          "Clear answers about tutor matching, schedules, pricing, parent updates, and personalized tutoring across Ontario.",
      },
    ],
  }),
  component: Faqs,
});

const faqs = [
  [
    "What happens during the free consultation?",
    "We listen to your concerns, learn about your child’s goals and schedule, and explain what kind of support may fit. There is no obligation to continue.",
  ],
  [
    "How do you match tutors and students?",
    "We consider academic needs, learning style, goals, personality, communication preferences, and availability. The aim is a stable relationship that can grow over time.",
  ],
  [
    "Will my child have the same tutor each week?",
    "Consistency is central to our approach. We prioritize one ongoing tutor so the student can build trust and the tutor can understand their progress.",
  ],
  [
    "How often are sessions held?",
    "Most families choose once- or twice-weekly support. We recommend frequency after learning about the student’s needs and workload.",
  ],
  [
    "How does pricing work?",
    "Tutoring is offered through monthly plans based on grade level and frequency. You receive a clear recommendation and price during the consultation before making a decision.",
  ],
  [
    "How will I know what my child is working on?",
    "Parents receive regular progress communication covering the current focus, observed growth, and useful next steps.",
  ],
  [
    "Do you support online tutoring?",
    "Yes. Online tutoring makes consistent support available to families across Ontario and can work well for students who prefer learning from home.",
  ],
] as const;

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="Clear Answers, Without the Sales Pitch"
        intro="Understand the process, expectations, and options before deciding what is right for your family."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
        <Link to="/contact" className="btn-base btn-secondary">
          Contact Us
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page mx-auto max-w-4xl space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="card-soft group" open={question === faqs[0][0]}>
              <summary className="cursor-pointer list-none pr-8 font-serif text-xl font-semibold text-primary marker:hidden">
                {question}
                <span
                  className="float-right text-accent transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-border pt-4 leading-relaxed text-muted-foreground">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
