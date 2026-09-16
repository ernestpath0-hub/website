"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  ArrowDown,
  Brackets,
  CircleCheck,
  Compass,
  FlaskConical,
  Layers3,
  MessageSquareMore,
  ScanSearch,
} from "lucide-react";

const stages = [
  {
    number: "01",
    verb: "Establish",
    title: "Create one version of the truth",
    explanation:
      "We begin with evidence the institute already has: priority courses, batch capacity, seasonality, search visibility, campaign history, enquiry sources, counsellor notes and admission outcomes. Missing or unreliable data is labelled instead of silently converted into certainty.",
    question: "What is happening now—and what do we only assume?",
    output:
      "A baseline that separates known facts, data gaps and working assumptions.",
    icon: ScanSearch,
  },
  {
    number: "02",
    verb: "Constrain",
    title: "Choose the bottleneck worth solving",
    explanation:
      "We do not attempt to improve every course, city and channel at once. The next cycle focuses on one commercially meaningful constraint that ErnestPath can influence and the institute can support operationally.",
    question: "Which single constraint matters most to the next admission decision?",
    output:
      "A prioritised problem, a defined audience and a clear boundary for the work.",
    icon: Compass,
  },
  {
    number: "03",
    verb: "Frame",
    title: "Turn the priority into a testable decision",
    explanation:
      "Before production begins, we state what will change, for whom, why it may improve the journey and which evidence could confirm or challenge the decision. This prevents design preferences and platform suggestions from becoming strategy by default.",
    question: "What should change if our reasoning is correct?",
    output:
      "A written hypothesis, decision criteria and an agreed measurement plan.",
    icon: FlaskConical,
  },
  {
    number: "04",
    verb: "Ship",
    title: "Release one complete intervention",
    explanation:
      "The selected work is delivered with its dependencies intact. A landing page includes the correct message and tracking; a local search initiative includes accurate branch information; an enquiry workflow carries useful context to the admissions team.",
    question: "What is the smallest complete release that can produce evidence?",
    output:
      "A quality-checked intervention with ownership, instrumentation and a launch record.",
    icon: Layers3,
  },
  {
    number: "05",
    verb: "Learn",
    title: "Bring admission reality back into the next cycle",
    explanation:
      "Search response, page behaviour and platform results are reviewed beside counsellor feedback and downstream status. The finding may support expansion, require a correction or show that the original assumption was wrong.",
    question: "What did the market and the admissions team actually teach us?",
    output:
      "A decision log: keep, improve, stop or investigate—followed by the next priority.",
    icon: Activity,
  },
];

const principles = [
  {
    title: "One accountable priority",
    text: "Everyone can identify the current constraint, owner and decision deadline.",
    icon: CircleCheck,
  },
  {
    title: "One shared definition",
    text: "Terms such as enquiry, qualified lead and admission mean the same thing in marketing and counselling.",
    icon: Brackets,
  },
  {
    title: "One feedback conversation",
    text: "Campaign and website evidence is reviewed with the people who speak to prospective students.",
    icon: MessageSquareMore,
  },
];

export function Methodology() {
  const reduced = useReducedMotion();

  return (
    <section
      id="method"
      aria-labelledby="methodology-title"
      className="relative overflow-hidden bg-[#10110f] py-24 text-[#f3f0e8] lg:py-32"
    >
      <span id="how-it-works" className="absolute -top-24" aria-hidden="true" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-24 h-[42rem] w-[42rem] rounded-full border border-[#c9ff3d]/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-52 h-[25rem] w-[25rem] rounded-full border border-white/[0.06]"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.64fr_1.36fr]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              The ErnestPath decision loop
            </p>
            <p className="mt-5 max-w-md text-lg leading-8 text-white/52">
              This is how we decide what to do next. The service sections
              explain what we deliver; this method explains how we avoid
              disconnected work and repeated guesswork.
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="methodology-title"
              className="text-[clamp(3rem,6.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.068em]"
            >
              Evidence before activity. One constraint at a time.
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-white/62">
              The ErnestPath methodology is a repeating decision process used
              to reduce waste and make each growth cycle interpretable. We
              establish a reliable baseline, select the most valuable
              constraint, define a testable decision, release a complete
              intervention and use real admission feedback to determine the
              next move.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.28fr_0.72fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Method summary">
            <div className="border border-white/12 bg-white/[0.035] p-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/38">
                  One cycle
                </span>
                <span className="text-xs font-bold text-[#c9ff3d]">01—05</span>
              </div>
              <ol className="mt-5 space-y-1">
                {stages.map((stage, index) => (
                  <li key={stage.verb} className="flex items-center gap-4 py-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-[#c9ff3d]/25 text-[0.68rem] font-bold text-[#c9ff3d]">
                      {stage.number}
                    </span>
                    <span className="text-sm font-semibold">{stage.verb}</span>
                    {index < stages.length - 1 && (
                      <ArrowDown aria-hidden="true" size={13} className="ml-auto text-white/20" />
                    )}
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-white/42">
                The loop repeats only after the previous cycle produces a
                documented decision. More activity is not automatically progress.
              </p>
            </div>
          </aside>

          <ol className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute bottom-12 left-[1.47rem] top-12 w-px origin-top bg-[#c9ff3d]/30 sm:left-[2.22rem]"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.li
                  key={stage.verb}
                  initial={reduced ? false : { opacity: 0, x: 28 }}
                  whileInView={reduced ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative grid gap-5 border-b border-white/10 py-9 pl-16 first:pt-0 sm:pl-24 lg:grid-cols-[0.32fr_0.68fr]"
                >
                  <span className="absolute left-0 top-9 z-10 grid h-12 w-12 place-items-center rounded-full border border-[#c9ff3d]/35 bg-[#10110f] text-[#c9ff3d] transition-colors duration-300 group-hover:bg-[#c9ff3d] group-hover:text-black sm:h-[4.5rem] sm:w-[4.5rem]">
                    <Icon aria-hidden="true" size={21} />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9ff3d]">
                      {stage.number} · {stage.verb}
                    </p>
                    <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.045em]">
                      {stage.title}
                    </h3>
                  </div>

                  <div>
                    <p className="leading-8 text-white/58">{stage.explanation}</p>
                    <div className="mt-6 grid gap-px bg-white/10 sm:grid-cols-2">
                      <div className="bg-[#10110f] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/32">
                          Decision question
                        </p>
                        <p className="mt-3 text-sm font-medium leading-6 text-white/75">
                          {stage.question}
                        </p>
                      </div>
                      <div className="bg-[#10110f] p-5">
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/32">
                          Cycle output
                        </p>
                        <p className="mt-3 text-sm font-medium leading-6 text-white/75">
                          {stage.output}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="mt-16 border-t border-white/12 pt-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/38">
            Three rules that keep the loop useful
          </p>
          <div className="mt-7 grid gap-px bg-white/10 md:grid-cols-3">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.article
                  key={principle.title}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-[#10110f] p-7"
                >
                  <Icon aria-hidden="true" size={20} className="text-[#c9ff3d]" />
                  <h3 className="mt-8 text-xl font-semibold">{principle.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/50">{principle.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
