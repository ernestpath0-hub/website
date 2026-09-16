'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What payment methods are accepted?',
    a: 'Details are shared once we reach out after you submit the form — typically UPI, card, or bank transfer for Indian students, and card/international transfer for students abroad.',
  },
  {
    q: 'Is there a refund policy?',
    a: 'Yes — specifics are shared before you pay, so you can decide with full information.',
  },
  {
    q: 'When can I start?',
    a: 'Most students start within a week of enrolling. Exact timing is confirmed when we reach out.',
  },
  {
    q: 'Can I switch between the Student and Professional track later?',
    a: 'Yes — the curriculum is the same either way, the track just helps us set the right pacing expectations with you.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function EnrollFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center font-serif text-2xl text-noir sm:text-3xl">
          Enrollment FAQ
        </h2>
        <div className="mt-8 divide-y divide-noir/8">
          {faqs.map((faq, i) => (
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