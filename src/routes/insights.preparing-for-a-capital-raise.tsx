import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site/ArticlePage";
import { pageHead } from "@/components/seo";
import { articles } from "@/content/insights";
const a = articles[0]!;
export const Route = createFileRoute("/insights/preparing-for-a-capital-raise")({
  head: () =>
    pageHead(`${a.title} | Northline`, a.description, "/insights/preparing-for-a-capital-raise"),
  component: () => <ArticlePage article={a} />,
});
