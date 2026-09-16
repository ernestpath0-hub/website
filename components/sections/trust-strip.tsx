"use client";

import { motion, useReducedMotion } from "motion/react";
import { Layers3, MapPin, Target } from "lucide-react";

const signals = [
  {
    value: "1",
    title: "specialist market",
    description:
      "ErnestPath works specifically with coaching institutes, training centres and education businesses.",
    icon: Target,
  },
  {
    value: "3",
    title: "connected growth services",
    description:
      "Admission-focused website development, SEO and Google or Meta advertising work as one measurable system.",
    icon: Layers3,
  },
  {
    value: "India",
    title: "remote delivery",
    description:
      "We support single-location, multi-branch and online institutes across India through a remote-first process.",
    icon: MapPin,
  },
];

export function TrustStrip() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="trust-strip-title"
      className="relative border-y border-black/10 bg-[#f3f0e8]"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid lg:grid-cols-[0.72fr_2.28fr]">
          <div className="flex items-center border-b border-black/10 py-7 lg:border-b-0 lg:border-r lg:py-10 lg:pr-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                Why ErnestPath
              </p>
              <h2 id="trust-strip-title" className="mt-2 max-w-xs text-lg font-semibold leading-7">
                Focused expertise, connected execution.
              </h2>
            </div>
          </div>

          <dl className="grid sm:grid-cols-3">
            {signals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <motion.div
                  key={signal.title}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.09,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative border-b border-black/10 px-0 py-8 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:last:border-r-0 lg:px-9 lg:py-10"
                >
                  <div className="flex items-start justify-between gap-5">
                    <dt className="order-2 mt-1 text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                      {signal.title}
                    </dt>
                    <Icon
                      aria-hidden="true"
                      size={19}
                      strokeWidth={1.8}
                      className="order-1 text-black/65 transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  </div>

                  <dd className="mt-8">
                    <span className="block text-[clamp(2.7rem,4vw,4.8rem)] font-semibold leading-none tracking-[-0.065em]">
                      {signal.value}
                    </span>
                    <span className="mt-5 block max-w-sm text-sm leading-6 text-black/58">
                      {signal.description}
                    </span>
                  </dd>

                  <motion.span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] bg-[#c9ff3d]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.15 + index * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </motion.div>
              );
            })}
          </dl>
        </div>
      </div>
    </section>
  );
}
