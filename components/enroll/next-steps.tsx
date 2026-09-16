'use client';

import { motion } from 'framer-motion';

const steps = [
  { title: 'Submit the form above', desc: 'Takes under a minute — no payment required yet.' },
  { title: 'We reach out within 24-48 hours', desc: 'To confirm your track and share payment details.' },
  { title: 'Get access to Day 1', desc: 'Start the path with your first lesson and live session schedule.' },
];

export default function NextSteps() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="text-center font-serif text-2xl text-noir sm:text-3xl">
          What happens after you submit
        </h2>
        <div className="mt-10 space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lime/20 font-serif text-sm text-noir">
                {i + 1}
              </span>
              <div>
                <p className="font-medium text-noir">{step.title}</p>
                <p className="mt-0.5 text-sm text-muted">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}