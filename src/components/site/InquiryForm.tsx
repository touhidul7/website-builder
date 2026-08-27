import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  if (submitted) return <div className="card-soft bg-accent-soft" role="status" aria-live="polite"><CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} /><h2 className="mt-5 text-2xl">Thank you for reaching out.</h2><p className="mt-4 leading-7 text-muted-foreground">Your inquiry has reached the draft thank-you state. [CONFIRM: approved response-time expectation and internal notification recipient.]</p><p className="mt-4 text-sm leading-6 text-primary">Please do not send highly sensitive documents or non-public financial information through this public form.</p><button type="button" className="btn-base btn-secondary mt-6" onClick={() => setSubmitted(false)}>Submit another inquiry</button></div>;

  return <form onSubmit={submit} className="card-soft" aria-label="Northline confidential inquiry form">
    <div className="grid gap-5 sm:grid-cols-2">
      <label className="text-sm font-semibold text-primary">Full name<input name="name" autoComplete="name" required className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Business email<input name="email" type="email" autoComplete="email" required className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Phone <span className="font-normal text-muted-foreground">(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="Include country code if applicable" className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Company<input name="company" autoComplete="organization" required className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Role / title<input name="role" autoComplete="organization-title" required className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Inquiry type<select name="inquiryType" required defaultValue="" className="form-control"><option value="" disabled>Select one</option><option>Business owner</option><option>Advisor / intermediary</option><option>Investor / partner</option><option>Other</option></select></label>
      <label className="text-sm font-semibold text-primary">Industry <span className="font-normal text-muted-foreground">(optional)</span><input name="industry" className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Company location <span className="font-normal text-muted-foreground">(optional)</span><input name="location" placeholder="City / region / country" className="form-control" /></label>
      <label className="text-sm font-semibold text-primary">Preferred contact method <span className="font-normal text-muted-foreground">(optional)</span><select name="preferredContact" defaultValue="" className="form-control"><option value="">No preference</option><option>Email</option><option>Phone</option></select></label>
      <label className="text-sm font-semibold text-primary sm:col-span-2">Short message<textarea name="message" required className="form-control min-h-36 resize-y" placeholder="Briefly describe the business and reason for reaching out. Do not include confidential attachments or sensitive financial information." /></label>
      <label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:col-span-2"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-[#C39A4B]" /><span>[CONFIRM: approved privacy and contact-consent language.] I understand that Northline may contact me regarding this inquiry.</span></label>
    </div>
    <button type="submit" className="btn-base btn-primary mt-7 w-full sm:w-auto">Start a Conversation</button>
    <p className="mt-5 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">Information submitted through this form will be reviewed by Northline. Please do not send highly sensitive documents or non-public financial information through this form. Legal approval is required before publishing.</p>
  </form>;
}
