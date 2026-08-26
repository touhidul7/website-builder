import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | My Tutor Sprout" },
      {
        name: "description",
        content: "How My Tutor Sprout handles information shared through this website.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" intro="Effective August 27, 2026" />
      <article className="section-y">
        <div className="container-page prose-legal">
          <h2>Information you provide</h2>
          <p>
            We may collect contact details, a child’s grade, scheduling preferences, learning
            concerns, and other information you choose to submit through our consultation, contact,
            or guide forms.
          </p>
          <h2>How information is used</h2>
          <p>
            Information is used to respond to inquiries, understand tutoring needs, arrange
            consultations, match appropriate support, deliver requested resources, and improve our
            services.
          </p>
          <h2>Sharing and retention</h2>
          <p>
            We do not sell personal information. Information may be shared with service providers or
            tutors only when needed to operate the service, communicate with you, or meet legal
            obligations. We retain information only as long as reasonably necessary for those
            purposes.
          </p>
          <h2>Children’s information</h2>
          <p>
            Parents and guardians should provide information about children through this website.
            Please avoid submitting sensitive records through general website forms.
          </p>
          <h2>Your choices</h2>
          <p>
            You may ask to access, correct, or delete personal information, or opt out of
            non-essential communications, subject to applicable legal requirements.
          </p>
          <h2>Contact</h2>
          <p>Questions or privacy requests can be sent to hello@mytutorsprout.ca.</p>
        </div>
      </article>
    </>
  );
}
