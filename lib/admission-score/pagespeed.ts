import type { CategoryResult, CheckResult } from './types';

const PSI_ENDPOINT = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed';

export function scoreFromChecks(checks: { passed: boolean }[]): number {
  if (checks.length === 0) return 0;
  const passed = checks.filter((c) => c.passed).length;
  return Math.round((passed / checks.length) * 100);
}

export async function analyzeTechnicalSEO(
  url: string
): Promise<{ category: CategoryResult; warning?: string }> {
  const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY;
  const checks: CheckResult[] = [];
  let warning: string | undefined;

  checks.push({
    id: 'https',
    label: 'Site uses HTTPS',
    passed: url.startsWith('https://'),
    detail: url.startsWith('https://')
      ? 'Your site is served securely over HTTPS.'
      : 'Your site is not using HTTPS.',
    impact: 'Visitors and Google both flag insecure sites — you lose trust before anyone even reads your homepage.',
    diyFix: 'Enable a free SSL certificate through your hosting provider (most offer one-click HTTPS).',
    ernestPathFix: 'We set up and enforce HTTPS as part of every website build.',
  });

  if (!apiKey) {
    warning = 'PageSpeed API key not configured — performance checks skipped.';
    return {
      category: { key: 'technical', label: 'Technical SEO', score: scoreFromChecks(checks), checks },
      warning,
    };
  }

  try {
    const res = await fetch(
      `${PSI_ENDPOINT}?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=mobile&category=performance&category=seo`,
      { signal: AbortSignal.timeout(15000) }
    );
    if (!res.ok) throw new Error(`PageSpeed API returned ${res.status}`);
    const data = await res.json();

    const perfScore = Math.round((data?.lighthouseResult?.categories?.performance?.score ?? 0) * 100);
    checks.push({
      id: 'performance',
      label: 'Page speed (mobile)',
      passed: perfScore >= 70,
      detail: `Mobile performance score: ${perfScore}/100.`,
      impact: "Every extra second of load time sends visitors back to Google, straight to a competing institute's listing.",
      diyFix: 'Compress images and remove unused JavaScript/CSS to improve load time.',
      ernestPathFix: 'We rebuild sites on fast, modern frameworks with performance budgets built in.',
    });

    const seoScore = Math.round((data?.lighthouseResult?.categories?.seo?.score ?? 0) * 100);
    checks.push({
      id: 'lighthouse-seo',
      label: 'Basic SEO health (Lighthouse)',
      passed: seoScore >= 80,
      detail: `Lighthouse SEO score: ${seoScore}/100.`,
      impact: "Google's own quality signal is low here, making it harder to outrank nearby institutes for the same searches.",
      diyFix: 'Run this page through Google Lighthouse in Chrome DevTools to see the exact flagged issues.',
      ernestPathFix: 'We resolve every Lighthouse SEO flag as a standard part of the build.',
    });

    const viewport = data?.lighthouseResult?.audits?.viewport?.score;
    checks.push({
      id: 'mobile-friendly',
      label: 'Mobile-friendly viewport',
      passed: viewport === 1,
      detail:
        viewport === 1
          ? 'Your site is configured for mobile devices.'
          : 'Missing or misconfigured mobile viewport.',
      impact: 'Most parents search on their phone — a broken mobile experience loses them before they see a single course.',
      diyFix: 'Add a responsive viewport meta tag and test on a real phone.',
      ernestPathFix: 'Every ErnestPath site is mobile-first by default.',
    });
  } catch {
    warning = 'Could not complete performance scan — the site may be slow to respond or unreachable.';
  }

  return {
    category: { key: 'technical', label: 'Technical SEO', score: scoreFromChecks(checks), checks },
    warning,
  };
}