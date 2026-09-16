'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Props {
  onSubmit: (data: { url: string; city: string; examFocus: string }) => void;
}

export default function InputForm({ onSubmit }: Props) {
  const [url, setUrl] = useState('');
  const [city, setCity] = useState('');
  const [examFocus, setExamFocus] = useState('');

  return (
    <motion.form
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={(e) => {
        e.preventDefault();
        if (!url.trim()) return;
        onSubmit({ url: url.trim(), city: city.trim(), examFocus: examFocus.trim() });
      }}
      className="mx-auto max-w-xl space-y-4"
    >
      <div>
        <label htmlFor="url" className="mb-1.5 block text-sm font-medium text-noir">
          Your website URL
        </label>
        <input
          id="url"
          type="text"
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="yourinstitute.com"
          className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none transition-colors focus:border-lime"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-noir">
            Your city
          </label>
          <input
            id="city"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Hyderabad"
            className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none transition-colors focus:border-lime"
          />
        </div>
        <div>
          <label htmlFor="exam" className="mb-1.5 block text-sm font-medium text-noir">
            Target exam / course
          </label>
          <input
            id="exam"
            type="text"
            value={examFocus}
            onChange={(e) => setExamFocus(e.target.value)}
            placeholder="NEET"
            className="w-full rounded-xl border border-noir/10 bg-white px-4 py-3 text-sm text-noir outline-none transition-colors focus:border-lime"
          />
        </div>
      </div>

      <button
        type="submit"
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-noir transition-transform hover:scale-[1.01]"
      >
        Get My Free Admission Score
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="text-center text-xs text-muted">
        Takes about 15 seconds. No signup required to see your score.
      </p>
    </motion.form>
  );
}