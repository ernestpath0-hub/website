'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { courses } from '@/lib/courses';

export function CourseGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium text-lime">Currently available</p>
          <h2 className="mt-3 font-serif text-3xl text-noir sm:text-4xl">Pick a course</h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {courses.map((course, i) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/academy/${course.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-noir/8 bg-white/60 p-7 transition-colors hover:border-lime"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-lime/20 px-2.5 py-1 text-xs font-medium text-noir">Free</span>
                  <span className="rounded-full bg-noir/[0.05] px-2.5 py-1 text-xs font-medium text-muted">+ Live available</span>
                </div>

                <p className="mt-4 font-serif text-xl text-noir">{course.title}</p>
                <p className="mt-2 flex-1 text-sm text-muted">{course.tagline}</p>

                <div className="mt-5 flex items-center gap-1.5 text-xs text-muted">
                  <Clock size={13} />
                  {course.durationLabel}
                </div>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-noir/70 group-hover:text-noir">
                  View roadmap
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </motion.div>
          ))}

          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-noir/15 p-7 text-center text-sm text-muted">
            More courses coming as the Academy grows.
          </div>
        </div>
      </div>
    </section>
  );
}