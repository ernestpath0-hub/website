import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";

import { getPublishedInsights } from "@/data/insights";

const SITE_URL = "https://ernestpath.com";

export const metadata: Metadata = {
  title: "Insights for Coaching Institute Growth | ErnestPath",

  description:
    "Practical insights for coaching and training institutes on websites, SEO, Google Ads, Meta Ads, conversion, search visibility and enrollment growth.",

  alternates: {
    canonical: "/insights",
  },

  openGraph: {
    title: "ErnestPath Insights | Coaching Institute Growth",
    description:
      "Practical analysis and decision guides for coaching institutes covering websites, SEO, paid advertising, conversion and enrollment growth.",
    url: "/insights",
    siteName: "ErnestPath",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ErnestPath Insights | Coaching Institute Growth",
    description:
      "Practical thinking for coaching institute websites, SEO, advertising and enrollment growth.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

function safeJson(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function InsightsPage() {
  const insights = getPublishedInsights();

  const featuredInsight =
    insights.find((insight) => insight.featured) ?? insights[0];

  const remainingInsights = featuredInsight
    ? insights.filter(
        (insight) => insight.slug !== featuredInsight.slug,
      )
    : [];

  const categories = Array.from(
    new Set(insights.map((insight) => insight.category)),
  );

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": `${SITE_URL}/insights/#collection`,

        url: `${SITE_URL}/insights`,

        name: "ErnestPath Insights",

        description:
          "Practical insights for coaching and training institutes covering websites, SEO, paid advertising, conversion and enrollment growth.",

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },

        inLanguage: "en-IN",

        hasPart: insights.map((insight) => ({
          "@type": "BlogPosting",

          "@id": `${SITE_URL}/insights/${insight.slug}#article`,

          headline: insight.title,

          url: `${SITE_URL}/insights/${insight.slug}`,

          datePublished: insight.publishedAt,

          dateModified:
            insight.updatedAt ?? insight.publishedAt,

          articleSection: insight.category,

          author: {
            "@type": insight.author.type,
            name: insight.author.name,
          },
        })),
      },

      {
        "@type": "BreadcrumbList",

        "@id": `${SITE_URL}/insights/#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },

          {
            "@type": "ListItem",
            position: 2,
            name: "Insights",
            item: `${SITE_URL}/insights`,
          },
        ],
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-[#f3f0e8] text-[#10110f]">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJson(structuredData),
        }}
      />

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#10110f] pb-24 pt-36 text-[#f3f0e8] lg:pb-32 lg:pt-44">
        {/* Decorative elements */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-72 -top-52 h-[48rem] w-[48rem] rounded-full border border-[#c9ff3d]/10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-20 h-[26rem] w-[26rem] rounded-full border border-white/[0.05]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#c9ff3d]/25 to-transparent"
        />

        <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-14 flex items-center gap-2 text-sm text-white/36"
          >
            <Link
              href="/"
              className="transition-colors hover:text-[#c9ff3d]"
            >
              Home
            </Link>

            <span aria-hidden="true">/</span>

            <span className="text-white/62">Insights</span>
          </nav>

          <div className="grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            {/* Left */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9ff3d]">
                ErnestPath Insights
              </p>

              <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-white/42">
                <BookOpen
                  aria-hidden="true"
                  size={17}
                  className="mt-0.5 shrink-0"
                />

                <span>
                  Research, explanations and practical decision guides
                  for education businesses.
                </span>
              </div>
            </div>

            {/* Right */}
            <div>
              <h1 className="max-w-6xl text-[clamp(4rem,8vw,8.7rem)] font-semibold leading-[0.86] tracking-[-0.078em]">
                Better questions.
                <br />

                <span className="text-[#c9ff3d]">
                  Better growth decisions.
                </span>
              </h1>

              <p className="mt-9 max-w-3xl text-xl leading-9 text-white/58">
                Practical insights for coaching and training institutes
                navigating websites, search visibility, paid acquisition,
                conversion and enrollment growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INSIGHT PRINCIPLES
      ====================================================== */}
      <section
        aria-label="About ErnestPath Insights"
        className="border-b border-black/10"
      >
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 md:grid-cols-3 lg:px-10">
          <div className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:pr-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/38">
              Written for
            </p>

            <p className="mt-3 font-semibold">
              Institute owners and growth teams
            </p>
          </div>

          <div className="border-b border-black/10 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/38">
              Focus
            </p>

            <p className="mt-3 font-semibold">
              Decisions instead of marketing jargon
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/38">
              Standard
            </p>

            <p className="mt-3 font-semibold">
              Useful context, clear reasoning and honest limits
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY / DISCOVERY STRIP
      ====================================================== */}
      {categories.length > 0 && (
        <section
          aria-labelledby="topics-title"
          className="border-b border-black/10 bg-[#f7f4ed]"
        >
          <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 py-8 sm:px-5 lg:px-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <Search
                  aria-hidden="true"
                  size={16}
                  className="text-black/42"
                />

                <p
                  id="topics-title"
                  className="text-xs font-bold uppercase tracking-[0.18em] text-black/42"
                >
                  Explore topics
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="border border-black/12 bg-[#f3f0e8] px-4 py-2 text-sm text-black/58"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FEATURED INSIGHT
      ====================================================== */}
      {featuredInsight && (
        <section
          aria-labelledby="featured-insight-title"
          className="py-24 lg:py-32"
        >
          <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
            <div className="mb-10 flex items-center gap-5">
              <div className="flex items-center gap-3">
                <Sparkles
                  aria-hidden="true"
                  size={16}
                  className="text-black/42"
                />

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/42">
                  Featured insight
                </p>
              </div>

              <span className="h-px flex-1 bg-black/10" />
            </div>

            <article className="group grid overflow-hidden border border-black/12 bg-[#f7f4ed] lg:grid-cols-[0.72fr_1.28fr]">
              {/* Meta panel */}
              <div className="relative flex min-h-[23rem] flex-col justify-between overflow-hidden bg-[#c9ff3d] p-7 sm:p-10 lg:min-h-[35rem]">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-28 -right-28 h-72 w-72 rounded-full border border-black/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-14 -right-14 h-40 w-40 rounded-full border border-black/10"
                />

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/48">
                    {featuredInsight.category}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-black/55">
                    <span className="flex items-center gap-2">
                      <CalendarDays
                        aria-hidden="true"
                        size={15}
                      />

                      <time dateTime={featuredInsight.publishedAt}>
                        {formatDate(featuredInsight.publishedAt)}
                      </time>
                    </span>

                    <span className="flex items-center gap-2">
                      <Clock3
                        aria-hidden="true"
                        size={15}
                      />

                      {featuredInsight.readTime}
                    </span>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-black/40">
                    ErnestPath Insight
                  </p>

                  <p
                    aria-hidden="true"
                    className="mt-4 text-[7rem] font-semibold leading-[0.78] tracking-[-0.08em] text-black/[0.08] sm:text-[9rem]"
                  >
                    01
                  </p>
                </div>
              </div>

              {/* Article content */}
              <div className="flex flex-col p-7 sm:p-10 lg:p-14">
                <h2
                  id="featured-insight-title"
                  className="max-w-5xl text-[clamp(2.8rem,4.8vw,5.5rem)] font-semibold leading-[0.93] tracking-[-0.06em]"
                >
                  {featuredInsight.title}
                </h2>

                <p className="mt-8 max-w-3xl text-lg leading-8 text-black/60">
                  {featuredInsight.excerpt}
                </p>

                {/* Direct-answer preview */}
                <div className="mt-9 border-l-2 border-[#c9ff3d] pl-5">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/36">
                    In short
                  </p>

                  <p className="mt-3 max-w-3xl text-base leading-8 text-black/56">
                    {featuredInsight.directAnswer}
                  </p>
                </div>

                <Link
                  href={`/insights/${featuredInsight.slug}`}
                  className="mt-12 flex items-center justify-between border-t border-black/12 pt-7 font-semibold transition-colors hover:text-black/60 lg:mt-auto"
                >
                  Read the full insight

                  <ArrowUpRight
                    aria-hidden="true"
                    size={19}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* =====================================================
          ALL INSIGHTS
      ====================================================== */}
      {remainingInsights.length > 0 && (
        <section
          aria-labelledby="all-insights-title"
          className="border-t border-black/10 bg-[#f7f4ed] py-24 lg:py-32"
        >
          <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.52fr_1.48fr]">
              {/* Intro */}
              <div className="lg:sticky lg:top-28 lg:self-start">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                  All insights
                </p>

                <h2
                  id="all-insights-title"
                  className="mt-6 max-w-md text-[clamp(2.8rem,4.5vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.055em]"
                >
                  Explore the thinking behind better enrollment systems.
                </h2>

                <p className="mt-6 max-w-md text-base leading-8 text-black/52">
                  Each insight focuses on a practical question facing
                  coaching institutes instead of publishing content simply
                  to target another keyword.
                </p>
              </div>

              {/* Insight cards */}
              <div className="grid gap-5 md:grid-cols-2">
                {remainingInsights.map((insight, index) => (
                  <article
                    key={insight.slug}
                    className="group flex min-h-[28rem] flex-col border border-black/12 bg-[#f3f0e8] p-7 transition-colors duration-300 hover:bg-white sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40">
                        {insight.category}
                      </p>

                      <span className="text-xs font-bold text-black/20">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-7 text-[clamp(1.8rem,2.6vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
                      {insight.title}
                    </h3>

                    <p className="mt-6 text-base leading-7 text-black/56">
                      {insight.excerpt}
                    </p>

                    <div className="mt-auto pt-10">
                      <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-black/10 pt-5 text-sm text-black/40">
                        <time dateTime={insight.publishedAt}>
                          {formatDate(insight.publishedAt)}
                        </time>

                        <span>{insight.readTime}</span>
                      </div>

                      <Link
                        href={`/insights/${insight.slug}`}
                        className="mt-5 flex items-center justify-between font-semibold"
                        aria-label={`Read insight: ${insight.title}`}
                      >
                        Read insight

                        <span className="grid h-10 w-10 place-items-center border border-black/18 transition-all duration-300 group-hover:bg-[#c9ff3d]">
                          <ArrowUpRight
                            aria-hidden="true"
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          EMPTY STATE
          Only appears if every insight is draft.
      ====================================================== */}
      {insights.length === 0 && (
        <section className="py-28 lg:py-36">
          <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 text-center sm:px-5 lg:px-10">
            <BookOpen
              aria-hidden="true"
              size={30}
              className="mx-auto text-black/35"
            />

            <h2 className="mt-7 text-4xl font-semibold tracking-[-0.05em]">
              Insights are being prepared.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-black/54">
              New ErnestPath research and decision guides will appear here
              once they are ready to publish.
            </p>
          </div>
        </section>
      )}

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="bg-[#10110f] text-[#f3f0e8]">
        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] gap-10 px-2 py-20 sm:px-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9ff3d]">
              Apply the thinking
            </p>

            <h2 className="mt-6 max-w-5xl text-[clamp(3rem,5vw,5.8rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              See what may be limiting your own admission journey.
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <Link
              href="/tools/admission-score"
              className="group inline-flex min-h-16 w-full items-center justify-between gap-8 bg-[#c9ff3d] px-7 font-semibold text-black transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
            >
              Check your Admission Score

              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}