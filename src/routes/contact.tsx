import { createFileRoute } from "@tanstack/react-router";
import { InquiryForm } from "@/components/site/LeadForms";
import { PageHero } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Discuss Your Capital Raise | Northline Capital Partners",
      "Share a brief overview of your opportunity, raise purpose, stage, amount range, and timing to discuss potential fit with Northline.",
      "/contact",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <PageHero
        eyebrow="Discuss your raise"
        title="Start a confidential conversation."
        intro="Tell us what you are building, why you are raising, and where the opportunity stands today. Northline will review the information and respond to discuss potential fit."
      />
      <section className="section">
        <div className="container-page two-col">
          <div>
            <h2>A concise overview is enough to begin.</h2>
            <p className="body-large">
              Share the purpose, approximate amount, stage, and timing. Do not send sensitive or
              confidential records until an appropriate process has been agreed.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </>
  );
}
