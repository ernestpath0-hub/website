import type { Insight } from "@/types/insight";
 import { whyCoachingWebsitesGetTrafficButNoEnquiries }
  from "./why-coaching-websites-get-traffic-but-no-enquiries";

export const insights: readonly Insight[] = [
  whyCoachingWebsitesGetTrafficButNoEnquiries,
];

export function getPublishedInsights(): Insight[] {
  return insights
    .filter((insight) => insight.status === "published")
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    );
}


export function getInsightBySlug(
  slug: string,
): Insight | undefined {
  return getPublishedInsights().find(
    (insight) => insight.slug === slug,
  );
}

export function getInsightSlugs(): string[] {
  return getPublishedInsights().map(
    (insight) => insight.slug,
  );
}

export function getFeaturedInsights(): Insight[] {
  return getPublishedInsights().filter(
    (insight) => insight.featured === true,
  );
}

export function getFeaturedInsight():
  | Insight
  | undefined {
  const published = getPublishedInsights();

  return (
    published.find(
      (insight) => insight.featured === true,
    ) ?? published[0]
  );
}

export function getInsightCategories(): Insight["category"][] {
  return Array.from(
    new Set(
      getPublishedInsights().map(
        (insight) => insight.category,
      ),
    ),
  );
}

export function getInsightsByCategory(
  category: Insight["category"],
): Insight[] {
  return getPublishedInsights().filter(
    (insight) => insight.category === category,
  );
}

export function getRelatedInsights(
  currentInsight: Insight,
  limit = 3,
): Insight[] {
  const published = getPublishedInsights().filter(
    (insight) =>
      insight.slug !== currentInsight.slug,
  );

  const explicit = (
    currentInsight.relatedSlugs ?? []
  )
    .map((slug) =>
      published.find(
        (insight) => insight.slug === slug,
      ),
    )
    .filter(
      (insight): insight is Insight =>
        Boolean(insight),
    );

  const sameCategory = published.filter(
    (insight) =>
      insight.category ===
        currentInsight.category &&
      !explicit.some(
        (related) =>
          related.slug === insight.slug,
      ),
  );

  const remaining = published.filter(
    (insight) =>
      insight.category !==
        currentInsight.category &&
      !explicit.some(
        (related) =>
          related.slug === insight.slug,
      ),
  );

  return [
    ...explicit,
    ...sameCategory,
    ...remaining,
  ].slice(0, limit);
}

export function getLatestInsights(
  limit = 3,
): Insight[] {
  return getPublishedInsights().slice(
    0,
    limit,
  );
}