import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { PageHero } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/thank-you")({
  validateSearch: z.object({ resource: z.string().optional() }),
  head: () =>
    pageHead(
      "Thank You | Nevio Capital Partners",
      "Your information has been received by Nevio Capital Partners.",
      "/thank-you",
      true,
    ),
  component: Page,
});
function Page() {
  const { resource } = Route.useSearch();
  return (
    <>
      <PageHero
        eyebrow="Next steps"
        title="Thank you. Your inquiry has been received."
        intro="Nevio will review the information you shared and respond regarding potential fit and next steps. Please do not send sensitive or confidential records until an appropriate process has been agreed."
        actions={
          resource === "readiness-checklist" ? (
            <Link to="/resources/readiness-checklist" className="btn btn-gold">
              Access the Checklist
            </Link>
          ) : (
            <>
              <Link to="/process" className="btn btn-gold">
                See the Process
              </Link>
              <Link to="/insights" className="btn btn-outline">
                Read Insights
              </Link>
            </>
          )
        }
      />
    </>
  );
}
