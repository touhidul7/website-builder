import { useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { captureAttribution, track } from "@/lib/tracking";

export function AnalyticsBridge() {
  const pathname = useLocation({ select: (location) => location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  useEffect(() => {
    captureAttribution();
    if (window.location.pathname === "/resources/readiness-checklist") {
      track("resource_view", { resource_name: "readiness-checklist" });
    }
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest<HTMLAnchorElement>("a.btn, a.text-link");
      if (!link) return;
      track("cta_click", {
        cta_text: link.textContent?.trim() || "link",
        cta_location: window.location.pathname,
        destination: link.getAttribute("href") || "",
      });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}
