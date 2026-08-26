import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20";

export function ConsultationForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-soft bg-accent-soft" role="status" aria-live="polite">
        <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.5} />
        <h2 className="mt-5 text-2xl">Your consultation request is received.</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          We’ll personally follow up within 24 hours to clarify your child’s needs, explain the
          tutor-matching process, and arrange a time that works for your family.
        </p>
        <p className="mt-4 text-sm font-semibold text-primary">
          No obligation. No hard selling. Just clarity.
        </p>
        <button className="btn-base btn-secondary mt-6" onClick={() => setSubmitted(false)}>
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-soft" aria-label="Free parent consultation form">
      <div className={compact ? "grid gap-5" : "grid gap-5 sm:grid-cols-2"}>
        <label className="text-sm font-semibold text-primary">
          Parent or guardian name
          <input className={fieldClass} name="parentName" autoComplete="name" required />
        </label>
        <label className="text-sm font-semibold text-primary">
          Email address
          <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-sm font-semibold text-primary">
          Child’s grade
          <select className={fieldClass} name="grade" required defaultValue="">
            <option value="" disabled>
              Select a grade
            </option>
            {Array.from({ length: 11 }, (_, index) => index + 2).map((grade) => (
              <option key={grade} value={grade}>
                Grade {grade}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-semibold text-primary">
          Preferred schedule
          <select className={fieldClass} name="schedule" required defaultValue="">
            <option value="" disabled>
              Select a time
            </option>
            <option>Weekday afternoons</option>
            <option>Weekday evenings</option>
            <option>Weekends</option>
            <option>Flexible</option>
          </select>
        </label>
        <label className={`text-sm font-semibold text-primary ${compact ? "" : "sm:col-span-2"}`}>
          Main concern
          <textarea
            className={`${fieldClass} min-h-32 resize-y`}
            name="concern"
            placeholder="Tell us what your child is finding difficult and what you hope will improve."
            required
          />
        </label>
      </div>
      <button type="submit" className="btn-base btn-primary mt-6 w-full sm:w-auto">
        Request My Free Consultation
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        This is a calm, no-pressure conversation to understand your child’s needs.
      </p>
    </form>
  );
}
