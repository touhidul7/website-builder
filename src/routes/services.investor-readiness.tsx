import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { services } from "@/content/site";
export const Route = createFileRoute("/services/investor-readiness")({
  head: () =>
    pageHead(
      "Investor Readiness Advisory | Nevio Capital Partners",
      "Strengthen information, proof points, management alignment, and diligence preparation before investor outreach.",
      "/services/investor-readiness",
    ),
  component: () => <ServiceDetail service={services[1]!} />,
});
