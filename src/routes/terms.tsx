import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead(
      "Terms of Use | Northline Capital Partners",
      "Terms governing use of the Northline Capital Partners website and its informational content.",
      "/terms",
    ),
  component: () => (
    <LegalPage
      title="Terms of Use"
      intro="These draft terms govern use of the Northline website and require review before publication."
      sections={[
        {
          heading: "Informational purpose",
          body: "The website provides general information about Northline and capital-raise business-advisory services. Content may be changed or withdrawn and is not a complete statement of any engagement scope.",
        },
        {
          heading: "No professional advice",
          body: "Nothing on the site is legal, tax, accounting, or investment advice. Visitors should obtain advice from appropriately qualified professionals for their circumstances.",
        },
        {
          heading: "No offer, solicitation, or funding guarantee",
          body: "Website content is not an offer to sell or solicitation to buy securities. Northline does not guarantee capital, financing, introductions, closing, returns, timing, or any outcome.",
        },
        {
          heading: "Acceptable use",
          body: "You may not misuse the site, attempt unauthorized access, interfere with operation, transmit harmful code, scrape content unlawfully, impersonate another person, or submit information you are not authorized to share.",
        },
        {
          heading: "Intellectual property",
          body: "Site content, design, branding, and original materials are owned by or licensed to Northline and may not be reproduced or exploited beyond lawful personal or internal business use without permission.",
        },
        {
          heading: "Third-party links",
          body: "Third-party links do not imply endorsement. Northline is not responsible for third-party availability, content, security, or practices.",
        },
        {
          heading: "Disclaimers and limitation",
          body: "The site is provided on an as-available basis. To the extent permitted by applicable law and subject to counsel, warranties are disclaimed and liability may be limited. Final language must be reviewed for the relevant jurisdiction.",
        },
        {
          heading: "Changes and contact",
          body: "These terms may change as the service develops. Continued use after publication of changes may constitute acceptance. A verified contact method will be displayed when approved.",
        },
      ]}
    />
  ),
});
