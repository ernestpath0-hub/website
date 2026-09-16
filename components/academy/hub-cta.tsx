'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const points = [
  'Every roadmap and exercise set is free, permanently — not a limited trial',
  'Live classes are optional, for when you want mentorship and real project matching',
  'Built by the same team running ErnestPath\'s real client work — not theory-only instructors',
];

export function HubCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-noir px-8 py-12 text-center sm:px-12"
        >
          <h2 className="font-serif text-2xl text-paper sm:text-3xl">Why it&apos;s structured this way</h2>
          <ul className="mt-6 space-y-3 text-left">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-paper/75">
                <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-lime" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}