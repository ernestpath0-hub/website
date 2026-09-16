'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import type { Course } from '@/lib/courses';

export function CourseCurriculum({ course }: { course: Course }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center font-serif text-2xl text-noir sm:text-3xl">
          The full free roadmap
        </h2>

        <div className="mt-10 space-y-3">
          {course.phases.map((phase, i) => (
            <div key={phase.title} className="overflow-hidden rounded-2xl border border-noir/8">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <div>
                  <p className="text-xs font-medium text-lime">{phase.tag}</p>
                  <p className="mt-0.5 font-serif text-lg text-noir">{phase.title}</p>
                </div>
                <motion.span animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <ChevronDown size={18} className="text-muted" />
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 border-t border-noir/8 px-5 py-5">
                      <ul className="space-y-2.5">
                        {phase.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2.5 text-sm text-muted">
                            <Check size={14} className="mt-0.5 flex-shrink-0 text-lime" />
                            {topic}
                          </li>
                        ))}
                      </ul>

                      {phase.sampleDays && phase.sampleDays.length > 0 && (
                        <div className="rounded-xl bg-noir/[0.03] p-4">
                          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted">
                            Sample days from this phase
                          </p>
                          <div className="space-y-3">
                            {phase.sampleDays.map((day) => (
                              <div key={day.day}>
                                <p className="text-sm font-medium text-noir">
                                  Day {day.day}: {day.title}
                                </p>
                                <p className="mt-0.5 text-xs text-muted">{day.topics.join(' · ')}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}