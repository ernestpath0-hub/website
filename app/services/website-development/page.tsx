import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Braces,
  Check,
  ChevronDown,
  CircleCheck,
  ClipboardCheck,
  Code2,
  Eye,
  Gauge,
  GitBranch,
  LayoutTemplate,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  Users,
  Workflow,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development for Coaching Institutes",
  description:
    "Admission-focused website development for coaching and training institutes. Custom design, course pages, local SEO, AEO, CRM integration, analytics, speed and conversion tracking.",
  keywords: [
    "website development for coaching institutes",
    "coaching institute website design",
    "training institute website development",
    "education website development company",
    "coaching centre website design",
    "admission website development",
  ],
  alternates: { canonical: "/services/website-development" },
  openGraph: {
    title: "Website Development for Coaching Institutes | ErnestPath",
    description:
      "Build an admission-focused institute website that turns search traffic and advertising clicks into measurable enquiries.",
    url: "/services/website-development",
    siteName: "ErnestPath",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Development for Coaching Institutes | ErnestPath",
    description:
      "Custom institute websites built around course discovery, trust, enquiries, CRM follow-up and admissions.",
  },
  robots: { index: true, follow: true },
};

const audiences = [
  ["NEET & JEE coaching", "Course discovery, batch details, faculty credibility, results and counselling journeys for parents comparing serious exam-preparation options."],
  ["Government-exam institutes", "Clear programmes for UPSC, SSC, banking, railways and state-level exams, supported by schedules, test series, results and branch information."],
  ["Software training institutes", "Technology course pages built around curriculum, projects, mentors, placement support, career outcomes, demo sessions and upcoming batches."],
  ["Language-training centres", "Programmes organised by language, level, learning goal, delivery mode and location, with assessment, trial-class and counselling actions."],
  ["Overseas-education consultancies", "Country, university and service journeys that make complex decisions easier while capturing qualified counselling enquiries."],
  ["Tuition & academic centres", "Local discovery, class and board-specific information, teacher trust, parent FAQs, timetables and neighbourhood enquiry journeys."],
  ["Skill-development academies", "Outcome-led pages for vocational, creative, business and professional programmes, including portfolios, certification and employer relevance."],
  ["Multi-branch education brands", "A scalable content and location system that gives every genuine branch useful local information without duplicating thin pages."],
];

const failurePoints = [
  {
    title: "The homepage tries to explain everything",
    text: "Every course, achievement, branch, announcement and offer competes for the same space. Students cannot quickly identify which programme applies to them, and parents cannot see a clear evaluation path. A homepage should route people to the right journey; it should not behave like a notice board containing the entire institute.",
  },
  {
    title: "Important courses have no dedicated pages",
    text: "A single Courses page with a list or a few cards cannot answer detailed questions or rank effectively for different course searches. Every priority programme needs its own useful destination covering audience, curriculum, duration, format, teaching method, proof, outcomes and the next admission step.",
  },
  {
    title: "Mobile visitors receive a compressed desktop site",
    text: "Most institute research happens between other activities, often on a phone. When headings wrap badly, forms are long, buttons are small or sticky elements cover content, the website creates friction at the exact moment a prospective student is considering contact. Responsive design must be planned, not added at the end.",
  },
  {
    title: "Claims appear without believable evidence",
    text: "Statements such as best faculty, excellent placements or quality education are easy for every competitor to repeat. Trust grows when claims are supported with faculty backgrounds, teaching methodology, verified results, student work, reviews, facilities, transparent course information and clear explanations of what the institute actually does differently.",
  },
  {
    title: "Enquiries become untracked notifications",
    text: "A form may send an email, but the institute cannot see who followed up, which counsellor owns the lead, what course created the enquiry or whether the student attended a demo. A serious website should begin a measurable admissions workflow rather than ending with a notification in somebody's inbox.",
  },
  {
    title: "Search engines cannot understand the site",
    text: "Unclear headings, duplicated descriptions, missing location information, slow performance, broken links and weak internal linking make important pages difficult to interpret. Search visibility begins with architecture and content decisions made before development, not with a plugin installed after the website is launched.",
  },
  {
    title: "The brand looks interchangeable",
    text: "Stock classroom photographs, blue gradients, animated counters and generic feature cards make many institute websites feel identical. A distinctive visual system should express the institute's position while keeping information easy to read. Memorability comes from coherent design and specific proof, not decorative complexity.",
  },
];

const systemLayers = [
  ["Discovery", "Can the right student find the institute through Google Search, Maps, an advertisement, a recommendation or an AI-generated answer? The website must provide indexable course, location and expertise information before it can influence admissions."],
  ["Relevance", "Does the landing page immediately match the visitor's course, location and intention? A person searching for a weekend MERN programme needs a different entry point from a parent evaluating long-term NEET preparation."],
  ["Clarity", "Can visitors understand who the course is for, what is taught, how it works, how long it takes and what a realistic outcome looks like? Clear information filters weak enquiries while helping serious prospects move forward."],
  ["Trust", "Does the website support important claims with useful evidence? Results, faculty, methodology, reviews, student projects, facilities and transparent answers reduce the perceived risk of contacting or joining an institute."],
  ["Conversion", "Are calls, WhatsApp actions, counselling forms, demo bookings and brochure requests presented at the right decision points? Conversion design makes the next step clear without turning every section into an aggressive sales banner."],
  ["Follow-up", "Does each enquiry carry its source, course interest and context into a manageable process? CRM integration helps the admissions team assign ownership, record attempts, add remarks and understand what happened after the form submission."],
  ["Measurement", "Can the institute identify which course page, campaign, search query, location or content journey contributed to an enquiry? Reliable measurement allows future decisions to be based on evidence rather than pageviews and assumptions."],
];

