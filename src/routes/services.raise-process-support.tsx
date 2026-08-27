import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { services } from "@/content/site";
export const Route = createFileRoute("/services/raise-process-support")({
  head: () =>
    pageHead(
      "Raise Process Support | Northline Capital Partners",
      "Bring structure to capital-partner criteria, outreach preparation, conversations, feedback, and follow-up.",
      "/services/raise-process-support",
    ),
  component: () => <ServiceDetail service={services[3]!} />,
});
