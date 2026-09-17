import type { MetadataRoute } from 'next';
import { getAllCourseSlugs } from '@/lib/courses';

const SITE_URL = 'https://ernestpath.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const mainRoutes = [
    '/',
    '/services/website-development',
    '/services/seo',
    '/services/ads',
    '/academy',
    '/insight',
  ];

  const courseRoutes = getAllCourseSlugs().map(
    (slug) => `/academy/${slug}`,
  );

  const routes = [...new Set([...mainRoutes, ...courseRoutes])];

  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
  }));
}