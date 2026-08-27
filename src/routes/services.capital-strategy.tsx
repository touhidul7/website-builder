import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { services } from "@/content/site";
export const Route = createFileRoute("/services/capital-strategy")({
  head: () =>
    pageHead(
      "Capital Strategy | Northline Capital Partners",
      "Define the purpose, amount, timing, use of funds, and decision framework for a capital raise.",
      "/services/capital-strategy",
    ),
  component: () => <ServiceDetail service={services[0]!} />,
});
