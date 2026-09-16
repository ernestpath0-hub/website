import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";

const phases = [
  {
    title: "Web foundations & JavaScript",
    effort: "60–80 hours",
    entry: "Basic computer use; no framework knowledge required.",
    purpose: "Understand what the browser does before introducing React.",
    topics: [
      "Setup: editor, terminal, files, npm basics and browser developer tools.",
      "Semantic HTML, accessible forms, labels, keyboard navigation and meaningful document structure.",
      "CSS box model, layout, Flexbox, Grid and responsive interfaces.",
      "JavaScript values, functions, scope, arrays, objects and problem decomposition.",
      "DOM events, form validation, modules, promises, async/await and fetching data.",
      "Git commits, branches, pull requests, merge conflicts and a useful README.",
    ],
    build: "A responsive course-discovery page with filtering and an enquiry form. Use fictional course data, clear validation and loading, empty and error states.",
    gate: "Build a small feature from a written requirement, explain the event flow and fix a bug without copying a complete solution.",
    evidence: "Repository, deployed page, keyboard-check notes and a short explanation of one debugging decision.",
  },
  {
    title: "React application development",
    effort: "50–70 hours",
    entry: "Comfort with functions, array methods, events and asynchronous JavaScript.",
    purpose: "Turn individual interface exercises into a coherent frontend product.",
    topics: [
      "JSX, components, props, composition, stable keys and rendering.",
      "State ownership, immutable updates, controlled forms and derived values.",
      "Effects for external synchronization, cleanup, refs and reusable hooks.",
      "Routing, URL parameters, navigation and accessible form feedback.",
      "API-driven screens, loading and failure handling; context or reducers when shared state needs them.",
      "TypeScript foundations for props, API responses and unions; component tests for important user actions.",
    ],
    build: "A learner booking dashboard with course search, booking forms and a bookings view, initially using a mock API.",
    gate: "Explain where state belongs, handle a failed request, test a form interaction and implement a change to the original brief.",
    evidence: "Component map, interaction tests, working frontend and documented mock API contract.",
  },
  {
    title: "Node.js, Express & MongoDB",
    effort: "65–85 hours",
    entry: "Ability to call an API and explain request, response and asynchronous execution.",
    purpose: "Build and verify the data and access rules behind the booking workflow.",
    topics: [
      "Node.js runtime, modules, environment configuration and asynchronous request handling.",
      "HTTP methods, status codes, REST resources, middleware and centralized error handling.",
      "MongoDB document modeling, embedding versus references, Mongoose validation, indexes and pagination.",
      "Authentication versus authorization, password hashing, sessions and token trade-offs, expiry and logout.",
      "Server-side validation, ownership checks, rate limiting, CORS boundaries and secret handling.",
      "API integration tests, duplicate-booking protection, safe upload constraints and external API failures.",
    ],
    build: "A booking API with learner and administrator roles, course availability, booking creation and cancellation. Define how conflicting booking requests are handled.",
    gate: "Demonstrate that one learner cannot access another learner’s booking, invalid requests fail clearly and duplicate bookings are prevented.",
    evidence: "Data-model explanation, API documentation, repeatable tests and sample requests using fictional data.",
  },
  {
    title: "Full-stack delivery & capstone",
    effort: "65–85 hours",
    entry: "A working React frontend and a tested backend API.",
    purpose: "Integrate, deploy and revise one complete application against a client-style brief.",
    topics: [
      "Agree acceptance criteria, break the brief into issues and prioritize a small complete release.",
      "Connect frontend and backend, handle authentication states and keep server permissions authoritative.",
      "Test end-to-end booking flows, failures, mobile layouts and keyboard access.",
      "Configure hosting, environment variables, production URLs, database access and deployment checks.",
      "Investigate logs, document known limitations, prepare handover and rehearse a safe rollback.",
      "Optional AI extension after core flows pass: a server-side integration with usage limits, output checks, failure handling and a small evaluation set.",
    ],
    build: "Ship the complete booking application. Then respond to a change request such as a new cancellation rule or administrator filter.",
    gate: "A reviewer can run the project from the README, complete the main workflow and understand the trade-offs. Explain and repair a deliberately introduced fault.",
    evidence: "Live demo, test results, release notes, setup instructions and a concise technical walkthrough.",
  },
  {
    title: "Portfolio, interviews & freelance practice",
    effort: "30–40 hours",
    entry: "A demonstrable project; begin keeping evidence during earlier phases.",
    purpose: "Help another person evaluate your work and understand what you can responsibly deliver.",
    topics: [
      "Write a case study showing the problem, your contribution, decisions, limitations and evidence.",
      "Prepare a focused resume, GitHub profile and project demonstration without fabricated client outcomes.",
      "Practice JavaScript reasoning, API and database questions, debugging and explaining unfamiliar code.",
      "Run a mock client discovery call and write scope, exclusions, milestones and revision boundaries.",
      "Estimate effort and practice pricing, proposals, relevant outreach and clear handover.",
      "Marketing essentials for a developer: audience, positioning, useful content and measuring outreach; advanced advertising is outside this track.",
    ],
    build: "A portfolio case study, project walkthrough, tailored application and a proposal for a fictional client brief.",
    gate: "Explain your project without a script, identify a remaining skill gap and defend a scoped proposal without promising outcomes you cannot control.",
    evidence: "Portfolio, resume, mock-interview notes and a discovery-to-handover document pack.",
  },
] as const;

