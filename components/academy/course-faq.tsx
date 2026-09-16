'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import type { Course } from '@/lib/courses';

export function CourseFAQ({ course }: { course: Course }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (course.faqs.length === 0) return null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: course.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center font-serif text-2xl text-noir sm:text-3xl">
          {course.title} FAQ
        </h2>
        <div className="mt-8 divide-y divide-noir/8">
          {course.faqs.map((faq, i) => (
            <div key={faq.q} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-medium text-noir">{faq.q}</span>
                <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }} className="text-lime">
                  <Plus size={18} />
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 overflow-hidden text-sm leading-relaxed text-muted"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}