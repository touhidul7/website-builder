import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { services } from "@/content/site";
export const Route = createFileRoute("/services/transaction-coordination")({
  head: () =>
    pageHead(
      "Transaction Coordination | Northline Capital Partners",
      "Coordinate diligence information, decisions, professional advisers, timelines, and closing readiness.",
      "/services/transaction-coordination",
    ),
  component: () => <ServiceDetail service={services[4]!} />,
});
