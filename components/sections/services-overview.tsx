"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Layers3,
  Megaphone,
  Search,
} from "lucide-react";

const services = [
  {
    number: "01",
    eyebrow: "Owned experience",
    title: "Website development",
    href: "/services/website-development",
    icon: Braces,
    answer:
      "Admission-focused website development gives every priority course, branch and campaign a clear destination that can inform visitors, establish trust and capture useful enquiry context.",
    chooseWhen:
      "Choose this when the current website cannot properly explain programmes, support mobile visitors, receive paid traffic or pass structured lead information to the admissions team.",
    ownership: [
      "Information architecture and visitor journeys",
      "Course, branch and campaign page systems",
      "Responsive design, performance and accessibility",
      "Forms, tracking and agreed CRM connections",
    ],
    primarySignal: "More suitable visitors complete meaningful admission actions.",
    notTheGoal: "A visually attractive collection of pages.",
  },
  {
    number: "02",
    eyebrow: "Compounding discovery",
    title: "SEO & AI visibility",
    href: "/services/seo",
    icon: Search,
    answer:
      "SEO for coaching institutes improves how programmes and genuine locations are discovered across Google Search, Google Maps and AI-assisted research over time.",
    chooseWhen:
      "Choose this when students and parents already search for what you teach, but your institute is missing from important course, city, comparison and research-stage results.",
    ownership: [
      "Keyword, intent and competitor research",
      "Local, on-page and technical SEO",
      "Course, location and editorial content",
      "Structured data, authority and answer readiness",
    ],
    primarySignal: "Qualified organic discovery grows across priority topics and locations.",
    notTheGoal: "A ranking report containing unrelated keywords.",
  },
  {
    number: "03",
    eyebrow: "Controlled demand capture",
    title: "Google & Meta Ads",
    href: "/services/ads",
    icon: Megaphone,
    answer:
      "Paid campaign management connects Google, Meta, video or remarketing activity with the appropriate message, landing experience, conversion event and counsellor feedback.",
    chooseWhen:
      "Choose this when a priority intake needs controlled reach or active search demand now, and the institute is prepared to respond to enquiries and share lead-quality outcomes.",
    ownership: [
      "Channel, audience and budget strategy",
      "Campaign structure, message and creative direction",
      "Landing-page and lead-form alignment",
      "Conversion tracking and quality optimisation",
    ],
    primarySignal: "Media spend produces interpretable qualified-lead opportunities.",
    notTheGoal: "The lowest possible cost per form submission.",
  },
];

const connectionPoints = [
  ["Website", "Own the destination and the conversion experience."],
  ["SEO", "Build durable discovery around demonstrated demand."],
  ["Ads", "Capture or create demand within controlled budgets."],
  ["Evidence", "Use one measurement language across all three."],
];

export function ServicesOverview() {
  const reduced = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden bg-[#f3f0e8] py-24 lg:py-32"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_1.38fr]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 22 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              ErnestPath agency services
            </p>
            <p className="mt-5 max-w-md text-lg leading-8 text-black/60">
              Three specialist services address three different constraints.
              Start with the one your current situation requires, or connect
              them through a shared enrollment strategy.
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="services-title"
              className="text-[clamp(3rem,6.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.068em]"
            >
              Choose by constraint—not by trend.
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-black/68">
              ErnestPath provides website development, SEO and paid
              advertising specifically for coaching and training institutes.
              Website work improves the owned decision experience. SEO builds
              durable discovery. Google and Meta campaigns provide controlled
              access to current or potential demand. Each service has a
              separate responsibility, while shared measurement allows them to
              strengthen one another.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 space-y-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.14 }}
                transition={{
                  duration: 0.72,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid overflow-hidden border border-black/12 bg-[#f7f4ed] transition-colors hover:bg-white lg:grid-cols-[0.12fr_0.43fr_0.45fr]"
              >
                <div className="flex items-center justify-between border-b border-black/10 p-6 lg:flex-col lg:items-start lg:border-b-0 lg:border-r lg:p-8">
                  <span className="grid h-14 w-14 place-items-center bg-[#10110f] text-[#c9ff3d] transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <span className="text-xs font-bold text-black/30">
                    {service.number}
                  </span>
                </div>

                <div className="border-b border-black/10 p-7 lg:border-b-0 lg:border-r lg:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/42">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-[-0.052em]">
                    {service.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-black/68">
                    {service.answer}
                  </p>

                  <div className="mt-7 border-l-2 border-[#c9ff3d] pl-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
                      When this is the right starting point
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black/60">
                      {service.chooseWhen}
                    </p>
                  </div>

                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-3 border-b border-black pb-1 font-semibold"
                    aria-label={`Explore ${service.title} for coaching institutes`}
                  >
                    Explore the complete service
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>

                <div className="flex flex-col p-7 lg:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                    What the service owns
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.ownership.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-6 text-black/62">
                        <Check aria-hidden="true" size={15} className="mt-1 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-auto pt-8">
                    <div className="border-t border-black/10 pt-5">
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
                        Useful success signal
                      </dt>
                      <dd className="mt-2 text-sm font-medium leading-6">
                        {service.primarySignal}
                      </dd>
                    </div>
                    <div className="mt-5 border-t border-black/10 pt-5">
                      <dt className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
                        Not the end goal
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-black/58">
                        {service.notTheGoal}
                      </dd>
                    </div>
                  </dl>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid gap-8 bg-[#10110f] p-7 text-[#f3f0e8] sm:p-9 lg:grid-cols-[0.85fr_1.15fr]"
          aria-labelledby="connected-package-title"
        >
          <div>
            <div className="flex items-center gap-3">
              <Layers3 aria-hidden="true" size={20} className="text-[#c9ff3d]" />
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Enrollment Growth Package
              </p>
            </div>
            <h3
              id="connected-package-title"
              className="mt-5 text-3xl font-semibold tracking-[-0.045em]"
            >
              When the constraint crosses service boundaries.
            </h3>
            <p className="mt-5 max-w-xl leading-7 text-white/55">
              The connected engagement is useful when a priority course needs
              a better destination, stronger organic discovery and controlled
              paid demand at the same time. It uses one priority plan and one
              evidence language; it is not three retainers bundled without a
              shared decision.
            </p>
          </div>

          <ol className="grid gap-px bg-white/10 sm:grid-cols-2">
            {connectionPoints.map(([title, text], index) => (
              <li key={title} className="bg-[#10110f] p-5">
                <span className="text-xs font-bold text-[#c9ff3d]">
                  0{index + 1}
                </span>
                <strong className="mt-4 block">{title}</strong>
                <p className="mt-2 text-sm leading-6 text-white/48">{text}</p>
              </li>
            ))}
          </ol>
        </motion.aside>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 border-l-4 border-[#c9ff3d] bg-white/55 p-6 sm:flex-row sm:items-center">
          <p className="max-w-4xl text-sm leading-7 text-black/62">
            <strong className="text-black">Unsure where to start?</strong> The
            free Admission Score reviews visible website and discovery signals.
            A full recommendation still depends on your course priorities,
            market, existing data and admissions operation.
          </p>
          <Link
            href="/tools/admission-score"
            className="group inline-flex shrink-0 items-center gap-3 font-semibold"
          >
            Start the diagnostic
            <ArrowRight
              aria-hidden="true"
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}