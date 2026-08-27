import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { pageHead } from "@/components/seo";
import { articles } from "@/content/insights";
const a = articles[2]!;
export const Route = createFileRoute("/insights/data-room-checklist")({
  head: () => pageHead(`${a.title} | Northline`, a.description, "/insights/data-room-checklist"),
  component: () => <ArticlePage article={a} />,
});
