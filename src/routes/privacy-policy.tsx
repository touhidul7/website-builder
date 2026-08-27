import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead(
      "Privacy Policy | Northline Capital Partners",
      "Learn how Northline may collect, use, protect, and retain website and inquiry information.",
      "/privacy-policy",
    ),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="This draft explains how information submitted through the Northline website may be handled."
      sections={[
        {
          heading: "Information collected",
          body: "Northline may collect information you provide through inquiry and resource forms, including names, business contact details, organization information, raise context, and consent records. The site may also receive basic device, referral, page, and campaign information.",
        },
        {
          heading: "How information is used",
          body: "Information may be used to respond to inquiries, assess potential fit, provide requested resources, maintain business records, improve the website, protect the service, and meet applicable obligations.",
        },
        {
          heading: "Forms, analytics, and cookies",
          body: "Forms may be delivered through approved service providers. Analytics may record non-sensitive events such as page views, CTA interactions, and form completion status. Cookies or similar technologies may support these functions where configured.",
        },
        {
          heading: "Service providers",
          body: "Northline may use providers for hosting, forms, customer relationship management, communications, analytics, and security. Providers should receive only information reasonably needed for their role and handle it under appropriate terms.",
        },
        {
          heading: "Retention and safeguards",
          body: "Information should be retained only as long as reasonably needed for the described purposes, recordkeeping, security, or legal needs. Reasonable administrative and technical safeguards may be used, but no internet transmission or storage method is completely secure.",
        },
        {
          heading: "Rights and choices",
          body: "You may request access, correction, or deletion of information, or ask to stop non-essential communications, subject to verification and any legitimate retention needs. Specific rights may depend on location and applicable law.",
        },
        {
          heading: "Third-party links",
          body: "Links to third-party sites are provided for convenience. Their privacy practices and content are controlled by those third parties.",
        },
        {
          heading: "Changes and contact",
          body: "This notice may be updated as the website and practices develop. A verified contact method will be displayed when approved; until then, do not publish unverified contact details.",
        },
      ]}
    />
  ),
});
