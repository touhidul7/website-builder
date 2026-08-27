import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/disclaimer")({
  head: () =>
    pageHead(
      "Disclaimer | Nevio Capital Partners",
      "Important limitations regarding Nevio's general information and business-advisory services.",
      "/disclaimer",
    ),
  component: () => (
    <LegalPage
      title="Important Disclaimer"
      intro="Read these limitations before relying on website information or beginning a capital-raise discussion."
      sections={[
        {
          heading: "General business-advisory purpose",
          body: "Nevio provides general information and business-advisory support related to capital strategy, readiness, materials, and process. Content must be considered in the context of each opportunity.",
        },
        {
          heading: "No legal, tax, accounting, or investment advice",
          body: "Nevio does not provide legal, tax, accounting, or investment advice through this website. Visitors should obtain independent advice from appropriately qualified professionals.",
        },
        {
          heading: "No securities offer or solicitation",
          body: "Nothing on this site is an offer to sell, or a solicitation of an offer to buy, any security or financial product.",
        },
        {
          heading: "No guaranteed outcome",
          body: "Nevio does not guarantee capital, financing, introductions, closing, returns, timing, or any other outcome. Results depend on the opportunity, market conditions, diligence, decision processes, and other factors.",
        },
        {
          heading: "Regulated activities",
          body: "When work involves regulated activity, it must be performed by appropriately registered or licensed professionals. Nevio may coordinate with specialists but does not replace them.",
        },
        {
          heading: "Examples and future content",
          body: "Any past examples, if later added and approved, will be illustrative only and will not guarantee future results.",
        },
        {
          heading: "Independent advice",
          body: "Visitors are responsible for evaluating information and should obtain independent professional advice before making legal, tax, accounting, investment, financing, or transaction decisions.",
        },
      ]}
    />
  ),
});
