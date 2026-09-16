"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CircleAlert,
  EyeOff,
  FileQuestion,
  Gauge,
  SearchX,
  UserRoundX,
} from "lucide-react";

const problems = [
  {
    number: "01",
    stage: "Discovery",
    title: "The right students cannot find you.",
    direct:
      "Your institute is absent or unclear when students and parents search for a course, compare nearby coaching centres or ask an AI assistant for recommendations.",
    symptoms: [
      "Priority courses have no dedicated search-ready pages",
      "Google Maps visibility is weak outside branded searches",
      "Location and course information is inconsistent",
      "Competitors answer research questions before you do",
    ],
    impact:
      "Your institute enters the decision late—or never enters it—while competitors receive the first visit and the first enquiry.",
    solution: "SEO & AI visibility",
    href: "/services/seo",
    icon: SearchX,
  },
  {
    number: "02",
    stage: "Decision",
    title: "Visitors arrive, but cannot evaluate you.",
    direct:
      "The website does not quickly explain which course fits, how the programme works, why the institute is credible or what the visitor should do next.",
    symptoms: [
      "The homepage tries to describe every programme",
      "Course details live inside posters, PDFs or WhatsApp",
      "Generic claims appear without useful evidence",
      "Mobile pages are slow, crowded or difficult to navigate",
    ],
    impact:
      "Interested visitors return to Google, compare a clearer competitor or contact the admissions team with basic questions the website should have answered.",
    solution: "Admission-focused websites",
    href: "/services/website-development",
    icon: FileQuestion,
  },
  {
    number: "03",
    stage: "Enquiry",
    title: "Lead volume looks better than lead intent.",
    direct:
      "Campaigns and forms collect contact details without enough message, context or qualification to create a productive counselling conversation.",
    symptoms: [
      "Every advertisement sends traffic to the homepage",
      "Forms capture only a name and phone number",
      "Cheap leads are reported without contactability data",
      "Campaigns optimise for submissions instead of suitability",
    ],
    impact:
      "Counsellors spend time on accidental, irrelevant or poorly informed leads while management cannot identify which activity creates genuine opportunities.",
    solution: "Google & Meta Ads",
    href: "/services/ads",
    icon: UserRoundX,
  },
  {
    number: "04",
    stage: "Follow-up",
    title: "Marketing evidence stops at the form.",
    direct:
      "The institute knows how many enquiries arrived, but not which source produced qualified conversations, demos, applications or admissions.",
    symptoms: [
      "Leads move between email, sheets and personal phones",
      "No counsellor clearly owns the next action",
      "Course, source and campaign context is lost",
      "Admission outcomes never return to marketing",
    ],
    impact:
      "Budget decisions rely on platform dashboards and assumptions, while slow or inconsistent follow-up quietly reduces the value of every channel.",
    solution: "Enrollment Growth Package",
    href: "#services",
    icon: EyeOff,
  },
];

const journey = [
  ["Found", "Search, Maps, AI or ads"],
  ["Understood", "Course fit and useful proof"],
  ["Qualified", "Relevant enquiry context"],
  ["Followed up", "Ownership and clear status"],
  ["Measured", "Admission evidence"],
];