const serviceModules = [
  {
    icon: GitBranch,
    title: "Website strategy & admission architecture",
    direct: "Website strategy defines which pages your institute needs, what each page must achieve and how visitors should move from discovery to enquiry.",
    problem: "Institutes often begin with a requested page count instead of a decision journey. The result is a collection of pages that exists without a clear role in search, trust or conversion.",
    solution: "We map audiences, courses, locations, traffic sources and admission actions before visual design begins. This produces a practical sitemap and prevents important information from being buried or repeated.",
    includes: ["Audience and course analysis", "Competitor website review", "Student and parent journey mapping", "SEO-aware sitemap", "Navigation and URL planning", "Conversion-path planning", "Page purpose definitions", "Content and proof requirements"],
  },
  {
    icon: LayoutTemplate,
    title: "Custom UI and UX design",
    direct: "Custom UI and UX design turns the institute's position, information and admission journeys into a distinctive interface that remains easy to understand on every device.",
    problem: "Templates force different institutes into the same visual language. They may look acceptable initially, but often fail to accommodate deep course information, multiple branches, proof and changing admission campaigns.",
    solution: "We create a reusable visual and interaction system around your real content. Animation is used to guide attention or explain relationships, never simply to demonstrate technical ability.",
    includes: ["Original visual direction", "Responsive layouts", "Course-page design system", "Mobile navigation", "Content hierarchy", "Accessible typography", "Form experience design", "Reusable section components"],
  },
  {
    icon: Target,
    title: "Conversion-focused homepage",
    direct: "A coaching institute homepage should establish relevance and trust, then route each visitor to the most appropriate course, location or admission action.",
    problem: "Many homepages become an archive of banners, announcements and unrelated claims. Visitors see activity but cannot understand the institute's strongest offer or choose a useful next step.",
    solution: "We structure the homepage as a decision gateway. It communicates positioning, major course families, proof, methodology and current opportunities without replacing the detailed pages visitors need next.",
    includes: ["Positioning and hero message", "Course-category routing", "Results and proof", "Teaching methodology", "Faculty credibility", "Branch discovery", "Upcoming batch pathways", "Counselling and demo CTAs"],
  },
  {
    icon: ClipboardCheck,
    title: "Dedicated course landing pages",
    direct: "A course landing page gives one programme enough depth to answer questions, earn search visibility and produce qualified enquiries.",
    problem: "When every programme is compressed into a card or short paragraph, students cannot compare suitability and Google cannot confidently match the page to detailed course searches.",
    solution: "We build a repeatable course-page framework with room for programme-specific content and proof. Each page can serve organic search, paid campaigns, counsellor sharing and direct referrals.",
    includes: ["Audience and eligibility", "Curriculum and learning path", "Duration and delivery mode", "Faculty and methodology", "Projects, tests or materials", "Fees or fee-enquiry flow", "Outcomes and relevant proof", "Course FAQs and enquiry actions"],
  },
  {
    icon: MapPin,
    title: "Location and branch pages",
    direct: "A branch page provides unique, locally useful information about a genuine institute location instead of repeating the same generic content across cities.",
    problem: "Multi-branch institutes either hide every location on one contact page or create thin city pages that offer no local value. Both approaches weaken discovery and user confidence.",
    solution: "We create a scalable location system covering courses, address, landmarks, maps, timings, facilities, local proof and branch-specific actions. Information is aligned with the relevant Google Business Profile.",
    includes: ["Branch address and service area", "Available local courses", "Map and direction information", "Contact details and timings", "Facilities and photographs", "Branch-specific faculty or proof", "Local FAQs", "Location schema foundations"],
  },
  {
    icon: Sparkles,
    title: "Admission campaign landing pages",
    direct: "A campaign landing page focuses on one course, intake, scholarship test, seminar or demo with one clear conversion objective.",
    problem: "Sending paid traffic to a busy homepage creates a relevance gap. The visitor must search again for the offer they already clicked, which wastes attention and advertising budget.",
    solution: "We build focused pages that continue the promise of the advertisement or campaign. Essential proof and objections remain present, while unrelated navigation and competing actions are reduced.",
    includes: ["Course intake campaigns", "Scholarship registration", "Demo-class pages", "Seminar and webinar pages", "Crash-course launches", "Lead-source capture", "Campaign-specific proof", "Thank-you and follow-up paths"],
  },
  {
    icon: MessageCircle,
    title: "Enquiry and counselling journeys",
    direct: "A conversion system gives visitors the right contact option at the right moment and captures enough context for a useful follow-up.",
    problem: "Placing Enquire Now on every screen is not a strategy. Long forms create abandonment, while vague forms produce leads with no course, location or intent information.",
    solution: "We design calls, WhatsApp actions, forms, demo bookings and brochure requests around different levels of readiness. Each interaction has a clear confirmation and measurable next step.",
    includes: ["Course-specific enquiry forms", "Counselling and demo booking", "Click-to-call actions", "WhatsApp pathways", "Scholarship registration", "Progressive form fields", "Validation and spam reduction", "Consent and confirmation states"],
  },
  {
    icon: Workflow,
    title: "CRM and lead-flow integration",
    direct: "CRM integration moves website enquiries into an organised admissions process with source context, ownership and follow-up history.",
    problem: "Leads are lost when emails are missed, spreadsheets are incomplete or several counsellors assume somebody else responded. Marketing performance also becomes impossible to verify.",
    solution: "We connect forms to a suitable existing CRM or a scoped lead-management workflow. The exact implementation depends on your tools, team and operational requirements.",
    includes: ["Course-interest capture", "Lead-source and UTM capture", "Counsellor assignment", "Status and attempt tracking", "Remarks and follow-up context", "Demo attendance fields", "API or webhook integration", "Conversion outcome reporting"],
  },
  {
    icon: Gauge,
    title: "Performance and Core Web Vitals",
    direct: "Website performance reduces waiting, protects mobile usability and gives search and advertising traffic a more stable landing experience.",
    problem: "Large images, unnecessary scripts, poorly loaded fonts and layout shifts make institute pages frustrating on mobile networks. A visually impressive page loses value when visitors leave before it becomes usable.",
    solution: "We make performance a development constraint from the beginning. Targets depend on content and third-party tools, but every major implementation decision considers loading, responsiveness and stability.",
    includes: ["Responsive image delivery", "Font optimisation", "Code splitting", "Lazy loading", "Caching strategy", "Layout-shift prevention", "Third-party script review", "Performance monitoring setup"],
  },
  {
    icon: Eye,
    title: "Accessible and inclusive interaction",
    direct: "Accessible design helps more people navigate, understand and complete important actions using keyboards, assistive technology, touch devices or reduced-motion preferences.",
    problem: "Unlabelled forms, weak colour contrast, missing focus states and motion-heavy interactions can prevent users from accessing course information or submitting an enquiry.",
    solution: "We apply practical accessibility foundations during design and development. Formal legal conformance is only claimed when the agreed scope includes a dedicated audit and remediation process.",
    includes: ["Semantic heading structure", "Keyboard-accessible navigation", "Visible focus indicators", "Form labels and useful errors", "Alternative text planning", "Colour-contrast checks", "Reduced-motion support", "Touch-friendly controls"],
  },
  {
    icon: BarChart3,
    title: "Analytics and enquiry measurement",
    direct: "Analytics connects website behaviour with meaningful actions such as calls, WhatsApp clicks, form submissions, demo requests and counselling enquiries.",
    problem: "Pageviews alone do not explain whether the website supports admissions. Without event and source tracking, an institute cannot compare courses, campaigns or landing pages accurately.",
    solution: "We establish a measurement plan around business actions and configure the agreed analytics tools. Reporting focuses on interpretable signals, with privacy and consent requirements considered in the implementation.",
    includes: ["GA4 foundation", "Google Search Console", "Tag Manager setup", "Form-submission events", "Call and WhatsApp clicks", "Thank-you page tracking", "UTM attribution", "Course-page conversion signals"],
  },
];

