"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  CircleCheck,
  FileSearch,
  Globe2,
  Megaphone,
  MessageSquareText,
  Search,
  UsersRound,
} from "lucide-react";

const journey = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    detail: "Search · Maps · AI answers · Ads",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Evaluation",
    detail: "Courses · proof · location · answers",
  },
  {
    number: "03",
    icon: MessageSquareText,
    title: "Enquiry",
    detail: "Form · call · WhatsApp · context",
  },
  {
    number: "04",
    icon: UsersRound,
    title: "Follow-up",
    detail: "Ownership · response · counselling",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Learning",
    detail: "Lead quality · admission · next action",
  },
] as const;

const differences = [
  {
    icon: FileSearch,
    title: "The decision is education-specific",
    text: "A parent or learner may compare course fit, faculty evidence, outcomes, location, schedule, fees, eligibility and counselling before enquiring. The website and campaign must support that decision rather than imitate a generic local-business template.",
  },
  {
    icon: Megaphone,
    title: "Every channel follows one brief",
    text: "Search intent, landing-page claims, ad messages, enquiry fields and measurement should describe the same programme to the same audience. ErnestPath keeps those decisions connected instead of treating websites, SEO and campaigns as unrelated orders.",
  },
  {
    icon: CircleCheck,
    title: "Responsibility stays visible",
    text: "Scope, priorities, dependencies and evidence are discussed directly. Where specialist support is appropriate, that involvement is made explicit; the institute should always know who owns the decision and what is being measured.",
  },
] as const;

const principles = [
  [
    "Diagnose before prescribing",
    "Examine the programme, location, audience, admission cycle, current visibility, website journey, campaigns, tracking and follow-up before recommending more activity.",
  ],
  [
    "Build for a qualified enquiry",
    "Optimise for suitable counselling opportunities with useful context—not the largest possible number of unverified form submissions.",
  ],
  [
    "Separate influence from guarantee",
    "ErnestPath can improve discovery, clarity, conversion paths and measurement. Rankings, lead volume and admissions cannot be guaranteed because demand, competition, pricing and institute operations also matter.",
  ],
] as const;

export function AboutBrand() {
  const reduced = useReducedMotion();
  const reveal = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    whileInView: reduced ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      id="about-ernestpath"
      aria-labelledby="about-ernestpath-title"
      className="relative overflow-hidden border-y border-black/10 bg-[#10110f] py-24 text-[#f3f0e8] lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <motion.aside {...reveal()} className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center justify-between border-b border-white/14 pb-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9ff3d]">
                The connected view
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/32">
                One system
              </span>
            </div>

            <div className="relative mt-5">
              <motion.div
                aria-hidden="true"
                initial={reduced ? false : { scaleY: 0 }}
                whileInView={reduced ? undefined : { scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-7 left-[1.45rem] top-7 w-px origin-top bg-[#c9ff3d]/30"
              />

              <ol className="space-y-3" aria-label="Connected enrollment journey">
                {journey.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <motion.li
                      key={stage.number}
                      {...reveal(0.08 + index * 0.055)}
                      className="relative flex items-center gap-4 border border-white/12 bg-[#10110f]/90 p-4"
                    >
                      <span
                        className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center ${
                          index === journey.length - 1
                            ? "bg-[#c9ff3d] text-black"
                            : "border border-[#c9ff3d]/35 bg-[#10110f] text-[#c9ff3d]"
                        }`}
                      >
                        <Icon aria-hidden="true" size={19} />
                      </span>
                      <span className="min-w-0">
                        <strong className="block text-base">{stage.title}</strong>
                        <span className="mt-1 block text-sm leading-6 text-white/42">
                          {stage.detail}
                        </span>
                      </span>
                      <span className="ml-auto text-xs font-bold text-white/24" aria-hidden="true">
                        {stage.number}
                      </span>
                    </motion.li>
                  );
                })}
              </ol>
            </div>

            <p className="mt-6 border-l-2 border-[#c9ff3d] pl-5 text-sm leading-7 text-white/48">
              This is a specialist operating model, not a claim of unlimited
              capacity. Scope and timelines are set around what can be delivered
              responsibly.
            </p>
          </motion.aside>

          <div>
            <motion.div {...reveal(0.05)}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Why coaching institutes specifically
              </p>
              <h2
                id="about-ernestpath-title"
                className="mt-7 text-[clamp(3rem,6.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.068em]"
              >
                Why does ErnestPath specialise in coaching institutes?
              </h2>
              <p className="mt-8 max-w-4xl text-xl leading-9 text-white/68">
                ErnestPath specialises in coaching and training institutes
                because enrollment growth is a connected education decision—not
                a collection of isolated marketing tasks. Course discovery,
                parent and learner questions, local trust, page experience,
                enquiry context, counsellor follow-up and admission measurement
                must support one another.
              </p>
              <p className="mt-6 max-w-4xl text-lg leading-8 text-white/50">
                The service brings website development, SEO and paid campaigns
                under one working model. That creates fewer gaps between what an
                ad promises, what a course page explains, what an enquiry records
                and what the institute can learn from the result.
              </p>
            </motion.div>

            <div className="mt-14 grid gap-px bg-white/14 md:grid-cols-3">
              {differences.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    {...reveal(0.08 + index * 0.05)}
                    className="bg-[#10110f] p-7 lg:p-8"
                  >
                    <Icon aria-hidden="true" size={22} className="text-[#c9ff3d]" />
                    <h3 className="mt-10 text-xl font-semibold tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-8 text-white/48">{item.text}</p>
                  </motion.article>
                );
              })}
            </div>

            <motion.div {...reveal(0.12)} className="mt-14 border-t border-white/15">
              <p className="py-6 text-xs font-bold uppercase tracking-[0.18em] text-white/38">
                How ErnestPath works
              </p>
              <dl>
                {principles.map(([term, description], index) => (
                  <div
                    key={term}
                    className="grid gap-3 border-t border-white/12 py-7 sm:grid-cols-[2.5rem_0.72fr_1.28fr] sm:gap-7"
                  >
                    <span className="text-xs font-bold text-[#c9ff3d]" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <dt className="text-lg font-semibold">{term}</dt>
                    <dd className="max-w-2xl leading-8 text-white/50">{description}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>

            <motion.div {...reveal(0.15)} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tools/admission-score"
                className="group inline-flex min-h-14 items-center justify-between gap-7 bg-[#c9ff3d] px-6 font-semibold text-black transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
              >
                Diagnose your enrollment journey
                <ArrowUpRight
                  aria-hidden="true"
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
              <Link
                href="/services/website-development"
                className="inline-flex min-h-14 items-center justify-center border border-white/20 px-6 font-semibold text-white/68 transition-colors hover:border-white/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore the service model
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
