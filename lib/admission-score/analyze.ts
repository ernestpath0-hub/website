import * as cheerio from 'cheerio';
import { analyzeTechnicalSEO } from './pagespeed';
import {
  analyzeOnPageSEO,
  analyzeLocalSEO,
  analyzeAeoVisibility,
  analyzeConversionFriction,
} from './checks';
import type { AdmissionScoreResult, CategoryResult } from './types';

const WEIGHTS: Record<string, number> = {
  technical: 0.25,
  onpage: 0.2,
  local: 0.2,
  aeo: 0.2,
  conversion: 0.15,
};

export async function runAdmissionScore(
  rawUrl: string,
  city: string,
  examFocus: string
): Promise<AdmissionScoreResult> {
  const warnings: string[] = [];
  const url = normalizeUrl(rawUrl);

  const html = await fetchText(
    url,
    warnings,
    'Could not fetch the website — it may be down or blocking automated requests.'
  );
  const $ = html ? cheerio.load(html) : cheerio.load('<html></html>');

  const origin = new URL(url).origin;
  const robotsTxt = await fetchText(`${origin}/robots.txt`, warnings);
  const llmsTxt = await fetchText(`${origin}/llms.txt`, []);

  const technical = await analyzeTechnicalSEO(url);
  if (technical.warning) warnings.push(technical.warning);

  const categories: CategoryResult[] = [
    technical.category,
    analyzeOnPageSEO($),
    analyzeLocalSEO($, city, examFocus),
    analyzeAeoVisibility($, robotsTxt, llmsTxt !== null),
    analyzeConversionFriction($),
  ];

  const overallScore = Math.round(
    categories.reduce((sum, cat) => sum + cat.score * (WEIGHTS[cat.key] ?? 0), 0)
  );

  return {
    url,
    city,
    examFocus,
    overallScore,
    categories,
    scannedAt: new Date().toISOString(),
    warnings,
  };
}

function normalizeUrl(input: string): string {
  const trimmed = input.trim();
  if (!/^https?:\/\//i.test(trimmed)) return `https://${trimmed}`;
  return trimmed;
}

async function fetchText(
  url: string,
  warnings: string[],
  warningMessage?: string
): Promise<string | null> {
  try {
    const res = await fetch(url, {
      signal: AbortSignal.timeout(10000),
      headers: { 'User-Agent': 'ErnestPathAdmissionScoreBot/1.0' },
    });
    if (!res.ok) {
      if (warningMessage) warnings.push(warningMessage);
      return null;
    }
    return await res.text();
  } catch {
    if (warningMessage) warnings.push(warningMessage);
    return null;
  }
}