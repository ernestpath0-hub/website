import { NextResponse } from 'next/server';
import { runAdmissionScore } from '@/lib/admission-score/analyze';

// Basic in-memory rate limiter — resets on server restart and doesn't share
// state across multiple serverless instances. Fine for early launch; replace
// with a proper store (e.g. Upstash Redis) once traffic grows.
const RATE_LIMIT = 5; // requests
const RATE_WINDOW_MS = 60 * 60 * 1000; // per hour
const hits = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  return false;
}

function isValidUrl(input: string): boolean {
  const candidate = /^https?:\/\//i.test(input) ? input : `https://${input}`;
  try {
    const parsed = new URL(candidate);
    return parsed.hostname.includes('.');
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again in a while.' },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { url, city, examFocus } = body ?? {};

    if (!url || typeof url !== 'string' || url.trim().length === 0) {
      return NextResponse.json({ error: 'A website URL is required.' }, { status: 400 });
    }

    if (!isValidUrl(url.trim())) {
      return NextResponse.json(
        { error: 'That doesn\'t look like a valid website URL. Please check and try again.' },
        { status: 400 }
      );
    }

    const result = await runAdmissionScore(url.trim(), city ?? '', examFocus ?? '');
    return NextResponse.json(result);
  } catch (err) {
    console.error('Admission score error:', err);
    return NextResponse.json(
      { error: 'Something went wrong while scanning the site. Please try again.' },
      { status: 500 }
    );
  }
}