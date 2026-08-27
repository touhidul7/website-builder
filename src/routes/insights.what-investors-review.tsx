import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { pageHead } from "@/components/seo";
import { articles } from "@/content/insights";
const a = articles[1]!;
export const Route = createFileRoute("/insights/what-investors-review")({
  head: () => pageHead(`${a.title} | Northline`, a.description, "/insights/what-investors-review"),
  component: () => <ArticlePage article={a} />,
});
