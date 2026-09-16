'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2 } from 'lucide-react';

const steps = [
  'Checking page speed...',
  'Checking on-page SEO...',
  'Checking local SEO signals...',
  'Checking schema & AI visibility...',
  'Checking enquiry form friction...',
];

export default function ScanningState() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c < steps.length - 1 ? c + 1 : c));
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto max-w-sm text-center">
      <Loader2 size={28} className="mx-auto animate-spin text-lime" />
      <div className="mt-8 space-y-3 text-left">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center">
              <AnimatePresence mode="wait">
                {i < current ? (
                  <motion.span key="done" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                    <CheckCircle2 size={16} className="text-lime" />
                  </motion.span>
                ) : i === current ? (
                  <motion.span
                    key="active"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="h-2 w-2 rounded-full bg-noir"
                  />
                ) : (
                  <span className="h-2 w-2 rounded-full bg-noir/15" />
                )}
              </AnimatePresence>
            </span>
            <span className={`text-sm ${i <= current ? 'text-noir' : 'text-muted'}`}>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}