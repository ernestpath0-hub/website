"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Mail, ScanSearch } from "lucide-react";

const nextSteps = [
  ["01", "Share the starting point", "Use the Admission Score or email your website, priority course and current concern."],
  ["02", "Identify the constraint", "Separate website, search, campaign and lead-handling issues before choosing a service."],
  ["03", "Choose the useful next move", "Continue independently or discuss a clearly scoped ErnestPath engagement."],
];

export function FinalCTA() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="final-cta-title"
      className="bg-[#f3f0e8] px-4 py-4"
    >
      <div className="relative mx-auto max-w-[92rem] overflow-hidden bg-[#c9ff3d]">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 hidden text-[28rem] font-semibold leading-none tracking-[-0.1em] text-black/[0.055] lg:block"
          initial={reduced ? false : { opacity: 0, x: 70, rotate: -8 }}
          whileInView={reduced ? undefined : { opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          ↗
        </motion.div>

        <div className="relative grid lg:grid-cols-[1.17fr_0.83fr]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.76, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 py-16 sm:px-10 lg:px-14 lg:py-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/48">
              Your next useful step
            </p>
            <h2
              id="final-cta-title"
              className="mt-6 max-w-5xl text-[clamp(3.4rem,7vw,7.4rem)] font-semibold leading-[0.87] tracking-[-0.075em]"
            >
              Find the leak before adding more traffic.
            </h2>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-black/67">
              Start with a free review of the digital admission journey. The
              purpose is to identify whether the next priority is your website,
              Google and AI visibility, paid acquisition or the handoff after
              an enquiry—not to force every institute into the same package.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tools/admission-score"
                className="group inline-flex min-h-16 items-center justify-between gap-8 bg-[#10110f] px-7 font-semibold text-white transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <span className="flex items-center gap-3">
                  <ScanSearch aria-hidden="true" size={19} />
                  Get the free Admission Score
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={19}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <a
                href="mailto:ernestpath0@gmail.com?subject=ErnestPath%20institute%20growth%20enquiry"
                className="group inline-flex min-h-16 items-center justify-between gap-8 border border-black/28 px-7 font-semibold transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <span className="flex items-center gap-3">
                  <Mail aria-hidden="true" size={19} />
                  Email Ernestpath
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  size={18}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <address className="mt-5 text-sm not-italic text-black/55">
              Prefer email? Write to{" "}
              <a className="font-semibold underline underline-offset-4" href="mailto:hello@ernestpath.com">
                ernestpath0@gmail.com
              </a>
              .
            </address>
          </motion.div>

          <motion.aside
            initial={reduced ? false : { opacity: 0, x: 32 }}
            whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-black/20 bg-[#10110f] p-7 text-[#f3f0e8] sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
            aria-label="What happens next"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9ff3d]">
              What happens next
            </p>
            <ol className="mt-7 border-t border-white/14">
              {nextSteps.map(([number, title, description]) => (
                <li key={number} className="grid grid-cols-[2.4rem_1fr] gap-4 border-b border-white/14 py-6">
                  <span className="text-xs font-bold text-[#c9ff3d]" aria-hidden="true">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/50">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-7 text-sm leading-7 text-white/42">
              The diagnostic is a starting point, not a performance guarantee.
              Any paid engagement is proposed separately with an agreed scope.
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}