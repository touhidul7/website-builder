import { businessConfig, canonicalUrl } from "@/config/business";
export function pageHead(title: string, description: string, path: string, noindex = false) {
  const url = canonicalUrl(path);
  const image = businessConfig.websiteUrl
    ? `${businessConfig.websiteUrl.replace(/\/$/, "")}/brand/nevio-social-card.webp`
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
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image
        ? [
            { property: "og:image", content: image },
            { property: "og:image:alt", content: "Nevio Capital Partners" },
            { name: "twitter:image", content: image },
          ]
        : []),
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}
