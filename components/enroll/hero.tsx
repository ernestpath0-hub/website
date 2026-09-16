"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpenText,
  CalendarClock,
  Check,
  CircleHelp,
  ClipboardCheck,
  UsersRound,
} from "lucide-react";

const livePath = [
  "Scheduled instructor-led learning",
  "Live doubt clarification",
  "Project review and revision guidance",
  "A defined learning sequence and accountability",
] as const;

const freePath = [
  "Day-wise self-learning direction",
  "MERN concepts in a connected order",
  "Project and portfolio expectations",
  "No live-class enrollment required",
] as const;

const confirmBeforeJoining = [
  "Upcoming batch dates and class timings",
  "Total fee and payment conditions",
  "Batch size and support availability",
  "Recording, attendance and missed-class rules",
  "Refund, cancellation and transfer policy",
  "Required laptop, software and prerequisites",
] as const;

export function EnrollHero() {
  const reduced = useReducedMotion();
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <main id="main-content" className="overflow-hidden bg-[#f3f0e8] text-[#10110f]">
      <section
        aria-labelledby="enroll-title"
        className="relative min-h-[920px] bg-[#10110f] pb-24 pt-36 text-[#f3f0e8] lg:pt-44"
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
        <motion.div
          aria-hidden="true"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -right-72 top-12 h-[48rem] w-[48rem] rounded-full border border-[#c9ff3d]/18"
        />

        <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <motion.p
                initial={reduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/55"
              >
                <span className="h-2 w-2 rounded-full bg-[#c9ff3d]" />
                ErnestPath Academy · Choose your learning path
              </motion.p>

              <motion.h1
                id="enroll-title"
                initial={reduced ? false : { opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease }}
                className="mt-8 max-w-[72rem] text-[clamp(3.9rem,8vw,8.8rem)] font-semibold leading-[0.84] tracking-[-0.08em]"
              >
                Learn live.<br />Or learn free.<br />Keep the path{" "}
                <span className="font-serif font-normal italic text-[#c9ff3d]">clear.</span>
              </motion.h1>
            </div>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease }}
              className="border-l-2 border-[#c9ff3d] pl-6"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.035em]">
                What can learners choose at ErnestPath Academy?
              </h2>
              <p className="mt-4 text-lg leading-8 text-white/58">
                Graduates and working professionals can ask about guided live
                MERN-stack classes with scheduled support, or follow the free
                self-guided Academy learning path at their own pace. The free
                path does not require payment or live-class enrollment.
              </p>
              <a
                href="#learning-options"
                className="group mt-7 inline-flex items-center gap-3 font-semibold text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
              >
                Compare both paths
                <ArrowDown aria-hidden="true" size={17} className="transition-transform group-hover:translate-y-1" />
              </a>
            </motion.div>
          </div>

          <div id="learning-options" className="mt-16 grid scroll-mt-28 gap-5 lg:grid-cols-2">
            <LearningPathCard
              variant="live"
              eyebrow="Path 01 · Guided"
              title="Live MERN-stack classes"
              description="For learners who want scheduled instruction, direct clarification, review and external accountability alongside their practice."
              items={livePath}
            />
            <LearningPathCard
              variant="free"
              eyebrow="Path 02 · Self-guided"
              title="Free day-wise learning"
              description="For learners who can study independently and want a structured order for concepts, practice, projects and portfolio evidence."
              items={freePath}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="before-joining-title" className="py-24 lg:py-28">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] gap-12 px-2 sm:px-5 lg:grid-cols-[0.65fr_1.35fr] lg:px-10">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/42">
              Before joining a live batch
            </p>
            <h2 id="before-joining-title" className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.055em] sm:text-5xl">
              Ask for the complete commitment—not only the headline.
            </h2>
            <p className="mt-6 text-base leading-8 text-black/58">
              Sending an enquiry does not reserve a seat or create a payment
              obligation. Review the confirmed batch information first.
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.72, delay: 0.05, ease }}
            className="border border-black/14 bg-white/45 p-7 sm:p-9"
          >
            <div className="flex items-center gap-3 border-b border-black/12 pb-6">
              <ClipboardCheck aria-hidden="true" size={22} />
              <p className="text-lg font-semibold">Confirm these details in writing</p>
            </div>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {confirmBeforeJoining.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-7 text-black/60">
                  <CircleHelp aria-hidden="true" size={17} className="mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 flex items-start gap-3 border-t border-black/12 pt-6 text-sm leading-7 text-black/50">
              <CalendarClock aria-hidden="true" size={17} className="mt-1 shrink-0" />
              Batch schedules and availability can change. The confirmed details
              shared for the specific batch should govern your decision.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function LearningPathCard({
  variant,
  eyebrow,
  title,
  description,
  items,
}: {
  variant: "live" | "free";
  eyebrow: string;
  title: string;
  description: string;
  items: readonly string[];
}) {
  const reduced = useReducedMotion();
  const live = variant === "live";
  const Icon = live ? UsersRound : BookOpenText;

  return (
    <motion.article
      initial={reduced ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: live ? 0.28 : 0.36, ease: [0.22, 1, 0.36, 1] }}
      className={`flex min-h-[31rem] flex-col p-7 sm:p-10 ${
        live ? "bg-[#c9ff3d] text-black" : "border border-white/16 bg-white/[0.045]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs font-bold uppercase tracking-[0.18em] ${live ? "text-black/50" : "text-white/40"}`}>
          {eyebrow}
        </span>
        <Icon aria-hidden="true" size={25} className={live ? undefined : "text-[#c9ff3d]"} />
      </div>
      <h2 className="mt-12 text-4xl font-semibold leading-[1] tracking-[-0.055em] sm:text-5xl">{title}</h2>
      <p className={`mt-5 max-w-2xl text-base leading-8 ${live ? "text-black/62" : "text-white/52"}`}>
        {description}
      </p>
      <ul className="mt-7 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className={`flex gap-3 text-sm leading-7 ${live ? "text-black/66" : "text-white/58"}`}>
            <Check aria-hidden="true" size={15} className={`mt-1 shrink-0 ${live ? "" : "text-[#c9ff3d]"}`} />
            {item}
          </li>
        ))}
      </ul>
      {live ? (
        <a
          href="mailto:hello@ernestpath.com?subject=Live%20MERN%20class%20enrollment&body=Hi%20ErnestPath%2C%0A%0AI%20want%20details%20about%20the%20next%20live%20MERN%20batch.%0A%0AName%3A%0ACurrent%20status%3A%20Graduate%20%2F%20Working%20professional%20%2F%20Other%0APrior%20coding%20experience%3A%0APreferred%20class%20time%3A%0A"
          className="group mt-auto inline-flex min-h-14 items-center justify-between gap-8 bg-[#10110f] px-6 font-semibold text-[#f3f0e8] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        >
          Request live-batch details
          <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ) : (
        <Link
          href="/academy#learning-path"
          className="group mt-auto inline-flex min-h-14 items-center justify-between gap-8 border border-white/20 px-6 font-semibold text-white/78 transition-colors hover:border-[#c9ff3d] hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
        >
          Start with the free path
          <ArrowUpRight aria-hidden="true" size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </motion.article>
  );
}
