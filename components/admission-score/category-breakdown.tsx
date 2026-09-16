'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check, X, Lock } from 'lucide-react';
import type { AdmissionScoreResult } from '@/lib/admission-score/types';

interface Props {
  result: AdmissionScoreResult;
  unlocked: boolean;
}

export default function CategoryBreakdown({ result, unlocked }: Props) {
  const worstCategory = result.categories.reduce(
    (worst, cat) => (cat.score < worst.score ? cat : worst),
    result.categories[0]
  );
  const [openKey, setOpenKey] = useState<string | null>(worstCategory?.key ?? null);

  return (
    <div className="mt-10 space-y-3">
      {result.categories.map((cat) => (
        <div key={cat.key} className="overflow-hidden rounded-2xl border border-noir/8">
          <button
            onClick={() => setOpenKey(openKey === cat.key ? null : cat.key)}
            className="flex w-full items-center justify-between px-5 py-4 text-left"
          >
            <div className="flex items-center gap-3">
              <span className="font-medium text-noir">{cat.label}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  cat.score >= 80
                    ? 'bg-lime/20 text-noir'
                    : cat.score >= 50
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-700'
                }`}
              >
                {cat.score}/100
              </span>
            </div>
            <motion.span animate={{ rotate: openKey === cat.key ? 180 : 0 }}>
              <ChevronDown size={18} className="text-muted" />
            </motion.span>
          </button>

          <AnimatePresence>
            {openKey === cat.key && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-4 border-t border-noir/8 px-5 py-5">
                  {cat.checks.map((check) => (
                    <div key={check.id} className="flex gap-3">
                      <span
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          check.passed ? 'bg-lime/20 text-noir' : 'bg-noir/8 text-muted'
                        }`}
                      >
                        {check.passed ? <Check size={12} /> : <X size={12} />}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-noir">{check.label}</p>
                        <p className="mt-1 text-sm text-muted">{check.detail}</p>

                        {!check.passed && check.impact && (
                          <p className="mt-1.5 text-xs font-medium text-red-600">{check.impact}</p>
                        )}

                        {!check.passed && (
                          <div className="mt-2">
                            {unlocked ? (
                              <div className="space-y-1.5 rounded-lg bg-noir/[0.03] p-3 text-xs">
                                {check.diyFix && (
                                  <p>
                                    <span className="font-medium text-noir">Do it yourself: </span>
                                    <span className="text-muted">{check.diyFix}</span>
                                  </p>
                                )}
                                {check.ernestPathFix && (
                                  <p>
                                    <span className="font-medium text-noir">With ErnestPath: </span>
                                    <span className="text-muted">{check.ernestPathFix}</span>
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="flex items-center gap-1.5 text-xs text-muted">
                                <Lock size={11} />
                                Unlock to see the fix
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}