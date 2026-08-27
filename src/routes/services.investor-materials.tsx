import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { services } from "@/content/site";
export const Route = createFileRoute("/services/investor-materials")({
  head: () =>
    pageHead(
      "Investor Materials | Northline Capital Partners",
      "Build a clear investment narrative, executive summary, pitch-deck content, FAQ, and data-room index.",
      "/services/investor-materials",
    ),
  component: () => <ServiceDetail service={services[2]!} />,
});
