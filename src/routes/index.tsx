import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Compass, Handshake, ShieldCheck, Users, Waypoints } from "lucide-react";
import heroImage from "@/assets/northline-hero.webp";
import ownersImage from "@/assets/northline-owners.webp";
import { ConfirmNote, CtaBand, IconCard, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Northline Capital Partners | Patient Capital. Practical Partnership." },
    { name: "description", content: "Learn about Northline Capital Partners' long-term partnership approach and begin a confidential conversation." },
    { property: "og:title", content: "Northline Capital Partners" },
    { property: "og:description", content: "Patient capital. Practical partnership. Long-term value." },
  ] }), component: Home,
});

function Home() {
  return <>
    <section className="relative isolate overflow-hidden bg-primary text-white">
      <img src={heroImage} alt="Business owner and capital partner walking through an operating company" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary via-primary/90 to-primary/15" />
      <div className="container-page flex min-h-[650px] items-center py-20 md:min-h-[720px]">
        <div className="max-w-3xl"><p className="eyebrow">Northline Capital Partners</p><h1 className="mt-5 text-5xl leading-[1.04] text-white md:text-7xl">Patient capital.<br />Practical partnership.<br />Long-term value.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">[CONFIRM: approved value proposition describing what Northline does, who it serves, and where it invests.]</p><div className="mt-9 flex flex-wrap gap-3"><Link to="/contact" className="btn-base btn-primary">Start a Confidential Conversation <ArrowRight className="h-4 w-4" /></Link><Link to="/investment-approach" className="btn-base btn-on-dark">Explore Our Approach</Link></div></div>
      </div>
    </section>

    <section className="border-b border-border bg-surface"><div className="container-page py-10"><p className="mx-auto max-w-4xl text-center font-serif text-xl leading-8 text-primary md:text-2xl">We believe enduring businesses deserve a thoughtful transition, aligned stewardship, and a partnership built for what comes next.</p></div></section>

    <section className="section-y"><div className="container-page"><SectionHeading eyebrow="Who we partner with" title="Built Around Serious, Long-Term Conversations" intro="The website is designed to help owners and their trusted partners understand Northline's philosophy before sharing an opportunity." /><div className="mt-12 grid gap-6 md:grid-cols-3"><IconCard icon={Building2} title="Business Owners" body="Owners considering succession, continuity, or a long-term capital partner." /><IconCard icon={Users} title="Advisors & Intermediaries" body="Trusted professionals seeking a measured and responsive conversation for their clients." /><IconCard icon={Handshake} title="Partners" body="Operators, investors, and aligned partners exploring a thoughtful way to work together." /></div><div className="mt-8"><ConfirmNote>[CONFIRM: Northline's approved primary audiences and how each group should be described publicly.]</ConfirmNote></div></div></section>

    <section className="section-y bg-surface"><div className="container-page"><SectionHeading eyebrow="Partnership principles" title="A Calm, Disciplined Way to Build Value" /><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><IconCard icon={ShieldCheck} title="Confidentiality" body="Early conversations are handled with care and appropriate discretion." number="01" /><IconCard icon={Compass} title="Alignment" body="We begin by understanding priorities, people, and the owner's definition of a good outcome." number="02" /><IconCard icon={Waypoints} title="Continuity" body="We consider the systems, relationships, and culture that make a business durable." number="03" /><IconCard icon={Handshake} title="Partnership" body="The model is designed around clear expectations and practical collaboration." number="04" /></div></div></section>

    <section className="section-y"><div className="container-page grid items-center gap-14 lg:grid-cols-2"><div><SectionHeading eyebrow="Investment approach" title="Understand First. Then Build the Right Path." intro="Northline's process is intended to create clarity before commitment: learn the business, assess alignment, shape a thoughtful path, and support long-term value creation." /><Link to="/investment-approach" className="btn-base btn-secondary mt-8">Explore Our Approach <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-4 sm:grid-cols-2"><div className="card-soft"><p className="eyebrow">01</p><h3 className="mt-3 text-xl">Initial Conversation</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">A confidential discussion about the business, priorities, and potential fit.</p></div><div className="card-soft"><p className="eyebrow">02</p><h3 className="mt-3 text-xl">Shared Understanding</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">A focused review of alignment, context, and the important questions on both sides.</p></div><div className="card-soft"><p className="eyebrow">03</p><h3 className="mt-3 text-xl">Thoughtful Structure</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">A path shaped around verified facts and approved transaction priorities.</p></div><div className="card-soft"><p className="eyebrow">04</p><h3 className="mt-3 text-xl">Long-Term Partnership</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">A practical orientation toward continuity, operations, and enduring value.</p></div></div></div></section>

    <section className="section-y bg-secondary"><div className="container-page"><SectionHeading eyebrow="Investment criteria" title="A Clear Fit Starts With Clear Criteria" intro="Northline's public criteria must be approved before this section is finalized. The draft model preserves the decision structure without inventing thresholds." /><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{["Preferred industries","Investment geography","Company profile","Financial criteria"].map((item) => <div key={item} className="card-soft"><h3 className="text-lg">{item}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">[CONFIRM: approved public criteria.]</p></div>)}</div><Link to="/investment-criteria" className="btn-base btn-secondary mt-8">Review the Criteria Framework</Link></div></section>

    <section className="section-y"><div className="container-page grid items-center gap-14 lg:grid-cols-2"><div className="overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"><img src={ownersImage} alt="Business owner and operating partners discussing long-term continuity" className="aspect-[4/3] h-full w-full object-cover" loading="lazy" /></div><div><SectionHeading eyebrow="For business owners" title="Protect What Matters While Preparing for What Comes Next" intro="Succession decisions touch more than ownership. They affect employees, customers, family, culture, and the legacy built over time. Northline's owner conversation begins with those realities." /><Link to="/business-owners" className="btn-base btn-secondary mt-8">For Business Owners <ArrowRight className="h-4 w-4" /></Link></div></div></section>

    <section className="section-y bg-surface"><div className="container-page"><div className="max-w-4xl"><p className="eyebrow">Proof, responsibly handled</p><h2 className="mt-4 text-3xl leading-tight md:text-5xl">Verified Partnerships Only</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Portfolio companies, case studies, investment outcomes, and testimonials will not appear until they are verified and approved for public use. Until then, Northline's principles and process remain the appropriate foundation for trust.</p></div></div></section>
    <CtaBand />
  </>;
}
