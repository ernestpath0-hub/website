"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Mail,
  ScanSearch,
} from "lucide-react";

const footerNavigation = [
  {
    title: "Agency",
    links: [
      ["Website development", "/services/website-development"],
      ["SEO for coaching institutes", "/services/seo"],
      ["Google & Meta Ads", "/services/ads"],
    ],
  },
  {
    title: "Academy",
    links: [
      ["ErnestPath Academy", "/academy"],
      ["MERN Stack learning", "/academy/mern-stack"],
      ["Digital Marketing for Freelance","/academy/digital-marketing-freelance"]
    ],
  },
  {
    title: "Explore",
    links: [
      ["How ErnestPath works", "/#how-it-works"],
      ["About ErnestPath", "/#about-ernestpath"],
      ["Free Admission Score", "/tools/admission-score"],
      ["Frequently asked questions", "/#faq"],
    ],
  },
] as const;

export function Footer() {
  const reduced = useReducedMotion();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-[#10110f] text-[#f3f0e8]"
      aria-label="ErnestPath footer"
    >
      {/* Decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-72 -top-72 h-[42rem] w-[42rem] rounded-full border border-[#c9ff3d]/[0.07]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 -top-36 h-[24rem] w-[24rem] rounded-full border border-white/[0.04]"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 pb-8 pt-20 sm:px-5 lg:px-10 lg:pt-24">

        {/* =====================================
            TOP AREA
        ===================================== */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-14 border-b border-white/14 pb-16 lg:grid-cols-[1.18fr_0.82fr] lg:gap-20"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="ErnestPath home"
              className="inline-flex items-baseline text-[clamp(2.3rem,5vw,4.8rem)] font-semibold leading-none tracking-[-0.075em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
            >
              ernest
              <span className="text-[#c9ff3d]">path</span>
              <span className="text-[#c9ff3d]">.</span>
            </Link>

            <p className="mt-7 max-w-2xl text-xl leading-9 text-white/58">
              ErnestPath helps coaching and training institutes grow through
              better websites, search visibility and paid advertising while
              helping learners build practical development skills through
              ErnestPath Academy.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="border border-white/14 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                Agency
              </span>

              <span className="border border-[#c9ff3d]/35 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#c9ff3d]">
                Academy
              </span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="border-l-2 border-[#c9ff3d] pl-6 sm:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9ff3d]">
              Talk to ErnestPath
            </p>

            <p className="mt-5 max-w-xl text-2xl font-semibold leading-9 tracking-[-0.035em]">
              Running an institute or exploring practical MERN Stack learning?
              Start with the part of ErnestPath built for you.
            </p>

            <a
              href="mailto:ernestpath0@gmail.com?subject=ErnestPath%20enquiry"
              className="group mt-8 inline-flex min-h-14 items-center justify-between gap-8 bg-[#c9ff3d] px-6 font-semibold text-black transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
            >
              <span className="flex items-center gap-3">
                <Mail aria-hidden="true" size={18} />
                Email ErnestPath
              </span>

              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* =====================================
            NAVIGATION
        ===================================== */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          {footerNavigation.map((column, columnIndex) => (
            <motion.nav
              key={column.title}
              aria-label={`${column.title} footer navigation`}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.62,
                delay: columnIndex * 0.06,
              }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/34">
                {column.title}
              </p>

              <ul className="mt-6 space-y-4">
                {column.links.map(([label, href]) => (
                  <li key={`${label}-${href}`}>
                    <Link
                      href={href}
                      className="group inline-flex items-center gap-3 text-base text-white/58 transition-colors duration-300 hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
                    >
                      {label}

                      <ArrowUpRight
                        aria-hidden="true"
                        size={14}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          ))}

          {/* Contact */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.62,
              delay: 0.18,
            }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/34">
              Contact
            </p>

            <address className="mt-6 not-italic">
              <a
                href="mailto:ernestpath0@gmail.com"
                className="inline-block break-all text-base font-semibold text-white/68 transition-colors duration-300 hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
              >
                ernestpath0@gmail.com
              </a>

              <p className="mt-4 text-base leading-7 text-white/48">
                Remote-first from India.
              </p>

              <p className="mt-2 text-sm leading-6 text-white/36">
                Supporting coaching institutes across India and learners through
                ErnestPath Academy.
              </p>
            </address>
          </motion.div>
        </div>

        {/* =====================================
            FEATURE LINKS
        ===================================== */}
        <div className="grid gap-px border-y border-white/14 bg-white/14 sm:grid-cols-2">
          <Link
            href="/tools/admission-score"
            className="group flex items-center justify-between gap-6 bg-[#10110f] px-5 py-5 transition-colors hover:bg-white/[0.035] sm:px-7"
          >
            <span className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center border border-[#c9ff3d]/30 text-[#c9ff3d]">
                <ScanSearch aria-hidden="true" size={18} />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/30">
                  For institutes
                </span>

                <span className="mt-1 block font-semibold">
                  Check your Admission Score
                </span>
              </span>
            </span>

            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="text-[#c9ff3d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="/academy"
            className="group flex items-center justify-between gap-6 bg-[#10110f] px-5 py-5 transition-colors hover:bg-white/[0.035] sm:px-7"
          >
            <span className="flex items-center gap-4">
              <span className="grid h-10 w-10 place-items-center border border-[#c9ff3d]/30 text-[#c9ff3d]">
                <Code2 aria-hidden="true" size={18} />
              </span>

              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-white/30">
                  For learners
                </span>

                <span className="mt-1 block font-semibold">
                  Explore ErnestPath Academy
                </span>
              </span>
            </span>

            <ArrowUpRight
              aria-hidden="true"
              size={17}
              className="text-[#c9ff3d] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* =====================================
            BOTTOM BAR
        ===================================== */}
        <div className="flex flex-col gap-4 py-6 text-sm text-white/34 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} ErnestPath. All rights reserved.</p>

          <p>
            Agency for institutes · Academy for learners
          </p>
        </div>

        {/* =====================================
            LARGE WORDMARK
        ===================================== */}
        <motion.p
          aria-hidden="true"
          initial={reduced ? false : { opacity: 0, y: 45 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="select-none border-t border-white/10 pt-7 text-center text-[clamp(4.2rem,14.6vw,14rem)] font-semibold leading-[0.72] tracking-[-0.09em] text-white/[0.055]"
        >
          ERNESTPATH
        </motion.p>
      </div>
    </footer>
  );
}