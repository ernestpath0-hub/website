'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import InputForm from '@/components/admission-score/input-form';
import ScanningState from '@/components/admission-score/scanning-state';
import ScoreGauge from '@/components/admission-score/score-gauge';
import TopIssues from '@/components/admission-score/top-issues';
import CategoryBreakdown from '@/components/admission-score/category-breakdown';
import EmailGate from '@/components/admission-score/email-gate';
import type { AdmissionScoreResult } from '@/lib/admission-score/types';

type Stage = 'idle' | 'scanning' | 'results' | 'error';

export default function AdmissionScorePage() {
  const [stage, setStage] = useState<Stage>('idle');
  const [result, setResult] = useState<AdmissionScoreResult | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(data: { url: string; city: string; examFocus: string }) {
    setStage('scanning');
    setUnlocked(false);
    try {
      const res = await fetch('/api/admission-score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');
      setResult(json);
      setStage('results');
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
      setStage('error');
    }
  }

  return (
    <section className="px-6 pb-28 pt-40">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-noir/10 bg-noir/[0.03] px-4 py-1.5 text-sm text-muted">
          Free Admission Funnel Score
        </p>
        <h1 className="font-serif text-3xl text-noir sm:text-4xl">
          See what&apos;s costing you enquiries — in 60 seconds
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-muted">
          Enter your website to get an instant score across speed, SEO, local
          visibility, AI search readiness, and enquiry form friction.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-2xl">
        <AnimatePresence mode="wait">
          {stage === 'idle' && (
            <motion.div key="idle" exit={{ opacity: 0 }}>
              <InputForm onSubmit={handleSubmit} />
            </motion.div>
          )}

          {stage === 'scanning' && (
            <motion.div key="scanning" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ScanningState />
            </motion.div>
          )}

          {stage === 'error' && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mx-auto max-w-md rounded-2xl border border-noir/8 p-8 text-center"
            >
              <AlertTriangle size={22} className="mx-auto text-noir/60" />
              <p className="mt-3 text-sm text-muted">{errorMessage}</p>
              <button
                onClick={() => setStage('idle')}
                className="mt-5 rounded-full bg-lime px-5 py-2 text-sm font-semibold text-noir"
              >
                Try again
              </button>
            </motion.div>
          )}

          {stage === 'results' && result && (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex flex-col items-center">
                <ScoreGauge score={result.overallScore} />
                <p className="mt-4 text-sm text-muted">for {result.url}</p>
              </div>

              <TopIssues result={result} />

              {result.warnings.length > 0 && (
                <div className="mx-auto mt-6 max-w-md rounded-xl bg-noir/[0.03] p-4 text-center text-xs text-muted">
                  {result.warnings.join(' ')}
                </div>
              )}

              <CategoryBreakdown result={result} unlocked={unlocked} />

              {!unlocked && <EmailGate onUnlock={() => setUnlocked(true)} result={result} />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}