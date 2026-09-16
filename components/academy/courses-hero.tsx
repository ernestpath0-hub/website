'use client';

import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';
import type { Course } from '@/lib/courses';

export function CourseHero({ course }: { course: Course }) {
  return (
    <section className="pb-14 pt-40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <span className="rounded-full bg-lime/20 px-3 py-1 text-xs font-medium text-noir">Free roadmap</span>
          <span className="rounded-full bg-noir/[0.05] px-3 py-1 text-xs font-medium text-muted">+ Live classes available</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-serif text-4xl leading-tight text-noir sm:text-5xl"
        >
          {course.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-xl text-muted"
        >
          {course.heroDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted"
        >
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {course.durationLabel}
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {course.audience.join(' · ')}
          </span>
        </motion.div>
      </div>
    </section>
  );
}