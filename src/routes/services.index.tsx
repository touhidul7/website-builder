import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs, GlobalCTA, PageHero, ServiceGrid } from "@/components/site/ui";
import { pageHead } from "@/components/seo";
export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead(
      "Capital Raising Services | Northline Capital Partners",
      "Strategy, readiness, investor materials, raise-process support, transaction coordination, and post-raise planning.",
      "/services",
    ),
  component: Page,
});
function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />
      <PageHero
        eyebrow="Services"
        title="A disciplined foundation for the full capital-raise process."
        intro="Northline helps shape the strategy, information, materials, management alignment, and operating discipline needed to pursue capital with greater clarity."
        actions={
          <Link to="/contact" className="btn btn-gold">
            Discuss Your Raise
          </Link>
        }
      />
      <section className="section">
        <div className="container-page">
          <ServiceGrid />
        </div>
      </section>
      <GlobalCTA />
    </>
  );
}
