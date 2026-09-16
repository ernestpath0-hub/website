// app/services/seo/page.tsx

import type { Metadata } from 'next';
import Link from 'next/link';

import {
  ArrowRight,
  Bot,
  Check,
  ChevronDown,
  FileSearch,
  Gauge,
  Link2,
  MapPin,
  Search,
  Settings2,
  Sparkles,
  Target,
} from 'lucide-react';

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: 'SEO Services for Coaching Institutes | ErnestPath',

  description:
    'SEO services for coaching and training institutes covering Google Maps, local SEO, technical SEO, keyword research, content SEO, backlinks, schema markup and AI visibility.',

  keywords: [
    'SEO for coaching institutes',
    'coaching institute SEO services',
    'SEO for training institutes',
    'local SEO for coaching centres',
    'Google Maps SEO for institutes',
    'education SEO agency',
    'SEO services for educational institutes',
    'coaching institute digital marketing',
    'AEO for coaching institutes',
  ],

  alternates: {
    canonical: '/services/seo',
  },

  openGraph: {
    title: 'SEO Services for Coaching Institutes | ErnestPath',
    description:
      'Improve your coaching institute’s visibility across Google Search, Google Maps and AI-generated answers—and turn searches into admission enquiries.',
    url: '/services/seo',
    siteName: 'ErnestPath',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services for Coaching Institutes | ErnestPath',
    description:
      'Local SEO, technical SEO, content, authority building and AI visibility designed around admissions.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================================================
   PAGE DATA
========================================================= */

const seoServices = [
  {
    number: '01',
    id: 'local-seo',
    icon: MapPin,
    title: 'Local SEO and Google Maps Visibility',

    directAnswer:
      'Local SEO helps your coaching institute appear when nearby students and parents search for courses, institutes or coaching centres in their city or area.',

    problem:
      'Parents search “coaching institute near me,” “best NEET coaching in Hyderabad” or “software training institute in Visakhapatnam,” but your institute does not appear in Google Maps or the local results.',

    solution:
      'We improve the local relevance, accuracy and authority of your institute so Google can confidently show it for location-based searches.',

    includes: [
      'Google Business Profile optimisation',
      'Primary and secondary category selection',
      'Course and service information optimisation',
      'Branch address and contact consistency',
      'Local citation creation and cleanup',
      'Google Maps visibility tracking',
      'Review acquisition guidance',
      'Location and branch landing pages',
      'Local keyword targeting',
      'Duplicate listing identification',
    ],

    outcomes: [
      'Improved visibility in Google Maps',
      'More calls and direction requests',
      'Better visibility for city-specific searches',
      'Stronger discovery for every genuine branch',
    ],
  },

  {
    number: '02',
    id: 'technical-seo',
    icon: Gauge,
    title: 'On-Page and Technical SEO',

    directAnswer:
      'Technical SEO makes your institute’s website fast, mobile-friendly, crawlable and easy for search engines to understand and index.',

    problem:
      'Your website may look acceptable, but slow loading, weak mobile usability, broken links or unclear page structure can prevent important course pages from ranking.',

    solution:
      'We improve the technical foundation and on-page structure of your website so users and search engines can understand every important page.',

    includes: [
      'Complete technical SEO audit',
      'Core Web Vitals improvements',
      'Mobile-first usability fixes',
      'Page speed optimisation',
      'Title tag and meta-description optimisation',
      'Heading structure improvements',
      'Internal linking architecture',
      'Canonical tag implementation',
      'XML sitemap configuration',
      'Robots.txt review',
      'Crawl error resolution',
      'Broken-link identification',
      'Image SEO and alternative text',
      'Indexing and duplicate-content checks',
    ],

    outcomes: [
      'Faster website performance',
      'Improved mobile experience',
      'Clearer course-page relevance',
      'Better crawling and indexation',
    ],
  },

  {
    number: '03',
    id: 'keyword-research',
    icon: FileSearch,
    title: 'Keyword and Competitor Research',

    directAnswer:
      'Keyword research identifies the exact phrases students and parents use when comparing courses, fees, locations, careers and coaching institutes.',

    problem:
      'Many institutes target broad keywords without understanding search intent, local competition or which searches are likely to produce admission enquiries.',

    solution:
      'We identify realistic keyword opportunities based on your courses, locations, audience, competitors and admission priorities.',

    includes: [
      'Course-specific keyword research',
      'City and neighbourhood keyword research',
      'Search-intent classification',
      'Competitor keyword-gap analysis',
      'Competitor landing-page benchmarking',
      'Long-tail keyword discovery',
      'Parent and student question research',
      'Admission-stage keyword mapping',
      'Keyword clustering',
      'Page-to-keyword mapping',
    ],

    outcomes: [
      'Clear keyword priorities',
      'Reduced keyword cannibalisation',
      'Better-targeted service pages',
      'Content based on real search demand',
    ],
  },

  {
    number: '04',
    id: 'content-seo',
    icon: Search,
    title: 'Content and Blog SEO',

    directAnswer:
      'Content SEO helps your institute appear during the research stage, before a student or parent has selected a coaching provider.',

    problem:
      'Without helpful content, your institute misses searches such as “NEET syllabus 2027,” “JEE preparation strategy” or “MERN stack career opportunities.”',

    solution:
      'We build useful content around the questions students and parents ask throughout their decision-making journey.',

    includes: [
      'SEO content strategy',
      'Admission-cycle content calendars',
      'Course and exam topic clusters',
      'Blog topic research',
      'Student and parent FAQ content',
      'Course comparison pages',
      'Career and outcome content',
      'Existing-content optimisation',
      'Content refreshing',
      'Contextual internal linking',
      'Featured-snippet formatting',
      'Author and expertise signals',
    ],

    outcomes: [
      'Earlier discovery in the admission journey',
      'More relevant organic traffic',
      'Stronger topical authority',
      'Better-qualified website visitors',
    ],
  },

  {
    number: '05',
    id: 'schema-aeo',
    icon: Bot,
    title: 'Schema Markup, Rich Results and AI Visibility',

    directAnswer:
      'Schema markup and Answer Engine Optimisation help search engines and AI systems understand your institute, courses, locations, reviews and answers more accurately.',

    problem:
      'Competitors may display richer course, rating, location or FAQ information while your institute remains difficult for search engines and AI assistants to interpret.',

    solution:
      'We structure your website content for traditional search results, featured answers, AI Overviews and conversational search systems.',

    includes: [
      'EducationalOrganization schema',
      'LocalBusiness schema',
      'Course schema',
      'FAQPage schema',
      'Breadcrumb schema',
      'Review schema when eligible',
      'Organisation and website entity markup',
      'Direct-answer content formatting',
      'Question-based heading structure',
      'Entity and brand consistency',
      'AI-readable service summaries',
      'llms.txt implementation',
    ],

    outcomes: [
      'Clearer search-engine understanding',
      'Eligibility for relevant rich results',
      'Better direct-answer visibility',
      'Stronger AI citation readiness',
    ],
  },

  {
    number: '06',
    id: 'off-page-seo',
    icon: Link2,
    title: 'Off-Page SEO and Authority Building',

    directAnswer:
      'Off-page SEO builds trust through relevant mentions, citations, partnerships and backlinks from websites connected to education and your local market.',

    problem:
      'Even useful pages may struggle to outrank established institutes that have stronger backlink profiles, trusted mentions and broader online authority.',

    solution:
      'We build relevant authority without depending on spammy backlinks, automated link packages or unrelated directories.',

    includes: [
      'Backlink profile audit',
      'Competitor backlink analysis',
      'Education-directory listings',
      'Relevant business citations',
      'Guest-content opportunities',
      'Local education partnerships',
      'School and community partnerships',
      'Linkable education resources',
      'Unnatural-link monitoring',
      'Brand mention opportunities',
    ],

    outcomes: [
      'Improved domain authority',
      'Greater ranking competitiveness',
      'Stronger local trust signals',
      'Relevant referral traffic',
    ],
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Diagnose the visibility gaps',
    description:
      'We audit your website, course pages, Google Business Profile, competitors, rankings, technical health and enquiry paths.',
  },
  {
    number: '02',
    title: 'Prioritise by admission impact',
    description:
      'Every task is prioritised using search intent, ranking feasibility, course value, location and upcoming admission dates.',
  },
  {
    number: '03',
    title: 'Fix, optimise and publish',
    description:
      'We improve the technical foundation, optimise priority pages, strengthen local visibility and publish useful search-led content.',
  },
  {
    number: '04',
    title: 'Measure and compound',
    description:
      'We measure qualified enquiries, calls, Maps actions, rankings and conversion behaviour—then expand what is producing results.',
  },
];

const faqs = [
  {
    question: 'What is SEO for coaching institutes?',
    answer:
      'SEO for coaching institutes is the process of improving an institute’s visibility in Google Search, Google Maps and relevant AI-generated answers. It includes technical optimisation, local SEO, course-page optimisation, content creation, structured data and authority building.',
  },
  {
    question: 'How can SEO help a coaching institute get more admissions?',
    answer:
      'SEO helps students and parents discover an institute while searching for courses, exam preparation, fees, locations and comparisons. Effective SEO connects these searches to useful landing pages and clear enquiry actions such as calls, forms, WhatsApp messages and counselling requests.',
  },
  {
    question: 'How long does SEO take to show results?',
    answer:
      'Technical fixes and Google Business Profile improvements may create early movement, but significant organic growth usually compounds over several months. The timeline depends on your location, competition, website condition, existing authority and the keywords being targeted.',
  },
  {
    question: 'Can you guarantee the first position on Google?',
    answer:
      'No legitimate SEO provider can guarantee a specific Google ranking because search results are controlled by Google and change regularly. ErnestPath focuses on measurable improvements in relevant visibility, qualified enquiries and organic admission opportunities.',
  },
  {
    question: 'Does your SEO service include Google Maps?',
    answer:
      'Yes. Local SEO includes Google Business Profile optimisation, category selection, service information, citation consistency, review guidance, local landing pages and visibility improvements for location-based searches.',
  },
  {
    question: 'Can you optimise SEO for multiple institute branches?',
    answer:
      'Yes. Each genuine branch can receive a location-specific strategy including its own Google Business Profile, consistent business information, local citations and a useful branch landing page. Duplicate or doorway pages are avoided.',
  },
  {
    question: 'Do coaching institutes need a blog for SEO?',
    answer:
      'A blog is useful when it answers real student and parent questions. Institutes do not need to publish daily. A focused content plan covering courses, exams, careers, comparisons and admission questions is usually more valuable than frequent low-quality posts.',
  },
  {
    question: 'What is AEO for coaching institutes?',
    answer:
      'Answer Engine Optimisation, or AEO, structures information so search engines and AI assistants can understand and summarise it accurately. It uses direct answers, semantic headings, structured data, entity consistency and clearly organised course and location information.',
  },
  {
    question: 'Can SEO make our institute appear in ChatGPT or Google AI Overviews?',
    answer:
      'No agency can guarantee placement in a particular AI answer. However, clear entity information, authoritative content, structured data, consistent online mentions and direct-answer formatting can improve the likelihood that AI systems understand and cite an institute.',
  },
  {
    question: 'How do you measure SEO performance?',
    answer:
      'We measure qualified calls, enquiry forms, WhatsApp actions, Google Maps interactions, course-page conversions, relevant keyword visibility, organic traffic quality and technical improvements. Rankings are treated as evidence, while enquiries are the business outcome.',
  },
];

const relatedServices = [
  {
    title: 'Conversion-focused websites',
    description:
      'Turn growing search visibility into enquiries with faster, clearer and mobile-first institute websites.',
    href: '/services/website-development',
    label: 'Explore website development',
  },
  {
    title: 'Google and Meta advertising',
    description:
      'Capture immediate admission demand while your long-term organic visibility continues to grow.',
    href: '/services/ads',
    label: 'Explore performance ads',
  },
  {
    title: 'Admission visibility score',
    description:
      'Check the current digital gaps that may be reducing enquiries for your coaching institute.',
    href: '/tools/admission-score',
    label: 'Check your free score',
  },
];

/* =========================================================
   STRUCTURED DATA
========================================================= */

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://ernestpath.com/services/seo#service',
  name: 'SEO Services for Coaching Institutes',
  serviceType: 'Search engine optimisation for coaching institutes',
  url: 'https://ernestpath.com/services/seo',

  description:
    'Local SEO, technical SEO, keyword research, content SEO, schema markup, Answer Engine Optimisation and authority building for coaching and training institutes.',

  provider: {
    '@type': 'Organization',
    '@id': 'https://ernestpath.com/#organization',
    name: 'ErnestPath',
    url: 'https://ernestpath.com',
  },

  areaServed: {
    '@type': 'Country',
    name: 'India',
  },

  audience: {
    '@type': 'BusinessAudience',
    audienceType:
      'Coaching institutes, training institutes and educational organisations',
  },

  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'SEO services for coaching institutes',
    itemListElement: seoServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.directAnswer,
      },
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://ernestpath.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'SEO Services',
      item: 'https://ernestpath.com/services/seo',
    },
  ],
};

function safeJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

/* =========================================================
   PAGE
========================================================= */

export default function SEOPage() {
  return (
    <main
      id="main-content"
      className="overflow-hidden bg-[#f3f0e8] text-[#10110f]"
    >
      {/* Structured data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(serviceSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLd(breadcrumbSchema),
        }}
      />

      {/* =====================================================
          BREADCRUMBS
      ====================================================== */}

      <div className="bg-[#10110f] pt-28 text-[#f3f0e8]">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl items-center gap-2 px-2 py-5 text-sm text-white/55 lg:px-8"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
          >
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <span aria-current="page" className="text-white/80">
            SEO services
          </span>
        </nav>
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        aria-labelledby="seo-hero-title"
        className="bg-[#10110f] text-[#f3f0e8]"
      >
        <div className="mx-auto grid min-h-[700px] w-[calc(100%-2rem)] max-w-7xl items-center gap-16 px-2 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/65">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-[#c9ff3d]"
              />
              SEO for coaching institutes
            </p>

            <h1
              id="seo-hero-title"
              className="max-w-5xl text-[clamp(3.8rem,8vw,7.7rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
            >
              Be found before
              <br />

              <span className="font-serif font-normal italic text-[#c9ff3d]">
                admissions begin.
              </span>
            </h1>

            <p className="mt-9 max-w-2xl text-lg leading-8 text-white/65">
              ErnestPath helps coaching and training institutes become visible
              across Google Search, Google Maps and AI-generated answers—and
              converts that visibility into qualified admission enquiries.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/tools/admission-score"
                className="group inline-flex min-h-14 items-center justify-between gap-5 bg-[#c9ff3d] px-6 font-semibold text-[#10110f] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
              >
                Check your SEO visibility

                <ArrowRight
                  aria-hidden="true"
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#seo-services"
                className="inline-flex min-h-14 items-center justify-between gap-5 border border-white/20 px-6 font-medium text-white/80 transition-colors hover:border-[#c9ff3d] hover:text-[#c9ff3d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c9ff3d]"
              >
                Explore the complete service
                <ChevronDown aria-hidden="true" size={18} />
              </a>
            </div>
          </div>

          {/* Search visibility card */}

          <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-[2rem] border border-white/15 bg-[#181916] p-4 shadow-[24px_24px_0_#c9ff3d] sm:p-7">
              <div className="flex min-h-16 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4">
                <Search
                  aria-hidden="true"
                  size={19}
                  className="shrink-0 text-white/50"
                />

                <span className="text-sm text-white/75 sm:text-base">
                  best coaching institute near me
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-[#f3f0e8] p-5 text-[#10110f] sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#c9ff3d]">
                    <MapPin aria-hidden="true" size={20} />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/45">
                      Local search result
                    </p>

                    <p className="mt-1 font-semibold">Your coaching institute</p>
                  </div>

                  <span className="ml-auto text-xl text-[#66851a]">↑</span>
                </div>

                <div className="mt-7 space-y-3">
                  <div className="h-2.5 rounded-full bg-black/10" />

                  <div className="h-2.5 w-4/5 rounded-full bg-black/10" />

                  <div className="h-2.5 w-3/5 rounded-full bg-black/10" />
                </div>

                <div className="mt-7 grid grid-cols-3 gap-2 text-center text-xs font-semibold">
                  <span className="border border-black/10 px-2 py-3">Call</span>

                  <span className="border border-black/10 px-2 py-3">
                    Directions
                  </span>

                  <span className="border border-black/10 px-2 py-3">
                    Website
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mx-auto flex w-[calc(100%-2rem)] max-w-7xl justify-between gap-8 overflow-hidden border-t border-white/10 px-2 py-5 text-xs font-bold tracking-[0.18em] text-white/35 lg:px-8"
        >
          <span>SEARCH</span>
          <span>MAPS</span>
          <span>CONTENT</span>
          <span>AUTHORITY</span>
          <span>AI ANSWERS</span>
        </div>
      </section>

      {/* =====================================================
          DIRECT ANSWER
      ====================================================== */}

      <section
        aria-labelledby="direct-answer-heading"
        className="mx-auto w-[calc(100%-2rem)] max-w-7xl px-2 py-20 lg:px-8 lg:py-28"
      >
        <div className="grid gap-10 border-y border-black/20 py-10 lg:grid-cols-[0.35fr_1fr] lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
            Direct answer
          </p>

          <div>
            <h2
              id="direct-answer-heading"
              className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
            >
              What does SEO do for a coaching institute?
            </h2>

            <p className="mt-6 max-w-4xl text-lg leading-8 text-black/65">
              SEO helps a coaching institute appear when students and parents
              search for courses, exam preparation, fees, locations and
              training providers. It improves visibility across Google Search
              and Maps, then connects that demand to pages designed to generate
              calls, counselling requests and admission enquiries.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM SECTION
      ====================================================== */}

      <section
        aria-labelledby="visibility-problem-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-7xl px-2 pb-24 lg:px-8 lg:pb-32"
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
              The visibility problem
            </p>

            <h2
              id="visibility-problem-title"
              className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]"
            >
              Your institute may be excellent.
              <br />
              Google cannot assume it.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-black/65">
            <p className="text-xl text-[#10110f]">
              If students cannot discover your courses while actively
              searching, that demand moves to another institute.
            </p>

            <p>
              The issue is rarely just “we need more keywords.” Visibility
              depends on your Google Business Profile, website performance,
              course pages, content quality, authority, location relevance and
              how clearly machines can understand your information.
            </p>

            <p>
              ErnestPath treats these as one connected enrollment system—not
              unrelated SEO tasks.
            </p>
          </div>
        </div>

        <div className="mt-16 grid border-y border-black/20 md:grid-cols-3">
          {[
            {
              title: 'Missing from local search',
              text: 'High-intent students and parents never reach your counsellors.',
            },
            {
              title: 'Invisible course pages',
              text: 'Google cannot confidently match your courses to specific searches.',
            },
            {
              title: 'Traffic without enquiries',
              text: 'Visitors arrive, but weak page structure fails to move them toward action.',
            },
          ].map((problem, index) => (
            <article
              key={problem.title}
              className={`py-8 md:px-8 ${
                index !== 2 ? 'border-b border-black/20 md:border-b-0 md:border-r' : ''
              }`}
            >
              <h3 className="font-semibold">{problem.title}</h3>

              <p className="mt-3 leading-7 text-black/55">{problem.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          SIX SEO SERVICES
      ====================================================== */}

      <section
        id="seo-services"
        aria-labelledby="seo-services-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-7xl px-2 pb-24 lg:px-8 lg:pb-32"
      >
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
            Six connected SEO systems
          </p>

          <h2
            id="seo-services-title"
            className="text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]"
          >
            SEO based on how parents and students actually search.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Each service removes a different barrier between your institute and
            the next qualified enquiry.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {seoServices.map((service) => {
            const Icon = service.icon;

            return (
              <article
                id={service.id}
                key={service.id}
                className="group flex scroll-mt-32 flex-col border border-black/20 bg-[#f8f6f0] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_0_#c9ff3d] sm:p-9"
              >
                <div className="flex items-center justify-between text-black/45">
                  <span className="text-xs font-bold tracking-[0.18em]">
                    {service.number}
                  </span>

                  <Icon aria-hidden="true" size={27} strokeWidth={1.5} />
                </div>

                <h3 className="mt-12 max-w-xl text-3xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl">
                  {service.title}
                </h3>

                <div className="mt-10 border-t border-black/15 pt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                    Direct answer
                  </p>

                  <p className="mt-3 text-lg leading-8">
                    {service.directAnswer}
                  </p>
                </div>

                <div className="mt-7 grid gap-6 border-t border-black/15 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                      The problem
                    </p>

                    <p className="mt-3 leading-7 text-black/60">
                      {service.problem}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                      How we solve it
                    </p>

                    <p className="mt-3 leading-7 text-black/75">
                      {service.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-8 border-t border-black/15 pt-7">
                  <h4 className="font-semibold">What is included</h4>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-black/60"
                      >
                        <Check
                          aria-hidden="true"
                          size={16}
                          className="mt-1 shrink-0 text-[#68871b]"
                        />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-black/15 pt-7">
                  <h4 className="font-semibold">Expected improvements</h4>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {service.outcomes.map((outcome) => (
                      <li
                        key={outcome}
                        className="border border-black/15 px-3 py-2 text-xs font-medium text-black/60"
                      >
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          LOCAL SEARCH EXAMPLES
      ====================================================== */}

      <section
        aria-labelledby="local-search-title"
        className="bg-[#10110f] text-[#f3f0e8]"
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-14 px-2 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Search intent examples
            </p>

            <h2
              id="local-search-title"
              className="text-[clamp(3rem,5vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.06em]"
            >
              Visibility for the searches closest to a decision.
            </h2>
          </div>

          <div className="border-t border-white/15">
            {[
              'best NEET coaching institute in Hyderabad',
              'JEE coaching near me',
              'best software training institute in Visakhapatnam',
              'MERN stack training institute in Vijayawada',
              'coaching institute fees and reviews',
              'best training institute for placements',
            ].map((query, index) => (
              <div
                key={query}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-white/15 py-6"
              >
                <span className="text-xs text-[#c9ff3d]">
                  0{index + 1}
                </span>

                <p className="text-lg text-white/75">“{query}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          AEO SECTION
      ====================================================== */}

      <section
        aria-labelledby="aeo-title"
        className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-14 px-2 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32"
      >
        <div className="grid min-h-[380px] grid-cols-[auto_1fr_auto] items-center gap-4 bg-[#10110f] p-5 text-[#f3f0e8] sm:p-8">
          <Settings2 aria-hidden="true" size={38} strokeWidth={1.2} />

          <div className="space-y-3">
            {['Institute', 'Course', 'Location', 'Direct answer'].map(
              (entity, index) => (
                <div
                  key={entity}
                  className={`border px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.14em] ${
                    index === 3
                      ? 'border-[#c9ff3d] bg-[#c9ff3d] text-[#10110f]'
                      : 'border-white/15 text-white/55'
                  }`}
                >
                  {entity}
                </div>
              ),
            )}
          </div>

          <Bot aria-hidden="true" size={38} strokeWidth={1.2} />
        </div>

        <div className="self-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
            Search is changing
          </p>

          <h2
            id="aeo-title"
            className="text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.065em]"
          >
            Visible to people.
            <br />

            <span className="font-serif font-normal italic">
              Understandable to machines.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">
            Search discovery now includes traditional results, Maps, featured
            answers, AI Overviews and conversational assistants. We organise
            your website so machines can understand who you serve, what you
            teach, where you operate and why your information is trustworthy.
          </p>

          <div className="mt-8 border-l-4 border-[#c9ff3d] pl-6">
            <h3 className="font-semibold">
              Can AEO guarantee a ChatGPT mention?
            </h3>

            <p className="mt-3 leading-7 text-black/60">
              No. AI platforms choose their own sources. AEO improves clarity,
              authority and citation readiness, but no agency can guarantee
              inclusion in a particular AI response.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}

      <section
        aria-labelledby="seo-process-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-7xl px-2 pb-24 lg:px-8 lg:pb-32"
      >
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
          How the work moves
        </p>

        <h2
          id="seo-process-title"
          className="max-w-5xl text-[clamp(3rem,6vw,6rem)] font-semibold leading-[0.95] tracking-[-0.065em]"
        >
          A clear path from audit to compounding growth.
        </h2>

        <ol className="mt-16 border-t border-black/20">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="grid gap-5 border-b border-black/20 py-8 sm:grid-cols-[4rem_0.7fr_1fr] sm:gap-8"
            >
              <span className="text-xs font-bold tracking-[0.15em] text-black/40">
                {step.number}
              </span>

              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                {step.title}
              </h3>

              <p className="max-w-2xl leading-7 text-black/60">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* =====================================================
          MEASUREMENT
      ====================================================== */}

      <section
        aria-labelledby="measurement-title"
        className="bg-[#c9ff3d]"
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-14 px-2 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/55">
              What we measure
            </p>

            <h2
              id="measurement-title"
              className="text-[clamp(3rem,5.5vw,5.7rem)] font-semibold leading-[0.95] tracking-[-0.065em]"
            >
              Rankings are evidence.
              <br />
              Enquiries are the outcome.
            </h2>
          </div>

          <div className="border-t border-black/30">
            {[
              'Qualified calls and admission enquiries from organic search',
              'Google Maps calls, website visits and direction requests',
              'Course and location visibility grouped by search intent',
              'Conversions across priority landing pages',
              'Technical health and indexation improvements',
              'Organic traffic quality—not traffic volume alone',
            ].map((metric, index) => (
              <div
                key={metric}
                className="grid grid-cols-[3rem_1fr] gap-4 border-b border-black/30 py-5"
              >
                <span className="text-xs font-bold">
                  0{index + 1}
                </span>

                <p className="font-medium leading-7">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          RELATED SERVICES / INTERNAL LINKS
      ====================================================== */}

      <section
        aria-labelledby="related-services-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-7xl px-2 py-24 lg:px-8 lg:py-32"
      >
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
          Build the complete enrollment system
        </p>

        <h2
          id="related-services-title"
          className="max-w-5xl text-[clamp(3rem,5.5vw,5.7rem)] font-semibold leading-[0.95] tracking-[-0.065em]"
        >
          SEO works better when the next step is built to convert.
        </h2>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {relatedServices.map((service) => (
            <article
              key={service.href}
              className="flex min-h-80 flex-col border border-black/20 p-7"
            >
              <Target
                aria-hidden="true"
                size={27}
                strokeWidth={1.5}
                className="text-black/45"
              />

              <h3 className="mt-10 text-3xl font-semibold tracking-[-0.045em]">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-black/60">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="group mt-auto flex items-center justify-between border-t border-black/20 pt-5 font-semibold hover:text-[#5b7714] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5b7714]"
              >
                {service.label}

                <ArrowRight
                  aria-hidden="true"
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl leading-7 text-black/60">
          Students and working professionals can explore our{' '}
          <Link
            href="/academy"
            className="font-semibold text-[#4e6810] underline decoration-[#c9ff3d] decoration-4 underline-offset-4"
          >
            practical MERN Stack Academy
          </Link>
          , where training is built around real client-style projects,
          portfolios and freelance readiness.
        </p>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section
        aria-labelledby="faq-title"
        className="mx-auto grid w-[calc(100%-2rem)] max-w-7xl gap-14 px-2 pb-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:pb-32"
      >
        <div>
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-black/45">
            Straight answers
          </p>

          <h2
            id="faq-title"
            className="text-[clamp(3rem,5vw,5.2rem)] font-semibold leading-[0.95] tracking-[-0.06em]"
          >
            Before you invest in SEO.
          </h2>

          <p className="mt-7 max-w-md text-lg leading-8 text-black/60">
            Practical answers without ranking guarantees, vague terminology or
            vanity-metric promises.
          </p>
        </div>

        <div className="border-t border-black/20">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group border-b border-black/20"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#66851a] [&::-webkit-details-marker]:hidden">
                <span className="flex gap-4 text-lg font-semibold leading-7">
                  <span
                    aria-hidden="true"
                    className="mt-1 text-xs font-bold text-black/35"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {faq.question}
                </span>

                <ChevronDown
                  aria-hidden="true"
                  size={20}
                  className="mt-1 shrink-0 transition-transform duration-300 group-open:rotate-180"
                />
              </summary>

              <div className="pb-7 pl-9 pr-8">
                <p className="max-w-3xl leading-7 text-black/60">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        aria-labelledby="seo-cta-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-7xl border-t border-black/20 px-2 py-24 lg:px-8 lg:py-32"
      >
        <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-black/50">
          <Sparkles aria-hidden="true" size={16} />
          Begin with a diagnosis
        </p>

        <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <h2
            id="seo-cta-title"
            className="text-[clamp(3.5rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]"
          >
            Find what is costing you{' '}

            <span className="font-serif font-normal italic">visibility.</span>
          </h2>

          <div>
            <p className="text-lg leading-8 text-black/60">
              Check the digital gaps between your institute, local search
              demand and the next admission enquiry.
            </p>

            <Link
              href="/tools/admission-score"
              className="group mt-8 flex min-h-16 items-center justify-between gap-6 bg-[#10110f] px-6 font-semibold text-[#f3f0e8] transition-transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#10110f]"
            >
              Get your free admission score

              <ArrowRight
                aria-hidden="true"
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}