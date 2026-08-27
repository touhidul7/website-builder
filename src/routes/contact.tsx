import { createFileRoute } from "@tanstack/react-router";
import { EyeOff, MessageSquareText, ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/site/InquiryForm";
import { ConfirmNote, IconCard, PageHero, SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [{ title: "Contact | Northline Capital Partners" }, { name: "description", content: "Start a confidential conversation with Northline Capital Partners using a short business inquiry form." }] }), component: Contact });

function Contact() { return <><PageHero eyebrow="Contact" title="Start a Confidential Conversation" intro="Share a brief, non-sensitive overview so Northline can understand the context and determine an appropriate next step." />
  <section className="section-y"><div className="container-page grid gap-12 lg:grid-cols-[0.78fr_1.22fr]"><div><SectionHeading eyebrow="A measured first step" title="Clarity Without Unnecessary Exposure" /><div className="mt-8 grid gap-4"><IconCard icon={EyeOff} title="Keep it high level" body="Do not upload highly sensitive documents or non-public financial information." /><IconCard icon={ShieldCheck} title="Reviewed by Northline" body="The inquiry should route to an internal recipient approved before launch." /><IconCard icon={MessageSquareText} title="Clear follow-up" body="[CONFIRM: approved response-time promise and preferred follow-up process.]" /></div><div className="mt-6"><ConfirmNote>[CONFIRM: official email, phone, office or service geography, and internal form recipient.]</ConfirmNote></div></div><InquiryForm /></div></section>
  </>; }
