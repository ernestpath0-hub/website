'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function EnrollForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState<'student' | 'professional'>('student');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, track, source: 'academy-enroll' }),
      });
    } catch {
      // non-blocking — still show confirmation to avoid dead-ending the user
    } finally {
      setStatus('done');
    }
  }

  if (status === 'done') {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-md px-6 text-center">
          <CheckCircle2 size={28} className="mx-auto text-lime" />
          <h2 className="mt-4 font-serif text-2xl text-noir">You&apos;re on the list</h2>
          <p className="mt-2 text-sm text-muted">
            We&apos;ll reach out shortly with next steps and payment details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-center font-serif text-2xl text-noir sm:text-3xl">
          Reserve your spot
        </h2>
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
            type="text"
            required
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none focus:border-lime"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="email"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none focus:border-lime"
            />
            <input
              type="tel"
              required
              placeholder="Phone / WhatsApp"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none focus:border-lime"
            />
          </div>

          <div className="flex gap-3">
            {(['student', 'professional'] as const).map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setTrack(option)}
                className={`flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
                  track === option
                    ? 'border-lime bg-lime/10 text-noir'
                    : 'border-noir/10 text-muted hover:border-noir/20'
                }`}
              >
                {option === 'student' ? 'Student' : 'Working Professional'}
              </button>
            ))}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-noir transition-transform hover:scale-[1.01] disabled:opacity-70"
          >
            {status === 'loading' ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <>
                Reserve My Spot
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}