const aiFoundations = [
  ["Entity clarity", "The website states the institute's identity, courses, audiences, branches, faculty, specialisations and contact information consistently. Machines should not have to infer whether two variations of a brand or location refer to the same organisation."],
  ["Direct answers", "Important questions are answered in concise language immediately below descriptive headings, followed by deeper supporting detail. This helps people scan while giving search and answer systems a clear passage to interpret."],
  ["Structured data", "Where accurate and eligible, we implement Organization or EducationalOrganization, LocalBusiness, Course, FAQPage, BreadcrumbList, Article and Person schema. Markup must reflect visible information and never invent ratings, reviews or outcomes."],
  ["Crawlable information", "Essential course, location, faculty and admission information remains available as meaningful HTML text rather than being locked inside posters, videos, carousels or JavaScript-only interactions."],
  ["Evidence and authorship", "Useful claims are connected to results, methodology, original resources, faculty experience, student work or other appropriate evidence. Content ownership and author information are made clearer where they add trust."],
  ["External consistency", "Names, addresses, course descriptions and profiles should remain reasonably consistent across the website, Google Business Profile, social profiles, education directories, review platforms and relevant external mentions."],
];

const process = [
  ["01", "Discovery and diagnostic", "We learn how the institute earns admissions today, which programmes matter, who makes the decision, where leads arrive and where the current journey breaks. Existing analytics, search visibility and operational constraints are reviewed where available."],
  ["02", "Positioning and page strategy", "We define the website's central promise, priority audiences and page responsibilities. The goal is to make the institute easier to understand without reducing every course to the same generic sales message."],
  ["03", "Sitemap and journey planning", "We organise course, category, location, proof and support pages. Navigation and internal links are planned around user tasks and search relationships rather than the institute's internal department structure."],
  ["04", "Content requirements", "You receive a structured request for course facts, outcomes, faculty information, reviews, media and policies. Missing proof is identified early so it does not become placeholder content during development."],
  ["05", "Wireframes", "Low-detail layouts establish hierarchy, sequence, conversion points and responsive behaviour before visual styling. This makes structural feedback faster and prevents design polish from hiding weak content decisions."],
  ["06", "Visual system", "We translate the approved direction into typography, colour, spacing, surfaces, components and meaningful motion. The system is designed to scale across current pages and future programmes."],
  ["07", "Development", "Approved layouts become responsive Next.js components or another agreed implementation. We build reusable patterns while preserving the specific information each course and branch requires."],
  ["08", "Forms and integrations", "Enquiry sources, course interest, confirmation states and integrations are implemented according to the agreed scope. External tools are tested within the access and limitations provided by their vendors."],
  ["09", "SEO and structured data", "Metadata, headings, internal links, canonical signals, sitemap, robots instructions and applicable schema are added alongside the visible content. Search readiness is part of the build rather than an afterthought."],
  ["10", "Quality review", "We review responsive behaviour, navigation, forms, content integrity, major browsers, performance, accessibility foundations and important tracking events before launch."],
  ["11", "Launch and indexing", "The approved website is released, production behaviour is checked and search-engine discovery tools are configured or updated where included. Redirects are handled when replacing an existing site."],
  ["12", "Handover and improvement", "Your team receives the agreed guidance for routine updates. Early data, user questions and counsellor feedback inform the next improvements rather than treating launch day as the end of the website."],
];