export default function CurriculumDetail() {
  return (
    <section id="live-curriculum" aria-labelledby="live-curriculum-title" className="scroll-mt-28 border-t border-black/15 bg-[#f3f0e8] py-20 text-[#10110f] lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest">The live-class curriculum</p>
            <h2 id="live-curriculum-title" className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Five phases. A working product. Evidence at every step.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/75">
              Learn web fundamentals, build a React frontend, develop a protected Node.js and MongoDB API,
              ship a full-stack application, and prepare your work for interviews or freelance conversations.
              Move forward when you can demonstrate the skill, not simply when a lesson ends.
            </p>
          </div>
          <aside className="bg-[#10110f] p-7 text-[#f3f0e8]" aria-label="Study commitment">
            <p className="text-sm font-semibold text-[#c9ff3d]">Planning estimate · not a completion promise</p>
            <p className="mt-4 text-3xl font-semibold">270–360 focused hours</p>
            <p className="mt-4 leading-7 text-white/80">Includes instruction, practice, debugging, revision and projects. At 15 hours per week, allow approximately 18–24 weeks. At 10 hours per week, allow 27–36 weeks.</p>
            <p className="mt-4 text-sm leading-6 text-white/75">Prior experience may shorten the route; difficult topics may need extra practice. Confirm the live timetable, review allowance and final syllabus for your batch before enrolling.</p>
          </aside>
        </div>

        <p className="mt-10 border-l-4 border-black pl-5 leading-7 text-black/75">
          Start with a short HTML, CSS and JavaScript baseline task. Beginners complete the foundations;
          experienced learners demonstrate them before moving ahead. Basic programming exercises and Git practice continue throughout.
        </p>

        <div className="mt-10 space-y-4">
          {phases.map((phase, index) => (
            <details key={phase.title} open={index === 0} className="group border border-black/20 bg-white/60">
              <summary className="flex min-h-24 cursor-pointer list-none items-center gap-5 p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black sm:p-7 [&::-webkit-details-marker]:hidden">
                <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#c9ff3d] font-semibold">{String(index + 1).padStart(2, "0")}</span>
                <span className="flex-1">
                  <span className="block text-sm text-black/70">Phase {index + 1} · Estimated effort: {phase.effort}</span>
                  <span className="mt-1 block text-xl font-semibold sm:text-2xl">{phase.title}</span>
                </span>
                <ChevronDown aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" size={20} />
              </summary>
              <div className="border-t border-black/15 p-5 sm:p-7">
                <p className="text-lg leading-8">{phase.purpose}</p>
                <p className="mt-3 leading-7 text-black/75"><strong>Start when:</strong> {phase.entry}</p>
                <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                  <div>
                    <h3 className="text-lg font-semibold">What you practice</h3>
                    <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-black/80">
                      {phase.topics.map(topic => <li key={topic}>{topic}</li>)}
                    </ul>
                  </div>
                  <dl className="space-y-6 border-l-2 border-black/20 pl-6">
                    <div><dt className="font-semibold">Build</dt><dd className="mt-2 leading-7 text-black/80">{phase.build}</dd></div>
                    <div><dt className="font-semibold">Ready to progress when</dt><dd className="mt-2 leading-7 text-black/80">{phase.gate}</dd></div>
                    <div><dt className="font-semibold">Keep as evidence</dt><dd className="mt-2 leading-7 text-black/80">{phase.evidence}</dd></div>
                  </dl>
                </div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-y border-black/15 py-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">A repeatable study cycle</h3>
            <p className="mt-3 leading-7 text-black/75">Learn one concept, rebuild a small example independently, apply it to the project, test a failure case and record what changed. End each phase with a demonstration and revision. Free learners can use the same checks for self-review; live review depends on the agreed batch support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Core first. Extensions later.</h3>
            <p className="mt-3 leading-7 text-black/75">Do not add advanced state libraries, microservices, payments or AI features until the core workflow works. AI-assisted code must be understood, tested and explained. Use fictional data in practice; client access and project matching are separate, selective opportunities.</p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-6">
          <Link href="/academy#roadmap" className="inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Explore the Academy roadmap <ArrowUpRight aria-hidden="true" size={17} /></Link>
          <Link href="/academy#project-matching" className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">Understand project-matching criteria</Link>
        </div>
      </div>
    </section>
  );
}
