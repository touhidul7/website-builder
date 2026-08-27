import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { services } from "@/content/site";
export const Route = createFileRoute("/services/post-raise-planning")({
  head: () =>
    pageHead(
      "Post-Raise Planning & Capital Deployment | Nevio",
      "Plan use of funds, priorities, KPIs, governance, reporting, and investor communication after a raise.",
      "/services/post-raise-planning",
    ),
  component: () => <ServiceDetail service={services[5]!} />,
});
