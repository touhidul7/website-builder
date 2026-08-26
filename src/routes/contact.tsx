import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MessageSquare } from "lucide-react";
import { IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact My Tutor Sprout | Ontario Tutoring" },
      {
        name: "description",
        content:
          "Contact My Tutor Sprout with a tutoring question. We provide a personal, low-pressure response for Ontario families.",
      },
    ],
  }),
  component: Contact,
});

const inputClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20";

function Contact() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="How Can We Help?"
        intro="Send a question and we’ll respond personally. If you are ready to discuss your child’s needs, the free consultation is the best place to start."
      >
        <Link to="/book" className="btn-base btn-primary">
          Book a Free Consultation
        </Link>
      </PageHero>
      <section className="section-y">
        <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              eyebrow="A low-pressure first step"
              title="Reach Out in the Way That Suits You"
            />
            <div className="mt-8 grid gap-4">
              <IconCard icon={Mail} title="Email us" body="hello@mytutorsprout.ca" />
              <IconCard
                icon={MessageSquare}
                title="Personal response"
                body="We aim to reply within one business day with a clear next step."
              />
            </div>
          </div>
          {sent ? (
            <div className="card-soft h-fit bg-accent-soft" role="status">
              <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
              <h2 className="mt-5 text-2xl">Thanks for reaching out.</h2>
              <p className="mt-3 text-muted-foreground">
                Your message has been received. We’ll respond personally within one business day.
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="card-soft h-fit">
              <h2 className="text-2xl">Send Us a Message</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-semibold text-primary">
                  Name
                  <input name="name" required autoComplete="name" className={inputClass} />
                </label>
                <label className="text-sm font-semibold text-primary">
                  Email
                  <input
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                  />
                </label>
                <label className="text-sm font-semibold text-primary sm:col-span-2">
                  How can we help?
                  <textarea name="message" required className={`${inputClass} min-h-36 resize-y`} />
                </label>
              </div>
              <button type="submit" className="btn-base btn-primary mt-6">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