export function ProblemSection() {
  const reduced = useReducedMotion();

  return (
    <section
      id="problems"
      aria-labelledby="problem-title"
      className="relative overflow-hidden border-y border-black/10 bg-[#f7f4ed] py-24 lg:py-32"
    >
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 24 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              The enrollment problem
            </p>
            <p className="mt-5 max-w-md text-lg leading-8 text-black/60">
              More traffic cannot repair a journey that loses trust, context or
              ownership between the first search and the admissions desk.
            </p>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              id="problem-title"
              className="text-[clamp(3rem,6.4vw,6.8rem)] font-semibold leading-[0.91] tracking-[-0.068em]"
            >
              Why do coaching institutes struggle to turn digital effort into admissions?
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-black/68">
              Coaching institutes usually lose potential admissions at one or
              more connected stages: they are difficult to discover, their
              website does not support comparison, their campaigns attract
              poorly informed enquiries, or their follow-up process cannot
              connect a lead with an outcome. ErnestPath diagnoses the full
              path before recommending a website, SEO or advertising solution.
            </p>
          </motion.div>
        </div>

        <div
          aria-label="A complete digital admission journey"
          className="relative mt-16 border border-black/12 bg-[#10110f] p-5 text-[#f3f0e8] sm:p-7 lg:p-9"
        >
          <div className="flex items-center gap-3 border-b border-white/10 pb-5">
            <Gauge aria-hidden="true" size={19} className="text-[#c9ff3d]" />
            <h3 className="font-semibold">A healthy enrollment journey</h3>
            <span className="ml-auto hidden text-xs uppercase tracking-[0.16em] text-white/35 sm:block">
              Every stage must pass context forward
            </span>
          </div>

          <ol className="relative mt-7 grid gap-3 lg:grid-cols-5">
            <motion.div
              aria-hidden="true"
              className="absolute left-[10%] right-[10%] top-6 hidden h-px origin-left bg-[#c9ff3d]/40 lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            />
            {journey.map(([title, description], index) => (
              <motion.li
                key={title}
                initial={reduced ? false : { opacity: 0, y: 16 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                className="relative z-10 bg-[#10110f] py-2 lg:text-center"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-full border border-[#c9ff3d]/40 bg-[#10110f] text-xs font-bold text-[#c9ff3d]">
                  0{index + 1}
                </span>
                <strong className="ml-4 text-sm lg:ml-0 lg:mt-5 lg:block">{title}</strong>
                <span className="mt-2 block pl-16 text-sm leading-6 text-white/45 lg:px-2 lg:pl-2">
                  {description}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <motion.article
                key={problem.stage}
                initial={reduced ? false : { opacity: 0, y: 30 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: (index % 2) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex h-full flex-col border border-black/12 bg-[#f3f0e8] p-7 transition-colors hover:bg-white sm:p-9"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <span className="text-xs font-bold text-black/35">{problem.number}</span>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-black/45">
                      {problem.stage} failure
                    </p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center bg-[#10110f] text-[#c9ff3d] transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon aria-hidden="true" size={21} />
                  </span>
                </div>

                <h3 className="mt-10 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl">
                  {problem.title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-black/68">
                  {problem.direct}
                </p>

                <div className="mt-8 border-t border-black/10 pt-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold">
                    <CircleAlert aria-hidden="true" size={16} />
                    What this often looks like
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {problem.symptoms.map((symptom) => (
                      <li key={symptom} className="flex gap-3 text-sm leading-6 text-black/58">
                        <span aria-hidden="true" className="mt-[0.68rem] h-1 w-1 shrink-0 rounded-full bg-black" />
                        {symptom}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-l-2 border-[#c9ff3d] pl-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                    Business impact
                  </p>
                  <p className="mt-2 text-sm leading-7 text-black/62">{problem.impact}</p>
                </div>

                <Link
                  href={problem.href}
                  className="mt-8 inline-flex items-center justify-between gap-5 border-t border-black/10 pt-5 font-semibold"
                >
                  <span>
                    Relevant solution:
                    <span className="ml-2 text-black/55">{problem.solution}</span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    size={17}
                    className="shrink-0 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.aside
          initial={reduced ? false : { opacity: 0, y: 22 }}
          whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-8 grid items-center gap-7 bg-[#c9ff3d] p-7 sm:p-9 lg:grid-cols-[1fr_auto]"
          aria-label="Admission Score diagnostic"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-[-0.035em]">
              Not sure which stage is costing your institute enquiries?
            </h3>
            <p className="mt-3 max-w-3xl leading-7 text-black/62">
              Start with the free Admission Score. It reviews the visible
              discovery and conversion journey so the next recommendation is
              based on an identified gap—not a default service package.
            </p>
          </div>
          <Link
            href="/tools/admission-score"
            className="inline-flex min-h-14 items-center justify-between gap-8 bg-[#10110f] px-6 font-semibold text-white"
          >
            Diagnose your journey
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </motion.aside>
      </div>
    </section>
  );
}
