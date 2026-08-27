import { businessConfig } from "@/config/business";
export interface LeadSubmissionResult {
  ok: boolean;
  message?: string;
}
export async function submitLead(
  formType: "capital-inquiry" | "readiness-checklist",
  payload: Record<string, unknown>,
): Promise<LeadSubmissionResult> {
  if (!businessConfig.inquiryWebhookUrl)
    return { ok: false, message: "Online inquiry setup is being finalized." };
  try {
    const response = await fetch(businessConfig.inquiryWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType, ...payload }),
    });
    if (!response.ok)
      return { ok: false, message: "We could not send your information. Please try again." };
    return { ok: true };
  } catch {
    return { ok: false, message: "We could not connect to the inquiry service. Please try again." };
  }
}
