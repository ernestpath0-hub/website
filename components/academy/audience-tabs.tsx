'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket } from 'lucide-react';

const tabs = [
  {
    key: 'students',
    label: 'Students & Recent Graduates',
    icon: GraduationCap,
    heading: 'Already have the degree. Need the proof.',
    body: 'If you\'re still studying or already graduated with no offers yet, the anxiety is the same: you need real, presentable skills fast. Build client-style projects, not another todo-app clone — and move at full-time pace if you can.',
  },
  {
    key: 'professionals',
    label: 'Working Professionals',
    icon: Briefcase,
    heading: 'A career switch that fits around your job.',
    body: 'You need speed and proof it\'ll work, not another course you stall out on. Self-paced lessons plus live sessions fit around evenings and weekends — as little as 3 months if you commit weekly.',
  },
  {
    key: 'freelancers',
    label: 'Freelancers',
    icon: Rocket,
    heading: 'Already freelancing. Want to go further.',
    body: 'Sharpen your MERN skills or pick up the marketing fundamentals you skipped — pricing, pitching, and positioning — to raise your rates and land better clients.',
  },
];

export function AudienceTabs() {
  const [active, setActive] = useState(tabs[0].key);
  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto flex max-w-lg flex-wrap items-center justify-center gap-1 rounded-full border border-noir/10 bg-noir/[0.03] p-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === tab.key ? 'text-noir' : 'text-muted hover:text-noir'
              }`}
            >
              {active === tab.key && (
                <motion.div
                  layoutId="audience-tab"
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <tab.icon size={14} />
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="mt-10 text-center"
          >
            <h2 className="font-serif text-2xl text-noir sm:text-3xl">{activeTab.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">{activeTab.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}