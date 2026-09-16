'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileSearch, ArrowRight, Loader2 } from 'lucide-react';
import type { AdmissionScoreResult } from '@/lib/admission-score/types';

interface Props {
  onUnlock: (email: string) => void;
  result: AdmissionScoreResult;
}

export default function EmailGate({ onUnlock, result }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !phone.trim()) return;
    setLoading(true);

    const categoryScores = result.categories.map((cat) => ({
      label: cat.label,
      score: cat.score,
    }));

    const failedChecks = result.categories.flatMap((cat) =>
      cat.checks
        .filter((c) => !c.passed)
        .map((c) => ({ category: cat.label, label: c.label, detail: c.detail }))
    );

    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          source: 'admission-score',
          scannedUrl: result.url,
          score: result.overallScore,
          city: result.city,
          examFocus: result.examFocus,
          categoryScores,
          failedChecks,
        }),
      });
    } catch {
      // Non-blocking — still unlock the report even if lead storage fails
    } finally {
      setLoading(false);
      onUnlock(email);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="mt-10 rounded-2xl bg-noir px-6 py-10 text-center sm:px-12"
    >
      <FileSearch size={22} className="mx-auto text-lime" />
      <h3 className="mt-4 font-serif text-2xl text-paper">
        Get Your Full SEO Audit
      </h3>
      <p className="mx-auto mt-2 max-w-sm text-sm text-paper/70">
        Every issue, why it&apos;s costing you enquiries, how to fix it
        yourself, and what ErnestPath would do — sent to you, and we&apos;ll
        follow up personally with next steps.
      </p>

      <div className="mx-auto mt-6 max-w-sm space-y-3">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-full border border-paper/20 bg-paper/5 px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-lime"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-full border border-paper/20 bg-paper/5 px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-lime"
        />
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone / WhatsApp"
          className="w-full rounded-full border border-paper/20 bg-paper/5 px-4 py-2.5 text-sm text-paper outline-none placeholder:text-paper/40 focus:border-lime"
        />
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-1.5 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-noir transition-transform hover:scale-[1.02] disabled:opacity-70"
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : <>Get My Full Audit <ArrowRight size={14} /></>}
        </button>
      </div>

      <p className="mt-5 text-xs text-paper/50">
        Prefer to talk directly?{' '}
        <a href="mailto:hello@ernestpath.com" className="text-lime underline underline-offset-2">
          Email us
        </a>{' '}
        instead.
      </p>
    </motion.form>
  );
}