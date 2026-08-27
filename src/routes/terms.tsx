import { createFileRoute } from "@tanstack/react-router";
import { ConfirmNote, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/terms")({ head: () => ({ meta: [{ title: "Terms of Use | Northline Capital Partners" }, { name: "description", content: "Draft terms page for Northline Capital Partners pending approved legal text." }, { name: "robots", content: "noindex, nofollow" }] }), component: Terms });

function Terms() { return <><PageHero eyebrow="Legal draft" title="Terms of Use" intro="This page is intentionally held as a draft until Northline's approved legal text is supplied." /><section className="section-y"><div className="container-page"><div className="max-w-3xl"><ConfirmNote>[CONFIRM: approved terms, entity details, website-use rules, disclaimers, liability language, governing law, and legal contact.]</ConfirmNote><p className="mt-8 leading-8 text-muted-foreground">Do not publish this placeholder page or enable indexing until legal review is complete.</p></div></div></section></>; }
