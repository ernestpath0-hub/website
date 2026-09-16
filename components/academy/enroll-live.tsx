'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';
import type { Course } from '@/lib/courses';

export function EnrollLiveSection({ course }: { course: Course }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'done'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          course: course.slug,
          source: `academy-enroll-${course.slug}`,
        }),
      });
    } catch {
      // non-blocking — still confirm to the user even if the request fails
    } finally {
      setStatus('done');
    }
  }

  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-lime">Want more than the free roadmap?</p>
          <h2 className="mt-3 font-serif text-3xl text-noir sm:text-4xl">
            Enroll for live {course.title} classes
          </h2>
        </div>

        {/* Free vs Live comparison */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-noir/8 p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">Free, forever</p>
            <ul className="mt-4 space-y-2.5">
              {course.freeIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-noir/80">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-noir/40" />
                  {item}
                </li>
              ))}
              <li className="flex items-start gap-2 text-sm text-muted/60">
                <X size={14} className="mt-0.5 flex-shrink-0" />
                No live sessions or project matching
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-lime bg-lime/5 p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-noir">Live classes</p>
            <ul className="mt-4 space-y-2.5">
              {course.freeIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-noir/80">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-lime" />
                  {item}
                </li>
              ))}
              {course.liveIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-noir">
                  <Check size={14} className="mt-0.5 flex-shrink-0 text-lime" />
                  {item}
                </li>
              ))}
            </ul>
            {/* <p className="mt-5 font-serif text-2xl text-noir">{course.price}</p> */}
          </div>
        </div>

        {/* Enrollment form */}
        <div className="mt-12">
          {status === 'done' ? (
            <div className="mx-auto max-w-md text-center">
              <CheckCircle2 size={26} className="mx-auto text-lime" />
              <p className="mt-3 font-serif text-xl text-noir">You&apos;re on the list</p>
              <p className="mt-1 text-sm text-muted">
                We&apos;ll reach out about live {course.title} classes shortly.
              </p>
            </div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="mx-auto max-w-md space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none focus:border-lime"
              />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-noir transition-transform hover:scale-[1.01] disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <>
                    Reserve My Spot <ArrowRight size={16} />
                  </>
                )}
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}