export const businessConfig = {
  businessName: "Northline Capital Partners",
  websiteUrl: import.meta.env.VITE_SITE_URL || "",
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || "",
  phone: import.meta.env.VITE_CONTACT_PHONE || "",
  address: import.meta.env.VITE_BUSINESS_ADDRESS || "",
  calendarUrl: import.meta.env.VITE_GHL_CALENDAR_URL || "",
  inquiryWebhookUrl: import.meta.env.VITE_GHL_INQUIRY_WEBHOOK_URL || "",
  gtmId: import.meta.env.VITE_GTM_ID || "",
  ga4MeasurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID || "",
  legalEntityName: import.meta.env.VITE_LEGAL_ENTITY_NAME || "Northline Capital Partners",
};

export function canonicalUrl(path: string) {
  return businessConfig.websiteUrl
    ? `${businessConfig.websiteUrl.replace(/\/$/, "")}${path}`
    : undefined;
}
