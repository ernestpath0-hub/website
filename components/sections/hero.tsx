"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  ChevronDown,
  CircleCheck,
  Globe2,
  MousePointerClick,
  Search,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const shell = "mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10";

const journey = [
  [Search, "Discovery", "Search · Maps · AI · Ads"],
  [Globe2, "Evaluation", "Courses · proof · location · answers"],
  [MousePointerClick, "Enquiry", "Form · call · WhatsApp · context"],
  [Users, "Follow-up", "Ownership · response · counselling"],
  [CircleCheck, "Outcome", "Qualified enquiry · admission evidence"],
] as const;

export function Homepage() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative min-h-[860px] overflow-hidden bg-[#10110f] pb-20 pt-36 text-[#f3f0e8] lg:pt-44"
      aria-labelledby="home-title"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -right-[18rem] top-4 h-[48rem] w-[48rem] rounded-full border border-[#c9ff3d]/20"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -right-[10rem] top-36 h-[31rem] w-[31rem] rounded-full border border-white/10"
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),linear-gradient(90deg,rgba(255,255,255,.8) 1px,transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className={`${shell} relative grid items-center gap-16 lg:grid-cols-[1.08fr_.92fr]`}>
        <div>
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[.2em] text-white/60"
          >
            <span className="h-2 w-2 rounded-full bg-[#c9ff3d] shadow-[0_0_0_6px_rgba(201,255,61,.12)]" />
            Coaching institute marketing & enrollment growth
          </motion.p>

          <motion.h1
            id="home-title"
            initial={reduced ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
            className="text-[clamp(4rem,8.3vw,8.8rem)] font-semibold leading-[.84] tracking-[-.078em]"
          >
            Turn digital demand into
            <br />
            <span className="font-serif font-normal italic text-[#c9ff3d]">better admission enquiries.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease }}
            className="mt-9 max-w-2xl text-lg leading-8 text-white/62"
          >
            ErnestPath helps coaching and training institutes improve how prospective students discover,
            evaluate and contact them through admission-focused websites, SEO, Google Ads and Meta Ads.
            The work connects visibility, conversion and lead-quality evidence instead of treating each channel
            as a separate report.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/tools/admission-score"
              className="group inline-flex min-h-14 items-center justify-between gap-6 bg-[#c9ff3d] px-6 font-semibold text-black transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
            >
              Get your free Admission Score
              <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#services"
              className="inline-flex min-h-14 items-center justify-between gap-6 border border-white/20 px-6 font-semibold text-white/75 transition-colors hover:border-[#c9ff3d] hover:text-[#c9ff3d]"
            >
              Explore services
              <ChevronDown size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 40, rotateY: -8 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-full max-w-xl [perspective:1200px]"
          aria-label="Connected enrollment journey"
        >
          <div className="absolute -inset-12 bg-[#c9ff3d]/10 blur-3xl" />
          <div className="relative border border-white/15 bg-white/[.045] p-5 shadow-2xl backdrop-blur-sm sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5 text-xs font-bold uppercase tracking-[.16em] text-white/45">
              <span>Enrollment journey</span>
              <span className="flex items-center gap-2">
                <i className="h-2 w-2 rounded-full bg-[#c9ff3d]" /> Connected
              </span>
            </div>

            <div className="relative mt-5 space-y-3">
              <motion.div
                className="absolute bottom-7 left-6 top-7 w-px bg-[#c9ff3d]/30"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.3, delay: 0.65, ease }}
                style={{ transformOrigin: "top" }}
              />

              {journey.map(([Icon, title, detail], index) => (
                <motion.div
                  key={title}
                  initial={reduced ? false : { opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.4 + index * 0.11, ease }}
                  className="relative flex items-center gap-4 border border-white/10 bg-[#10110f]/70 p-4"
                >
                  <span className={`relative z-10 grid h-12 w-12 shrink-0 place-items-center ${index === 4 ? "bg-[#c9ff3d] text-black" : "border border-[#c9ff3d]/30 bg-[#10110f] text-[#c9ff3d]"}`}>
                    <Icon size={20} />
                  </span>
                  <span>
                    <strong className="block text-base">{title}</strong>
                    <small className="mt-1 block text-sm text-white/45">{detail}</small>
                  </span>
                  <span className="ml-auto text-xs text-white/25">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
