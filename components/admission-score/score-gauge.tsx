'use client';

import { motion } from 'framer-motion';

function getScoreMeta(score: number) {
  if (score >= 80) return { label: 'Good', ring: '#C8FA00', badgeBg: 'bg-lime/20', badgeText: 'text-noir' };
  if (score >= 50) return { label: 'Needs Work', ring: '#E8A33D', badgeBg: 'bg-amber-100', badgeText: 'text-amber-800' };
  return { label: 'Critical', ring: '#E0524F', badgeBg: 'bg-red-100', badgeText: 'text-red-700' };
}

export default function ScoreGauge({ score }: { score: number }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const meta = getScoreMeta(score);

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-44 w-44 items-center justify-center">
        <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 160 160">
          <circle cx="80" cy="80" r={radius} fill="none" stroke="#0A0A0A" strokeOpacity={0.08} strokeWidth="10" />
          <motion.circle
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={meta.ring}
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-serif text-4xl text-noir"
          >
            {score}
          </motion.p>
          <p className="text-xs text-muted">/ 100</p>
        </div>
      </div>
      <span className={`mt-3 rounded-full px-3 py-1 text-xs font-semibold ${meta.badgeBg} ${meta.badgeText}`}>
        {meta.label}
      </span>
    </div>
  );
}