const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export function captureAttribution() {
  if (typeof window === "undefined") return {};
  const q = new URLSearchParams(window.location.search);
  for (const k of keys) {
    const v = q.get(k);
    if (v) sessionStorage.setItem(k, v);
  }
  if (!sessionStorage.getItem("first_page"))
    sessionStorage.setItem("first_page", window.location.href);
  return attribution();
}
export function attribution() {
  if (typeof window === "undefined") return {};
  return Object.fromEntries(
    [...keys, "first_page"].map((k) => [k, sessionStorage.getItem(k) || ""]),
  );
}
export function track(name: string, properties: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  (window as Window & { dataLayer?: unknown[] }).dataLayer?.push({ event: name, ...properties });
}
