import { businessConfig, canonicalUrl } from "@/config/business";
export function pageHead(title: string, description: string, path: string, noindex = false) {
  const url = canonicalUrl(path);
  const image = businessConfig.websiteUrl
    ? `${businessConfig.websiteUrl.replace(/\/$/, "")}/northline-og.webp`
    : undefined;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      ...(image ? [{ property: "og:image", content: image }] : []),
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}
