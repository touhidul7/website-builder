import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | My Tutor Sprout" },
      { name: "description", content: "Terms governing use of the My Tutor Sprout website." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" intro="Effective August 27, 2026" />
      <article className="section-y">
        <div className="container-page prose-legal">
          <h2>Website information</h2>
          <p>
            This website provides general information about My Tutor Sprout and its tutoring
            services. Website content is not a guarantee of a particular academic result.
          </p>
          <h2>Consultations and services</h2>
          <p>
            A consultation request does not create a tutoring agreement. Service details,
            availability, scheduling, fees, cancellation terms, and responsibilities are confirmed
            separately before tutoring begins.
          </p>
          <h2>Acceptable use</h2>
          <p>
            You may use this website for lawful personal purposes. You may not interfere with its
            operation, attempt unauthorized access, misuse forms, or copy content in a way that
            infringes applicable rights.
          </p>
          <h2>External services</h2>
          <p>
            The website may use or link to third-party services. Their availability and privacy
            practices are governed by their own terms.
          </p>
          <h2>Changes</h2>
          <p>
            These terms may be updated as the website and services evolve. The effective date above
            indicates the latest published version.
          </p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to hello@mytutorsprout.ca.</p>
        </div>
      </article>
    </>
  );
}
