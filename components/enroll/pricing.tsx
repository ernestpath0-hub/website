'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const included = [
  'All 120 lessons — Frontend, Backend, Full-Stack, Freelancing & Marketing',
  'Live doubt-clearing sessions',
  'Real client-style project briefs',
  'Freelance-readiness track (portfolio, pricing, pitching, personal brand)',
  'Eligibility for real project matching through ErnestPath\'s client pipeline',
];

export default function Pricing() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-noir/10 bg-white/60 p-8 text-center sm:p-10"
        >
          <p className="text-sm font-medium text-lime">One enrollment, everything included</p>
          <p className="mt-3 font-serif text-4xl text-noir">
            [₹19,999] <span className="text-lg font-normal text-muted">one-time</span>
          </p>
          <p className="mt-1 text-xs text-muted">Replace with your actual pricing before launch.</p>

          <ul className="mt-8 space-y-3 text-left">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-noir/80">
                <Check size={15} className="mt-0.5 flex-shrink-0 text-lime" />
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-xl bg-noir/[0.03] p-4 text-xs leading-relaxed text-muted">
            Top-performing students may also be offered real freelance projects
            through ErnestPath&apos;s client pipeline after completing the
            course — any such projects carry a small, transparent commission
            on the first few jobs, aligning our success with yours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}