"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Braces,
  Check,
  Gauge,
  Link2,
  ListChecks,
  ScanLine,
  Search,
} from "lucide-react";

const reviewAreas = [
  {
    title: "Discoverability",
    text: "Whether priority courses, locations and search signals are easy for people and search systems to identify.",
    icon: Search,
  },
  {
    title: "Decision clarity",
    text: "Whether a visitor can understand course fit, delivery, credibility and the next admission step without unnecessary effort.",
    icon: ListChecks,
  },
  {
    title: "Technical readiness",
    text: "Whether mobile delivery, crawlability, page structure and essential machine-readable information support discovery.",
    icon: Braces,
  },
  {
    title: "Enquiry path",
    text: "Whether calls, forms and messaging actions collect useful context and lead to a clear confirmation or follow-up step.",
    icon: Link2,
  },
];

const outputs = [
  "A category-by-category readiness view",
  "The highest-priority visible gaps",
  "Practical next actions in priority order",
  "A clearer starting point for a deeper review",
];

export function DiagnosticCTA() {
  const reduced = useReducedMotion();

  return (
    <section
      id="admission-score"
      aria-labelledby="diagnostic-title"
      className="relative overflow-hidden bg-[#c9ff3d] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-60 -top-72 h-[42rem] w-[42rem] rounded-full border border-black/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-36 h-[22rem] w-[22rem] rounded-full border border-black/10"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              Free Admission Score
            </p>
            <h2
              id="diagnostic-title"
              className="mt-6 text-[clamp(3rem,6.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.068em]"
            >
              Turn your website into a diagnosis.
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-black/68">
              The ErnestPath Admission Score is a preliminary website
              diagnostic for coaching and training institutes. It reviews
              visible signals related to discovery, course clarity, technical
              readiness and the enquiry journey, then organises the findings
              into practical priorities. It helps identify where a deeper
              expert review should begin; it is not a guarantee of rankings,
              lead volume or admissions.
            </p>

            <form
              action="/tools/admission-score"
              method="get"
              className="mt-9 max-w-2xl"
              aria-label="Start the Admission Score"
            >
              <label htmlFor="diagnostic-url" className="text-sm font-bold">
                Your coaching institute website
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
                <div className="flex min-h-14 items-center gap-3 border-2 border-black bg-[#f3f0e8] px-4">
                  <Link2 aria-hidden="true" size={18} className="shrink-0 text-black/45" />
                  <input
                    id="diagnostic-url"
                    name="website"
                    type="url"
                    inputMode="url"
                    autoComplete="url"
                    placeholder="https://yourinstitute.com"
                    required
                    className="min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-black/35"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex min-h-14 items-center justify-between gap-6 bg-[#10110f] px-6 font-semibold text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  Start free diagnostic
                  <ArrowUpRight
                    aria-hidden="true"
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
              <p className="mt-3 text-sm leading-6 text-black/52">
                Submit only a public website URL. Do not enter passwords,
                student information or private institute data.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 35 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative border-2 border-black bg-[#f3f0e8] p-5 shadow-[18px_18px_0_#10110f] sm:p-7"
          >
            <div className="flex items-center justify-between gap-5 border-b border-black/15 pb-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center bg-[#10110f] text-[#c9ff3d]">
                  <Gauge aria-hidden="true" size={19} />
                </span>
                <div>
                  <p className="font-semibold">Admission readiness review</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-black/40">
                    Visible website signals
                  </p>
                </div>
              </div>
              <span className="hidden items-center gap-2 text-xs font-bold sm:flex">
                <i className="h-2 w-2 rounded-full bg-[#c9ff3d] ring-4 ring-[#c9ff3d]/25" />
                PRELIMINARY
              </span>
            </div>

            <div className="relative mt-6 overflow-hidden">
              {!reduced && (
                <motion.div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 z-10 h-px bg-[#10110f] shadow-[0_0_14px_3px_rgba(201,255,61,.9)]"
                  animate={{ top: ["2%", "98%", "2%"] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <div className="grid gap-px bg-black/12 sm:grid-cols-2">
                {reviewAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <motion.article
                      key={area.title}
                      initial={reduced ? false : { opacity: 0, y: 16 }}
                      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: 0.18 + index * 0.07 }}
                      className="bg-[#f3f0e8] p-5"
                    >
                      <div className="flex items-center justify-between">
                        <Icon aria-hidden="true" size={18} />
                        <span className="text-xs font-bold text-black/30">0{index + 1}</span>
                      </div>
                      <h3 className="mt-7 text-lg font-semibold">{area.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-black/56">{area.text}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-black/15 pt-6">
              <div className="flex items-center gap-2">
                <ScanLine aria-hidden="true" size={18} />
                <h3 className="font-semibold">What you receive</h3>
              </div>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {outputs.map((output) => (
                  <li key={output} className="flex gap-3 text-sm leading-6 text-black/62">
                    <Check aria-hidden="true" size={15} className="mt-1 shrink-0" />
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-px bg-black/20 sm:grid-cols-3">
          {[
            ["01 · Provide", "Enter the public URL you want reviewed."],
            ["02 · Examine", "The diagnostic organises relevant visible signals."],
            ["03 · Prioritise", "Use the findings to choose a sensible next investigation."],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="bg-[#c9ff3d] p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em]">{title}</p>
              <p className="mt-3 text-sm leading-6 text-black/62">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