const faqs = [
  ["How much does a coaching institute website cost?", "The cost depends on the number and depth of course pages, branch requirements, content support, custom design, CRM connections, forms, analytics and administrative features. We do not price only by page count because two websites with ten pages can require very different strategy and functionality. After a diagnostic conversation, ErnestPath defines the scope, deliverables, responsibilities and price so the institute can evaluate a clear proposal rather than an open-ended estimate."],
  ["How long does development take?", "A focused institute website may take several weeks, while a multi-course or multi-branch platform can require a longer phased delivery. Timing depends heavily on content availability, feedback speed, integrations and the number of approval stages. Our proposed schedule separates institute responsibilities from ErnestPath responsibilities so delays are visible. A three-month window is practical for many well-scoped projects, but the final timeline is confirmed only after discovery."],
  ["Can you complete the website within three months?", "Often, yes—when scope, content owners, decision-makers and external integrations are confirmed early. Month one typically covers strategy, architecture and content; month two covers visual design and development; month three covers completion, testing, tracking and launch. Three months can create a strong website and organic-growth foundation. It does not guarantee competitive Google rankings or a fixed number of admissions within the same period."],
  ["How many pages does our institute need?", "The correct number follows from search intent and user decisions, not an arbitrary package limit. Most institutes need a focused homepage, meaningful course pages, an about or methodology page, proof, contact information and relevant policy pages. Multi-branch institutes may need unique location pages. We recommend a page only when it has a distinct audience, purpose or body of useful information; we avoid creating thin pages simply to increase the count."],
  ["Do you write the website content?", "We provide page strategy, content structure, questionnaires, headline and CTA guidance, and editing support within the agreed scope. Full research and copywriting can be included or quoted separately depending on the number and depth of pages. The institute must verify factual claims such as fees, results, placements, faculty history and accreditations. We never fabricate proof to make a page appear more persuasive."],
  ["Will the new website rank on Google?", "The website will include an agreed technical and on-page SEO foundation, but launching a well-built site does not guarantee rankings. Search performance depends on competition, content depth, local relevance, authority, the existing domain and continued optimisation. The build creates a much stronger platform for growth. Ongoing keyword expansion, content, local SEO and authority work are handled through a separate SEO engagement when required."],
  ["Is ongoing SEO included with website development?", "The build includes foundations such as crawlable architecture, metadata patterns, headings, internal linking, sitemap, robots guidance, performance work and applicable structured data. Ongoing SEO is different: it includes continuous research, content development, Google Business Profile work, authority building, monitoring and iteration. The proposal states exactly which launch foundations and post-launch services are included so the boundary is clear."],
  ["Can you redesign our existing institute website?", "Yes. We first determine what should be preserved, rewritten, redirected or retired. Existing rankings, URLs, analytics, forms and integrations must be considered before a redesign because replacing the appearance without a migration plan can damage working search visibility. The redesign may reuse verified content and assets, but the architecture is rebuilt when the current journey no longer supports courses, branches or admissions effectively."],
  ["Can you migrate our existing content?", "Content migration can be included. Before migration, we classify current pages as keep, improve, combine, redirect or remove. This prevents outdated notices, duplicate course descriptions and weak pages from being copied into a new interface. The institute confirms factual accuracy and ownership of supplied media. Large libraries, historical resources or complex CMS migrations are scoped separately because they require additional mapping and quality control."],
  ["Can you create pages for multiple branches?", "Yes. Every genuine branch can receive a locally useful page containing its available courses, address, service area, timings, landmarks, contact information, facilities, faculty or proof where relevant. We avoid mass-producing identical city pages with only the place name changed. Useful differences help students make decisions and give search engines a legitimate reason to index each location."],
  ["Can the website connect to our CRM?", "Yes, when the CRM provides a suitable API, webhook, supported form connection or documented integration method. We can pass agreed fields such as course interest, location, source and UTM values. Integration scope depends on the external platform, permissions and workflow complexity. If an institute needs a custom lead-management system, that is evaluated as a separate software scope rather than hidden inside a standard website quote."],
  ["Can leads be assigned to counsellors automatically?", "Automatic assignment is possible when supported by the selected CRM or custom workflow. Rules might use course, branch, language, lead source or availability. Assignment alone does not guarantee follow-up, so the wider process should include ownership, attempts, remarks, status definitions and conversion outcomes. We design the website fields and integration around the admissions process the institute can realistically operate."],
  ["Can our team update courses and batches?", "Yes. We choose an editing approach based on how frequently information changes and who will maintain it. Routine content can be managed through an appropriate CMS or structured administrative interface when included. Highly designed sections may remain developer-managed to protect layout quality. During planning, we separate content that must be editable from elements that rarely change so the solution remains practical rather than unnecessarily complex."],
  ["Do you provide hosting and maintenance?", "Hosting recommendations and maintenance can be included based on the technology and responsibility model. Maintenance may cover dependency updates, backups where applicable, monitoring, small content changes and technical support. Hosting fees, third-party services and large new functionality are normally separate. The proposal explains ownership, renewal responsibility, access and what happens after the support period."],
  ["Will the website work properly on mobile phones?", "Yes. Mobile behaviour is planned from the structure and design stages rather than produced by shrinking the desktop layout. We consider reading width, touch targets, navigation, forms, sticky actions, image delivery, page speed and content order. We test representative viewport sizes, but no website can be guaranteed to behave identically on every historical device or embedded browser. Priority is given to current, meaningful user environments."],
  ["Can you integrate WhatsApp, calling and demo forms?", "Yes. We can implement click-to-call actions, WhatsApp paths, counselling forms, demo registration and relevant confirmation states. The placement and questions should reflect visitor readiness; showing every option everywhere can reduce clarity. Tracking can record important clicks and completed forms. External WhatsApp automation or messaging platforms may require separate subscriptions, templates and approvals from their providers."],
  ["Can you guarantee enquiries or admissions?", "No. A website can improve clarity, trust, conversion and measurement, but admissions also depend on demand, course quality, price, reputation, counsellor follow-up, competition and traffic volume. We do not invent a guaranteed outcome that the website alone cannot control. We define measurable implementation goals and track meaningful enquiry actions so performance can be evaluated honestly and improved over time."],
  ["How do you prepare the website for AI search?", "We make important information clear, crawlable and consistent; use direct-answer sections; organise course and location entities; add accurate structured data where eligible; strengthen evidence and authorship; and avoid hiding essential facts inside images. These practices improve machine understanding and citation readiness. No agency can guarantee that ChatGPT, Google AI Overviews, Bing Copilot or another system will include a particular institute in its generated answer."],
  ["What support is available after launch?", "The agreed handover includes access, documentation or training appropriate to the editing setup. Post-launch support can cover defects, monitoring, maintenance, conversion improvement, new course pages, SEO and campaign landing pages under a separate plan. We recommend reviewing early search, analytics and counsellor feedback because the most useful next improvements often become visible only after real visitors use the new journey."],
];

