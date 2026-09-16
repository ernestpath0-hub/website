'use client';

import { motion } from 'framer-motion';

export function HubHero() {
  return (
    <section className="pb-16 pt-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-noir/10 bg-noir/[0.03] px-4 py-1.5 text-sm text-muted"
        >
          ErnestPath Academy
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl leading-tight text-noir sm:text-5xl"
        >
          Learn free. Go live when you&apos;re ready.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-muted"
        >
          Every course&apos;s full roadmap and exercises are free, always.
          When you want live doubt-clearing, mentorship, and real project
          matching, enroll in live classes for that course.
        </motion.p>
      </div>
    </section>
  );
}