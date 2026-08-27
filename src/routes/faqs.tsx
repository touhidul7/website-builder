import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, FAQList, GlobalCTA, PageHero } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
import { faqs } from "@/content/site";
export const Route = createFileRoute("/faqs")({
  head: () =>
    pageHead(
      "Capital Raising FAQs | Northline Capital Partners",
      "Answers about Northline's capital-raising strategy, readiness, materials, process support, scope, and initial conversations.",
      "/faqs",
    ),
  component: Page,
});
function Page() {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
  return (
    <>
      <Breadcrumbs items={[{ label: "FAQs" }]} />
      <PageHero
        eyebrow="Frequently asked questions"
        title="Start with clarity."
        intro="Understand Northline's scope, what preparation usually involves, and what an initial conversation requires."
      />
      <section className="section">
        <div className="container-page">
          <FAQList />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
          />
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