const comparison = [
  ["Audience", "Designed for any business", "Designed around institute, student and parent decisions"],
  ["Course content", "One general services page", "Dedicated, search-ready course journeys"],
  ["Conversion", "A contact form and phone number", "Contextual calls, WhatsApp, demo and counselling paths"],
  ["Lead handling", "Form sends an email", "Source-aware CRM or follow-up integration when scoped"],
  ["SEO", "Plugin added after launch", "Architecture, crawlability and page intent planned early"],
  ["Proof", "Generic counters and testimonial slider", "Evidence matched to claims and decision stages"],
  ["Measurement", "Pageviews and sessions", "Calls, forms, course actions and enquiry sources"],
  ["AI visibility", "Content written only as sales copy", "Clear entities, direct answers and accurate structured data"],
  ["After launch", "Project considered finished", "A defined path for measurement and improvement"],
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://ernestpath.com/services/website-development#service",
  name: "Website Development for Coaching Institutes",
  serviceType: "Admission-focused website design and development",
  url: "https://ernestpath.com/services/website-development",
  description:
    "Custom website strategy, UX design, development, course pages, location pages, CRM integration, analytics, technical SEO and AEO foundations for coaching and training institutes.",
  provider: {
    "@type": "Organization",
    "@id": "https://ernestpath.com/#organization",
    name: "ErnestPath",
    url: "https://ernestpath.com",
  },
  areaServed: { "@type": "Country", name: "India" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Coaching institutes, training institutes and education businesses",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching institute website services",
    itemListElement: serviceModules.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.direct,
      },
    })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://ernestpath.com" },
    { "@type": "ListItem", position: 2, name: "Website Development", item: "https://ernestpath.com/services/website-development" },
  ],
};

