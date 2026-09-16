"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { homeFaqs } from "@/lib/home-faqs";

const serviceLinks = [
  ["Website development", "/services/website-development"],
  ["SEO & AI visibility", "/services/seo"],
  ["Google & Meta Ads", "/services/ads"],
  ["Free Admission Score", "/tools/admission-score"],
];

export function HomeFAQ() {
  const reduced = useReducedMotion();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-[#10110f] py-24 text-[#f3f0e8] lg:py-32"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-[34rem] w-[34rem] rounded-full border border-[#c9ff3d]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-44 h-[20rem] w-[20rem] rounded-full border border-white/[0.05]"
      />

      <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.72,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9ff3d]">
              Frequently asked questions
            </p>

            <h2
              id="faq-title"
              className="mt-6 max-w-xl text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.065em]"
            >
              Clear answers before you choose a service.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-white/52">
              Understand how ErnestPath approaches websites, SEO, paid
              advertising, measurement and enrollment growth before deciding
              what your institute actually needs.
            </p>

            {/* Related links */}
            <nav
              aria-label="Related service pages"
              className="mt-10 border-t border-white/14"
            >
              {serviceLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center justify-between gap-5 border-b border-white/14 py-4 text-sm font-semibold text-white/62 transition-colors duration-300 hover:text-[#c9ff3d]"
                >
                  {label}

                  <ArrowUpRight
                    aria-hidden="true"
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{
              duration: 0.76,
              delay: 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-white/16"
          >
            {homeFaqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group border-b border-white/16"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-7 py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d] [&::-webkit-details-marker]:hidden">
                  <span className="grid flex-1 gap-3 sm:grid-cols-[7.5rem_1fr] sm:gap-6">
                    {/* Category */}
                    <span className="pt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#c9ff3d]">
                      {faq.category}
                    </span>

                    {/* Question */}
                    <span className="text-lg font-semibold leading-7 transition-colors duration-300 group-hover:text-[#c9ff3d] sm:text-xl">
                      {faq.question}
                    </span>
                  </span>

                  {/* Plus icon */}
                  <span className="grid h-9 w-9 shrink-0 place-items-center border border-white/20 text-[#c9ff3d] transition-all duration-300 group-hover:border-[#c9ff3d]/60 group-open:rotate-45 group-open:bg-[#c9ff3d] group-open:text-black">
                    <Plus aria-hidden="true" size={17} />
                  </span>
                </summary>

                {/* Answer */}
                <div className="pb-8 sm:pl-[9rem]">
                  <p className="max-w-3xl text-base leading-8 text-white/56">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}