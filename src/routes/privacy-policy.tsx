import { createFileRoute } from "@tanstack/react-router";
import { ConfirmNote, PageHero } from "@/components/site/ui";

export const Route = createFileRoute("/privacy-policy")({ head: () => ({ meta: [{ title: "Privacy Policy | Northline Capital Partners" }, { name: "description", content: "Draft privacy-policy page for Northline Capital Partners pending approved legal text." }, { name: "robots", content: "noindex, nofollow" }] }), component: Privacy });

function Privacy() { return <><PageHero eyebrow="Legal draft" title="Privacy Policy" intro="This page is intentionally held as a draft until Northline's approved legal text is supplied." /><section className="section-y"><div className="container-page"><div className="max-w-3xl"><ConfirmNote>[CONFIRM: approved privacy policy, effective date, entity details, data practices, service providers, retention, rights, jurisdiction, and privacy contact.]</ConfirmNote><p className="mt-8 leading-8 text-muted-foreground">Do not publish this placeholder page or enable indexing until legal review is complete.</p></div></div></section></>; }