function safeJson(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

const sectionLabel = "text-xs font-bold uppercase tracking-[0.2em] text-black/45";
const largeHeading = "text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]";
const shell = "mx-auto w-[calc(100%-2rem)] max-w-7xl px-2 lg:px-8";

export default function WebsiteDevelopmentPage() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#f3f0e8] text-[#10110f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(breadcrumbSchema) }} />

      <div className="bg-[#10110f] pt-28 text-[#f3f0e8]">
        <nav aria-label="Breadcrumb" className={`${shell} flex items-center gap-2 py-5 text-sm text-white/55`}>
          <Link href="/" className="transition-colors hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-white/80">Website development</span>
        </nav>
      </div>

      <section aria-labelledby="website-hero-title" className="bg-[#10110f] text-[#f3f0e8]">
        <div className={`${shell} grid min-h-[720px] items-center gap-16 py-20 lg:grid-cols-[1.12fr_0.88fr] lg:py-28`}>
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#c9ff3d]" />
              Websites for coaching institutes
            </p>
            <h1 id="website-hero-title" className="max-w-5xl text-[clamp(3.7rem,7.6vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.075em]">
              Built to fill batches.<br />
              <span className="font-serif font-normal italic text-[#c9ff3d]">Not simply screens.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg leading-8 text-white/65">
              ErnestPath builds admission-focused websites that help students find the right course, help parents evaluate your institute and help counsellors receive better-qualified, trackable enquiries. Strategy, design, development, search foundations and lead flow work as one system.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/tools/admission-score" className="group inline-flex min-h-14 items-center justify-between gap-5 bg-[#c9ff3d] px-6 font-semibold text-[#10110f] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]">
                Check your website score <ArrowRight aria-hidden="true" size={19} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="#what-we-build" className="inline-flex min-h-14 items-center justify-between gap-5 border border-white/20 px-6 font-medium text-white/80 transition-colors hover:border-[#c9ff3d] hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]">
                Explore what we build <ChevronDown aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl" aria-label="Admission website journey illustration">
            <div className="rounded-[2rem] border border-white/15 bg-[#171815] p-5 shadow-[22px_22px_0_#c9ff3d] sm:p-7">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-white/40"><span>Admission journey</span><span>Live path</span></div>
              <div className="mt-8 space-y-3">
                {[
                  [Search, "Student searches", "Course + location intent"],
                  [LayoutTemplate, "Right page opens", "Clear programme information"],
                  [ShieldCheck, "Trust is established", "Proof + useful answers"],
                  [MessageCircle, "Enquiry begins", "Context reaches counsellor"],
                ].map(([Icon, title, text], index) => {
                  const JourneyIcon = Icon as typeof Search;
                  return (
                    <div key={String(title)} className={`grid grid-cols-[2.7rem_1fr_auto] items-center gap-3 rounded-xl border p-3 ${index === 3 ? "border-[#c9ff3d] bg-[#c9ff3d] text-[#10110f]" : "border-white/10 bg-white/[0.04]"}`}>
                      <span className={`grid h-10 w-10 place-items-center rounded-full ${index === 3 ? "bg-[#10110f] text-[#c9ff3d]" : "bg-white/10 text-white/70"}`}><JourneyIcon aria-hidden="true" size={18} /></span>
                      <span><strong className="block text-sm">{String(title)}</strong><small className={index === 3 ? "text-black/60" : "text-white/40"}>{String(text)}</small></span>
                      <span className="text-sm">0{index + 1}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-[0.14em] text-white/40"><span>Attention</span><ArrowRight size={16} /><span className="text-[#c9ff3d]">Measurable enquiry</span></div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Page sections" className="sticky top-[5.8rem] z-30 border-b border-black/15 bg-[#f3f0e8]/95 backdrop-blur-xl">
        <div className={`${shell} flex gap-7 overflow-x-auto py-4 text-sm font-semibold [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}>
          {[ ["Problem", "#why-sites-fail"], ["System", "#admission-system"], ["Services", "#what-we-build"], ["SEO & AI", "#search-foundations"], ["Process", "#process"], ["FAQ", "#faq"] ].map(([label, href]) => <a key={href} href={href} className="shrink-0 text-black/55 transition-colors hover:text-black">{label}</a>)}
        </div>
      </nav>

      <section aria-labelledby="direct-answer-title" className={`${shell} py-20 lg:py-28`}>
        <div className="grid gap-10 border-y border-black/20 py-12 lg:grid-cols-[0.35fr_1fr]">
          <p className={sectionLabel}>Direct answer</p>
          <div>
            <h2 id="direct-answer-title" className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-5xl">What is a coaching institute website?</h2>
            <p className="mt-6 max-w-4xl text-lg leading-8 text-black/65">
              A coaching institute website is a digital admission platform that helps students and parents discover courses, evaluate the institute, understand delivery and outcomes, and contact the admissions team. An effective institute website combines clear course information, local discovery, credible proof, mobile usability, enquiry tracking and CRM-connected follow-up rather than functioning as a static online brochure.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="audience-title" className={`${shell} pb-24 lg:pb-32`}>
        <div className="max-w-5xl">
          <p className={sectionLabel}>Built for education decisions</p>
          <h2 id="audience-title" className={`${largeHeading} mt-6`}>Different courses. One need: a clearer path to admission.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">The service is specialised for organisations where learners or parents must understand a programme, compare trust and commit time or money before joining.</p>
        </div>
        <div className="mt-14 grid border-l border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([title, text], index) => (
            <article key={title} className="min-h-72 border-b border-r border-black/20 p-6">
              <span className="text-xs font-bold tracking-[0.15em] text-black/35">0{index + 1}</span>
              <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
              <p className="mt-5 text-sm leading-7 text-black/55">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="why-sites-fail" aria-labelledby="failure-title" className="scroll-mt-40 bg-[#10110f] text-[#f3f0e8]">
        <div className={`${shell} py-24 lg:py-32`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Why institute websites fail</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
            <h2 id="failure-title" className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]">A website can look finished and still leave the admission journey broken.</h2>
            <p className="self-end text-lg leading-8 text-white/60">The most expensive problems are not always visual. They appear when a student cannot find the right course, a parent cannot verify a claim or a counsellor receives an enquiry with no context.</p>
          </div>
          <div className="mt-16 border-t border-white/15">
            {failurePoints.map((item, index) => (
              <article key={item.title} className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[4rem_0.8fr_1.2fr] md:gap-8">
                <span className="text-xs font-bold tracking-[0.15em] text-[#c9ff3d]">0{index + 1}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{item.title}</h3>
                <p className="leading-7 text-white/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="admission-system" aria-labelledby="system-title" className={`${shell} scroll-mt-40 py-24 lg:py-32`}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <p className={sectionLabel}>The ErnestPath method</p>
            <h2 id="system-title" className={`${largeHeading} mt-6`}>The Admission Website System.</h2>
            <p className="mt-7 text-lg leading-8 text-black/60">We do not decide how a finished website might generate admissions. We design the admission journey first and build the website around it.</p>
          </div>
          <ol className="border-t border-black/20">
            {systemLayers.map(([title, text], index) => (
              <li key={title} className="grid gap-4 border-b border-black/20 py-8 sm:grid-cols-[3.5rem_0.55fr_1fr]">
                <span className="text-xs font-bold tracking-[0.14em] text-black/35">0{index + 1}</span>
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className="leading-7 text-black/60">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="what-we-build" aria-labelledby="services-title" className={`${shell} scroll-mt-40 pb-24 lg:pb-32`}>
        <div className="max-w-5xl">
          <p className={sectionLabel}>Complete service scope</p>
          <h2 id="services-title" className={`${largeHeading} mt-6`}>Everything between the first click and a trackable enquiry.</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">Each module solves a specific failure point. Your proposal includes only what the institute needs, with responsibilities and third-party dependencies stated clearly.</p>
        </div>
        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {serviceModules.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="group flex flex-col border border-black/20 bg-[#f8f6f0] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_0_#c9ff3d] sm:p-9">
                <div className="flex items-center justify-between text-black/40"><span className="text-xs font-bold tracking-[0.15em]">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" size={27} strokeWidth={1.5} /></div>
                <h3 className="mt-11 text-3xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl">{service.title}</h3>
                <div className="mt-9 border-t border-black/15 pt-6"><p className={sectionLabel}>Direct answer</p><p className="mt-3 text-lg leading-8">{service.direct}</p></div>
                <div className="mt-7 grid gap-7 border-t border-black/15 pt-6 sm:grid-cols-2">
                  <div><h4 className={sectionLabel}>Problem solved</h4><p className="mt-3 leading-7 text-black/60">{service.problem}</p></div>
                  <div><h4 className={sectionLabel}>Our approach</h4><p className="mt-3 leading-7 text-black/75">{service.solution}</p></div>
                </div>
                <div className="mt-8 border-t border-black/15 pt-7">
                  <h4 className="font-semibold">What can be included</h4>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.includes.map(item => <li key={item} className="flex items-start gap-3 text-sm leading-6 text-black/60"><Check aria-hidden="true" size={16} className="mt-1 shrink-0 text-[#66851a]" />{item}</li>)}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="search-foundations" aria-labelledby="search-title" className="scroll-mt-40 bg-[#c9ff3d]">
        <div className={`${shell} py-24 lg:py-32`}>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/55">Search foundation included</p>
              <h2 id="search-title" className={`${largeHeading} mt-6`}>Built ready for discovery—not dependent on a last-minute plugin.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-black/70">
              <p className="text-xl font-medium text-black">Search readiness begins with the sitemap, course architecture and visible content. Technical tags cannot repair a website that gives important topics no useful page.</p>
              <p>Within the agreed build, we establish search-friendly URLs, metadata patterns, semantic headings, canonical signals, crawlable navigation, internal links, sitemap and robots configuration, image foundations, performance considerations and accurate schema where applicable.</p>
              <p>Ongoing SEO is a separate growth discipline. It may include continuous research, content production, Google Business Profile work, local citations, authority building, competitor monitoring, link acquisition and regular optimisation. The proposal distinguishes launch foundations from recurring work so expectations remain honest.</p>
              <Link href="/services/seo" className="group inline-flex items-center gap-3 border-b-2 border-black pb-1 font-semibold">Explore ongoing SEO services <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="ai-title" className={`${shell} py-24 lg:py-32`}>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <p className={sectionLabel}>AEO and AI visibility</p>
            <h2 id="ai-title" className={`${largeHeading} mt-6`}>Readable by people. Understandable to machines.</h2>
            <p className="mt-7 text-lg leading-8 text-black/60">No agency can guarantee a citation in ChatGPT, Google AI Overviews or another answer engine. We can make your information clearer, more consistent, better supported and easier to interpret.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {aiFoundations.map(([title, text], index) => (
              <article key={title} className={`min-h-72 border p-6 ${index === 2 ? "border-[#10110f] bg-[#10110f] text-[#f3f0e8]" : "border-black/20"}`}>
                <div className="flex justify-between"><span className={`text-xs font-bold ${index === 2 ? "text-[#c9ff3d]" : "text-black/35"}`}>0{index + 1}</span>{index === 2 ? <Braces aria-hidden="true" size={24} /> : <Bot aria-hidden="true" size={24} strokeWidth={1.4} />}</div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">{title}</h3>
                <p className={`mt-5 text-sm leading-7 ${index === 2 ? "text-white/60" : "text-black/55"}`}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="trust-title" className="bg-[#10110f] text-[#f3f0e8]">
        <div className={`${shell} grid gap-14 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:py-32`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Trust architecture</p>
            <h2 id="trust-title" className="mt-6 text-[clamp(3rem,5.5vw,5.7rem)] font-semibold leading-[0.95] tracking-[-0.065em]">Proof must carry more weight than promises.</h2>
            <p className="mt-7 text-lg leading-8 text-white/55">We decide which form of evidence belongs beside each important claim. A result belongs near an outcome claim; faculty experience belongs near teaching credibility; student work belongs near practical learning.</p>
          </div>
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Verified student results", "Faculty profiles", "Teaching methodology", "Student projects", "Placement evidence", "Written and video reviews", "Facilities and classrooms", "Transparent course details", "Accreditations where relevant", "Original educational resources"].map(item => <div key={item} className="flex min-h-16 items-center gap-3 border border-white/15 px-4 text-sm text-white/70"><CircleCheck aria-hidden="true" size={17} className="shrink-0 text-[#c9ff3d]" />{item}</div>)}
            </div>
            <div className="mt-6 border-l-4 border-[#c9ff3d] bg-white/[0.04] p-6"><strong>Our rule:</strong><p className="mt-3 leading-7 text-white/55">We do not manufacture testimonials, ratings, certifications, student counts, placement figures or success percentages. When proof is missing, we improve the explanation or identify what the institute should document—we do not invent credibility.</p></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="technology-title" className={`${shell} py-24 lg:py-32`}>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <div>
            <p className={sectionLabel}>Technology with a reason</p>
            <h2 id="technology-title" className={`${largeHeading} mt-6`}>The stack serves the operation. The operation does not serve the stack.</h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-black/60">
            <p>Next.js is our preferred foundation for many high-performance custom websites, but technology is selected after understanding editing frequency, required integrations, internal capability, budget and future functionality.</p>
            <p>A suitable build may use Next.js, React, Node.js, a headless CMS, WordPress or another justified platform. A content team that updates programmes daily needs different controls from an institute that changes only batch dates. A custom CRM integration needs different architecture from a simple enquiry workflow.</p>
            <p>We explain the practical consequences: who can edit content, what requires development, which third-party subscriptions continue, how performance is protected and what ownership or maintenance responsibilities remain after launch.</p>
            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">{[[Code2,"Next.js"],[Smartphone,"Responsive"],[ShieldCheck,"Secure"],[Gauge,"Performant"]].map(([Icon,label])=>{const StackIcon=Icon as typeof Code2;return <div key={String(label)} className="grid min-h-28 place-items-center border border-black/20 p-3 text-center text-sm font-semibold"><StackIcon aria-hidden="true" size={24} strokeWidth={1.5}/><span>{String(label)}</span></div>})}</div>
          </div>
        </div>
      </section>

      <section aria-labelledby="timeline-title" className="bg-[#c9ff3d]">
        <div className={`${shell} py-24 lg:py-32`}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/55">A practical 90-day shape</p>
          <h2 id="timeline-title" className={`${largeHeading} mt-6 max-w-5xl`}>Three months to build the foundation. Growth continues after launch.</h2>
          <div className="mt-14 grid border-l border-t border-black/30 lg:grid-cols-3">
            {[
              ["Month 01", "Strategy and foundation", "Discovery, competitor review, positioning, audience journeys, sitemap, content requirements, wireframes, technical planning and SEO architecture. This month determines whether the project solves the right problem before development accelerates."],
              ["Month 02", "Design and development", "Visual system, responsive components, homepage, priority course pages, branch patterns, forms, content integration and agreed software connections. Reviews happen against approved structures rather than an undefined whole website."],
              ["Month 03", "Launch and optimisation", "Remaining pages, analytics, structured data, performance work, accessibility foundations, responsive testing, redirects, production launch and early post-launch checks. Search engines receive a strong platform, not a promise of instant rankings."],
            ].map(([period,title,text])=><article key={period} className="border-b border-r border-black/30 p-7"><span className="text-xs font-bold uppercase tracking-[0.16em] text-black/55">{period}</span><h3 className="mt-8 text-3xl font-semibold tracking-[-0.045em]">{title}</h3><p className="mt-5 leading-7 text-black/65">{text}</p></article>)}
          </div>
          <p className="mt-8 max-w-4xl border-l-4 border-black pl-6 text-lg leading-8">Competitive organic rankings and sustained enquiries normally require continued content, local relevance, authority and conversion improvement. The website makes that work possible; it does not replace it.</p>
        </div>
      </section>

      <section id="process" aria-labelledby="process-title" className={`${shell} scroll-mt-40 py-24 lg:py-32`}>
        <p className={sectionLabel}>How we work together</p>
        <h2 id="process-title" className={`${largeHeading} mt-6 max-w-5xl`}>A visible process with fewer surprises.</h2>
        <ol className="mt-16 border-t border-black/20">
          {process.map(([number,title,text])=><li key={number} className="grid gap-5 border-b border-black/20 py-8 sm:grid-cols-[4rem_0.7fr_1.3fr]"><span className="text-xs font-bold tracking-[0.15em] text-black/35">{number}</span><h3 className="text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="leading-7 text-black/60">{text}</p></li>)}
        </ol>
      </section>

      <section aria-labelledby="comparison-title" className={`${shell} pb-24 lg:pb-32`}>
        <p className={sectionLabel}>A different deliverable</p>
        <h2 id="comparison-title" className={`${largeHeading} mt-6 max-w-5xl`}>Generic website versus admission website.</h2>
        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead><tr className="border-y border-black/25"><th className="w-1/5 px-4 py-5 text-xs uppercase tracking-[0.14em] text-black/40">Area</th><th className="w-2/5 px-4 py-5">Generic agency website</th><th className="w-2/5 bg-[#10110f] px-4 py-5 text-[#c9ff3d]">ErnestPath admission website</th></tr></thead>
            <tbody>{comparison.map(([area,generic,ernest])=><tr key={area} className="border-b border-black/20"><th className="px-4 py-5 text-sm">{area}</th><td className="px-4 py-5 text-black/55">{generic}</td><td className="bg-[#10110f] px-4 py-5 text-white/70">{ernest}</td></tr>)}</tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="scope-title" className="bg-[#10110f] text-[#f3f0e8]">
        <div className={`${shell} grid gap-14 py-24 lg:grid-cols-2 lg:py-32`}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Common deliverables</p>
            <h2 id="scope-title" className="mt-6 text-[clamp(3rem,5vw,5.3rem)] font-semibold leading-[0.95] tracking-[-0.06em]">Clarity before the project begins.</h2>
            <p className="mt-7 text-lg leading-8 text-white/55">Every proposal identifies the actual scope. Depending on the project, deliverables may include strategy, sitemap, responsive custom design, reusable components, course and location templates, enquiry journeys, search foundations, structured data, analytics, integrations, deployment and handover guidance.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">{["Audience and competitor review","Sitemap and conversion architecture","Responsive custom interface","Course and branch systems","Forms and confirmation states","Metadata and schema foundations","Analytics and event tracking","Launch and handover support"].map(item=><div key={item} className="flex items-center gap-3 border border-white/15 p-4 text-sm text-white/65"><Check aria-hidden="true" size={16} className="text-[#c9ff3d]"/>{item}</div>)}</div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Not automatically included</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.045em]">A website quote should not hide future assumptions.</h2>
            <p className="mt-6 leading-7 text-white/55">Unless specifically listed, a project does not automatically include unlimited new pages, continuous blog writing, monthly SEO, advertising spend, photography, video production, external subscriptions, domain and hosting fees, third-party CRM costs or major functionality requested after approval.</p>
            <ul className="mt-8 space-y-3">{["Guaranteed Google positions","Guaranteed enquiry or admission volume","Fabricated ratings or student results","Unlimited revision rounds","Unscoped software functionality","Permanent third-party service fees"].map(item=><li key={item} className="flex items-center gap-3 border-b border-white/15 pb-3 text-white/65"><X aria-hidden="true" size={16} className="text-[#c9ff3d]"/>{item}</li>)}</ul>
            <p className="mt-8 border-l-4 border-[#c9ff3d] pl-5 leading-7 text-white/65">Being explicit about exclusions protects both sides and allows the institute to compare proposals using real deliverables instead of an attractive headline price.</p>
          </div>
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-title" className={`${shell} scroll-mt-40 grid gap-14 py-24 lg:grid-cols-[0.72fr_1.28fr] lg:py-32`}>
        <div className="lg:sticky lg:top-40 lg:self-start">
          <p className={sectionLabel}>Straight answers</p>
          <h2 id="faq-title" className={`${largeHeading} mt-6`}>Before you invest in a new website.</h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-black/60">Specific answers about scope, timing, search, content, integrations and what the website can realistically achieve.</p>
        </div>
        <div className="border-t border-black/20">
          {faqs.map(([question,answer],index)=><details key={question} className="group border-b border-black/20"><summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66851a] [&::-webkit-details-marker]:hidden"><span className="flex gap-4 text-lg font-semibold leading-7"><small aria-hidden="true" className="mt-1 text-xs font-bold text-black/35">{String(index+1).padStart(2,"0")}</small>{question}</span><ChevronDown aria-hidden="true" size={20} className="mt-1 shrink-0 transition-transform duration-300 group-open:rotate-180"/></summary><div className="pb-7 pl-9 pr-8"><p className="max-w-3xl leading-7 text-black/60">{answer}</p></div></details>)}
        </div>
      </section>

      <section aria-labelledby="final-cta-title" className={`${shell} border-t border-black/20 py-24 lg:py-32`}>
        <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/50"><Sparkles aria-hidden="true" size={16}/>Start with evidence</p>
        <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <h2 id="final-cta-title" className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">Your next website should do more than <span className="font-serif font-normal italic">introduce you.</span></h2>
          <div>
            <p className="text-lg leading-8 text-black/60">It should help the right student discover you, understand the right course, trust your claims and take the next measurable step.</p>
            <Link href="/tools/admission-score" className="group mt-8 flex min-h-16 items-center justify-between gap-6 bg-[#10110f] px-6 font-semibold text-[#f3f0e8] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10110f]">Check your admission score <ArrowRight aria-hidden="true" size={20} className="transition-transform group-hover:translate-x-1"/></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
