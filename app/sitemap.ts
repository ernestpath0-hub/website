import type { MetadataRoute } from 'next';
import { getAllCourseSlugs } from '@/lib/courses';
import { getPublishedInsights } from '@/data/insights';

const SITE_URL = 'https://ernestpath.com';

const staticRoutes = [
  '',
  '/services',
  '/services/seo',
  '/services/website-development',
  '/services/ads',
  '/academy',
  '/insights',
  '/tools/admission-score',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));

  const courseEntries: MetadataRoute.Sitemap = getAllCourseSlugs().map((slug) => ({
    url: `${SITE_URL}/academy/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const insightEntries: MetadataRoute.Sitemap = getPublishedInsights().map((insight) => ({
    url: `${SITE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.updatedAt ?? insight.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...courseEntries, ...insightEntries];
}