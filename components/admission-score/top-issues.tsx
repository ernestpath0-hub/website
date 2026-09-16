'use client';

import { motion } from 'framer-motion';
import { TrendingDown, PartyPopper } from 'lucide-react';
import type { AdmissionScoreResult } from '@/lib/admission-score/types';

const CATEGORY_WEIGHTS: Record<string, number> = {
  technical: 0.25,
  onpage: 0.2,
  local: 0.2,
  aeo: 0.2,
  conversion: 0.15,
};

export default function TopIssues({ result }: { result: AdmissionScoreResult }) {
  const failedChecks = result.categories
    .flatMap((cat) =>
      cat.checks
        .filter((c) => !c.passed)
        .map((c) => ({ ...c, categoryLabel: cat.label, weight: CATEGORY_WEIGHTS[cat.key] ?? 0 }))
    )
    // noindex is a special case — if present, it should always lead regardless of category weight
    .sort((a, b) => {
      if (a.id === 'noindex-check') return -1;
      if (b.id === 'noindex-check') return 1;
      return b.weight - a.weight;
    })
    .slice(0, 4);

  if (failedChecks.length === 0) {
    return (
      <div className="mx-auto mt-10 flex max-w-xl items-center gap-3 rounded-2xl border border-lime/40 bg-lime/10 p-6 text-sm text-noir">
        <PartyPopper size={18} className="flex-shrink-0" />
        No major issues found — your site is in good shape across every category we check.
      </div>
    );
  }

  return (
    <div className="mx-auto mt-10 max-w-xl">
      <p className="mb-1 text-sm font-medium text-noir">
        Your {failedChecks.length} biggest opportunities, ranked by how much they&apos;re costing you:
      </p>
      <p className="mb-4 text-xs text-muted">Highest-impact issues first — fix these before anything else.</p>

      <div className="space-y-3">
        {failedChecks.map((check, i) => (
          <motion.div
            key={check.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="rounded-xl border border-noir/8 bg-white/60 p-4"
          >
            <p className="text-sm font-medium text-noir">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-50 text-[11px] font-semibold text-red-500">
                {i + 1}
              </span>
              {check.label}
            </p>
            <p className="mt-1.5 pl-7 text-xs text-muted">{check.detail}</p>
            {check.impact && (
              <div className="mt-2 flex items-start gap-1.5 pl-7">
                <TrendingDown size={13} className="mt-0.5 flex-shrink-0 text-red-500" />
                <p className="text-xs font-medium text-red-600">{check.impact}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}