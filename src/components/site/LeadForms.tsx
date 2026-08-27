import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { businessConfig } from "@/config/business";
import { submitLead } from "@/integrations/ghl";
import { attribution, captureAttribution, track } from "@/lib/tracking";
const Field = ({
  label,
  name,
  required = false,
  children,
  error,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
}) => (
  <div className="field">
    <label htmlFor={name}>
      {label}
      {required ? " *" : ""}
    </label>
    {children}
    {error && <span className="field-error">{error}</span>}
  </div>
);
export function InquiryForm() {
  const nav = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  useEffect(() => {
    captureAttribution();
    track("form_view", { form_type: "capital-inquiry" });
  }, []);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    const data = Object.fromEntries(new FormData(form));
    if (data.website) {
      setSending(false);
      return;
    }
    const result = await submitLead("capital-inquiry", {
      ...data,
      ...attribution(),
      landing_page: location.href,
      referrer: document.referrer,
      submission_timestamp: new Date().toISOString(),
    });
    setSending(false);
    if (result.ok) {
      track("inquiry_form_submit", {
        raising_as: String(data.raising_as || ""),
        capital_range: String(data.capital_sought || ""),
        page_path: window.location.pathname,
      });
      nav({ to: "/thank-you" });
    } else {
      setError(
        result.message === "Online inquiry setup is being finalized." && !fallback
          ? "Online inquiry is currently unavailable. Please return after an approved contact method is published."
          : result.message || "Unable to send your inquiry.",
      );
    }
  }
  const fallback = Boolean(businessConfig.contactEmail || businessConfig.phone);
  return (
    <form
      className="form-card"
      onSubmit={submit}
      onFocusCapture={() => {
        if (!started) {
          setStarted(true);
          track("inquiry_form_start", { page_path: window.location.pathname });
        }
      }}
    >
      <div className="form-grid">
        <Field label="First name" name="first_name" required>
          <input id="first_name" name="first_name" required autoComplete="given-name" />
        </Field>
        <Field label="Last name" name="last_name" required>
          <input id="last_name" name="last_name" required autoComplete="family-name" />
        </Field>
        <Field label="Work email" name="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field label="Phone" name="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Field>
        <Field label="Company/organization" name="company">
          <input id="company" name="company" />
        </Field>
        <Field label="Role/title" name="role">
          <input id="role" name="role" />
        </Field>
        <Field label="Raising as" name="raising_as" required>
          <select id="raising_as" name="raising_as" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Individual/Founder</option>
            <option>Company</option>
            <option>Project Sponsor</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Capital sought" name="capital_sought">
          <select id="capital_sought" name="capital_sought" defaultValue="">
            <option value="">Select one</option>
            <option>Under $250K</option>
            <option>$250K–$1M</option>
            <option>$1M–$5M</option>
            <option>$5M–$20M</option>
            <option>$20M+</option>
            <option>Not yet determined</option>
          </select>
        </Field>
        <Field label="Primary use of funds" name="use_of_funds" required>
          <select id="use_of_funds" name="use_of_funds" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Growth/Expansion</option>
            <option>Acquisition</option>
            <option>Working Capital</option>
            <option>Project Financing</option>
            <option>New Market/Product</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Current stage" name="stage">
          <select id="stage" name="stage" defaultValue="">
            <option value="">Select one</option>
            <option>Planning</option>
            <option>Preparing Materials</option>
            <option>Beginning Outreach</option>
            <option>Active Conversations</option>
            <option>Diligence</option>
            <option>Other</option>
          </select>
        </Field>
        <Field label="Target timing" name="timing">
          <select id="timing" name="timing" defaultValue="">
            <option value="">Select one</option>
            <option>Immediately</option>
            <option>0–3 months</option>
            <option>3–6 months</option>
            <option>6–12 months</option>
            <option>Exploring</option>
          </select>
        </Field>
        <Field label="Website or LinkedIn URL" name="url">
          <input id="url" name="url" type="url" />
        </Field>
        <div className="field full">
          <label htmlFor="summary">Opportunity summary *</label>
          <textarea id="summary" name="summary" required maxLength={1500} />
          <small>Maximum 1,500 characters.</small>
        </div>
        <div className="field full">
          <label htmlFor="referral">How did you hear about Nevio?</label>
          <input id="referral" name="referral" />
        </div>
        <input
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="honeypot"
        />
        <div className="field full form-note">
          Do not include confidential financial records, personal identification, bank information,
          or sensitive non-public information in this form.
        </div>
        <label className="consent field full">
          <input type="checkbox" name="consent" required value="yes" />
          <span>
            I agree that Nevio may use this information to respond to my inquiry, subject to the{" "}
            <Link to="/privacy-policy" className="privacy-link">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>
      <button className="btn btn-gold form-submit" disabled={sending}>
        {sending ? "Sending…" : "Submit Confidential Inquiry"}
      </button>
      {error && (
        <p className="status-error" role="alert" aria-live="polite">
          {error}
          {fallback && <> Please use the approved contact method shown below.</>}
        </p>
      )}
      {error && fallback && <p>{businessConfig.contactEmail || businessConfig.phone}</p>}
    </form>
  );
}
export function ChecklistForm() {
  const nav = useNavigate();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    captureAttribution();
    track("form_view", { form_type: "readiness-checklist" });
  }, []);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setSending(true);
    setError("");
    const data = Object.fromEntries(new FormData(form));
    const result = await submitLead("readiness-checklist", { ...data, ...attribution() });
    setSending(false);
    if (result.ok) {
      track("checklist_form_submit", {
        lead_magnet: "readiness-checklist",
        page_path: window.location.pathname,
      });
      nav({ to: "/thank-you", search: { resource: "readiness-checklist" } });
    } else setError(result.message || "Unable to send your request.");
  }
  return (
    <form className="form-card" onSubmit={submit}>
      <div className="form-grid">
        <Field label="First name" name="first_name" required>
          <input id="first_name" name="first_name" required />
        </Field>
        <Field label="Last name" name="last_name" required>
          <input id="last_name" name="last_name" required />
        </Field>
        <Field label="Work email" name="email" required>
          <input id="email" name="email" type="email" required />
        </Field>
        <Field label="Company/organization" name="company">
          <input id="company" name="company" />
        </Field>
        <Field label="Raising as" name="raising_as" required>
          <select id="raising_as" name="raising_as" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Individual/Founder</option>
            <option>Company</option>
            <option>Project Sponsor</option>
            <option>Other</option>
          </select>
        </Field>
        <label className="consent field full">
          <input type="checkbox" name="consent" required value="yes" />
          <span>
            I agree that Nevio may respond and provide the resource, subject to the{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>.
          </span>
        </label>
      </div>
      <button className="btn btn-gold form-submit" disabled={sending}>
        {sending ? "Sending…" : "Get the Checklist"}
      </button>
      {error && (
        <p className="status-error" role="alert" aria-live="polite">
          {error}
        </p>
      )}
    </form>
  );
}
