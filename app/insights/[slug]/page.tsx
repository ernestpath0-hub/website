import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowUpRight,
    CalendarDays,
    Check,
    Clock3,
    ExternalLink,
} from "lucide-react";

import {
    getInsightBySlug,
    getPublishedInsights,
    getRelatedInsights,
} from "@/data/insights";

const SITE_URL = "https://ernestpath.com";

type InsightPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

function safeJson(value: object) {
    return JSON.stringify(value).replace(/</g, "\\u003c");
}

function formatDate(date: string) {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));
}

export function generateStaticParams() {
    return getPublishedInsights().map((insight) => ({
        slug: insight.slug,
    }));
}

export async function generateMetadata({
    params,
}: InsightPageProps): Promise<Metadata> {
    const { slug } = await params;

    const insight = getInsightBySlug(slug);

    if (!insight) {
        return {
            title: "Insight Not Found | ErnestPath",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const canonical = `/insights/${insight.slug}`;

    return {
        title: insight.seoTitle,

        description: insight.seoDescription,

        alternates: {
            canonical,
        },

        authors: [
            {
                name: insight.author.name,
                ...(insight.author.url
                    ? {
                        url: insight.author.url,
                    }
                    : {}),
            },
        ],

        openGraph: {
            title: insight.seoTitle,
            description: insight.seoDescription,
            url: canonical,
            siteName: "ErnestPath",
            type: "article",

            publishedTime: insight.publishedAt,

            modifiedTime:
                insight.updatedAt ?? insight.publishedAt,

            authors: insight.author.url
                ? [insight.author.url]
                : undefined,

            tags: [...insight.tags],

            ...(insight.image
                ? {
                    images: [
                        {
                            url: insight.image,
                            alt: insight.imageAlt ?? insight.title,
                        },
                    ],
                }
                : {}),
        },

        twitter: {
            card: "summary_large_image",
            title: insight.seoTitle,
            description: insight.seoDescription,

            ...(insight.image
                ? {
                    images: [insight.image],
                }
                : {}),
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
}

export default async function InsightPage({
    params,
}: InsightPageProps) {
    const { slug } = await params;

    const insight = getInsightBySlug(slug);

    if (!insight) {
        notFound();
    }

    const relatedInsights = getRelatedInsights(insight, 3);

    const articleUrl = `${SITE_URL}/insights/${insight.slug}`;

    /* =========================================
       STRUCTURED DATA
    ========================================= */

    const articleSchema = {
        "@context": "https://schema.org",

        "@type": "BlogPosting",

        "@id": `${articleUrl}#article`,

        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
        },

        headline: insight.title,

        description: insight.seoDescription,

        datePublished: insight.publishedAt,

        dateModified:
            insight.updatedAt ?? insight.publishedAt,

        articleSection: insight.category,

        inLanguage: "en-IN",

        author: {
            "@type": insight.author.type,
            name: insight.author.name,

            ...(insight.author.url
                ? {
                    url: insight.author.url,
                }
                : {}),
        },

        publisher: {
            "@id": `${SITE_URL}/#organization`,
        },

        isPartOf: {
            "@id": `${SITE_URL}/insights/#collection`,
        },

        about: insight.tags.map((tag) => ({
            "@type": "Thing",
            name: tag,
        })),

        ...(insight.image
            ? {
                image: `${SITE_URL}${insight.image}`,
            }
            : {}),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",

        "@type": "BreadcrumbList",

        "@id": `${articleUrl}#breadcrumb`,

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

            {
                "@type": "ListItem",
                position: 3,
                name: insight.title,
                item: articleUrl,
            },
        ],
    };

    const faqSchema =
        insight.faqs && insight.faqs.length > 0
            ? {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  "@id": `${articleUrl}#faq`,
                  mainEntity: insight.faqs.map((faq) => ({
                      "@type": "Question",
                      name: faq.question,
                      acceptedAnswer: {
                          "@type": "Answer",
                          text: faq.answer,
                      },
                  })),
              }
            : null;

    return (
        <main className="overflow-hidden bg-[#f3f0e8] text-[#10110f]">
            {/* Structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: safeJson(articleSchema),
                }}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: safeJson(breadcrumbSchema),
                }}
            />

            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: safeJson(faqSchema),
                    }}
                />
            )}

            <article>
                {/* =====================================================
            ARTICLE HERO
        ====================================================== */}
                <header className="relative overflow-hidden bg-[#10110f] pb-20 pt-32 text-[#f3f0e8] lg:pb-28 lg:pt-40">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-72 -top-56 h-[48rem] w-[48rem] rounded-full border border-[#c9ff3d]/10"
                    />

                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-24 top-16 h-[27rem] w-[27rem] rounded-full border border-white/[0.05]"
                    />

                    <div className="relative mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
                        {/* Breadcrumb */}
                        <nav
                            aria-label="Breadcrumb"
                            className="flex flex-wrap items-center gap-2 text-sm text-white/38"
                        >
                            <Link
                                href="/"
                                className="transition-colors hover:text-[#c9ff3d]"
                            >
                                Home
                            </Link>

                            <span aria-hidden="true">/</span>

                            <Link
                                href="/insights"
                                className="transition-colors hover:text-[#c9ff3d]"
                            >
                                Insights
                            </Link>

                            <span aria-hidden="true">/</span>

                            <span className="text-white/62">
                                {insight.category}
                            </span>
                        </nav>

                        <div className="mt-12 grid gap-12 lg:grid-cols-[0.56fr_1.44fr] lg:gap-16">
                            {/* Left meta */}
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c9ff3d]">
                                    {insight.category}
                                </p>

                                <div className="mt-7 space-y-3 text-sm leading-6 text-white/42">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays
                                            aria-hidden="true"
                                            size={15}
                                        />

                                        <time dateTime={insight.publishedAt}>
                                            Published {formatDate(insight.publishedAt)}
                                        </time>
                                    </div>

                                    {insight.updatedAt &&
                                        insight.updatedAt !==
                                        insight.publishedAt && (
                                            <div className="flex items-center gap-2">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[#c9ff3d]" />

                                                <time dateTime={insight.updatedAt}>
                                                    Updated {formatDate(insight.updatedAt)}
                                                </time>
                                            </div>
                                        )}

                                    <div className="flex items-center gap-2">
                                        <Clock3
                                            aria-hidden="true"
                                            size={15}
                                        />

                                        {insight.readTime}
                                    </div>

                                    <p className="pt-2">
                                        By{" "}
                                        <span className="font-semibold text-white/65">
                                            {insight.author.name}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* Title */}
                            <div>
                                <h1 className="max-w-6xl text-[clamp(3.5rem,6.8vw,7.2rem)] font-semibold leading-[0.89] tracking-[-0.072em]">
                                    {insight.title}
                                </h1>

                                <p className="mt-8 max-w-4xl text-xl leading-9 text-white/58">
                                    {insight.excerpt}
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* =====================================================
            DIRECT ANSWER
        ====================================================== */}
                <section
                    aria-labelledby="direct-answer-title"
                    className="border-b border-black/10"
                >
                    <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] gap-10 px-2 py-14 sm:px-5 lg:grid-cols-[0.36fr_1.64fr] lg:px-10 lg:py-20">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                                Direct answer
                            </p>

                            <h2
                                id="direct-answer-title"
                                className="mt-4 text-2xl font-semibold tracking-[-0.04em]"
                            >
                                The short version
                            </h2>
                        </div>

                        <p className="max-w-5xl text-[clamp(1.45rem,2.25vw,2.2rem)] font-medium leading-[1.46] tracking-[-0.035em]">
                            {insight.directAnswer}
                        </p>
                    </div>
                </section>

                {/* =====================================================
            KEY TAKEAWAYS
        ====================================================== */}
                {insight.keyTakeaways.length > 0 && (
                    <section
                        aria-labelledby="takeaways-title"
                        className="bg-[#c9ff3d]"
                    >
                        <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] gap-10 px-2 py-14 sm:px-5 lg:grid-cols-[0.36fr_1.64fr] lg:px-10 lg:py-20">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/45">
                                    Key takeaways
                                </p>

                                <h2
                                    id="takeaways-title"
                                    className="mt-4 max-w-xs text-3xl font-semibold leading-[1] tracking-[-0.045em]"
                                >
                                    What matters most
                                </h2>
                            </div>

                            <ul className="grid gap-x-8 md:grid-cols-2">
                                {insight.keyTakeaways.map(
                                    (takeaway, index) => (
                                        <li
                                            key={takeaway}
                                            className="flex items-start gap-4 border-t border-black/20 py-5 text-base leading-7"
                                        >
                                            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-black/25 text-xs font-bold">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span>{takeaway}</span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>
                    </section>
                )}

                {/* =====================================================
            ARTICLE BODY
        ====================================================== */}
                <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] gap-16 px-2 py-20 sm:px-5 lg:grid-cols-[0.31fr_1.69fr] lg:px-10 lg:py-28">
                    {/* ===================================================
              TABLE OF CONTENTS
          ==================================================== */}
                    <aside className="lg:sticky lg:top-28 lg:self-start">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                            In this insight
                        </p>

                        <nav
                            aria-label="Insight contents"
                            className="mt-6 border-t border-black/12"
                        >
                            {insight.sections.map((section, index) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="group grid grid-cols-[2rem_1fr] gap-3 border-b border-black/12 py-4 text-sm leading-6 text-black/52 transition-colors hover:text-black"
                                >
                                    <span className="text-black/28 transition-colors group-hover:text-[#7b9f00]">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span>{section.title}</span>
                                </a>
                            ))}

                            {insight.faqs &&
                                insight.faqs.length > 0 && (
                                    <a
                                        href="#related-questions"
                                        className="group grid grid-cols-[2rem_1fr] gap-3 border-b border-black/12 py-4 text-sm leading-6 text-black/52 transition-colors hover:text-black"
                                    >
                                        <span className="text-black/28">
                                            Q
                                        </span>

                                        Related questions
                                    </a>
                                )}
                        </nav>

                        <Link
                            href="/insights"
                            className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold"
                        >
                            <ArrowLeft
                                aria-hidden="true"
                                size={15}
                                className="transition-transform group-hover:-translate-x-1"
                            />

                            All insights
                        </Link>
                    </aside>
                    <div className="max-w-4xl">
                        {insight.sections.map((section, index) => (
                            <section
                                key={section.id}
                                id={section.id}
                                aria-labelledby={`${section.id}-title`}
                                className={`scroll-mt-28 ${index === 0
                                        ? ""
                                        : "mt-20 border-t border-black/12 pt-20"
                                    }`}
                            >
                                {/* Section number */}
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/34">
                                    {String(index + 1).padStart(2, "0")}
                                </p>

                                {/* H2 */}
                                <h2
                                    id={`${section.id}-title`}
                                    className="mt-4 text-[clamp(2.5rem,4vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.058em]"
                                >
                                    {section.title}
                                </h2>

                                {/* Direct answer */}
                                {section.answer && (
                                    <div className="mt-8 border-l-2 border-[#c9ff3d] pl-6">
                                        <p className="text-xl font-medium leading-9 tracking-[-0.02em]">
                                            {section.answer}
                                        </p>
                                    </div>
                                )}

                                {/* Paragraphs */}
                                <div className="mt-9 space-y-6">
                                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                                        <p
                                            key={`${section.id}-${paragraphIndex}`}
                                            className="text-lg leading-9 text-black/67"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>

                                {/* Bullets */}
                                {section.bullets && section.bullets.length > 0 && (
                                    <ul className="mt-9 space-y-4">
                                        {section.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                className="flex items-start gap-4 text-lg leading-8 text-black/67"
                                            >
                                                <Check
                                                    aria-hidden="true"
                                                    size={17}
                                                    className="mt-[0.42rem] shrink-0 text-[#6d8e00]"
                                                />

                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Callout */}
                                {section.callout && (
                                    <aside className="mt-10 overflow-hidden bg-[#10110f] text-[#f3f0e8]">
                                        <div className="h-1 w-full bg-[#c9ff3d]" />

                                        <div className="p-7 sm:p-9">
                                            <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#c9ff3d]">
                                                {section.callout.title}
                                            </p>

                                            <p className="mt-4 text-lg leading-8 text-white/68">
                                                {section.callout.text}
                                            </p>
                                        </div>
                                    </aside>
                                )}

                                {/* Internal links */}
                                {section.links && section.links.length > 0 && (
                                    <div className="mt-10 grid gap-3 sm:grid-cols-2">
                                        {section.links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="group flex min-h-[9rem] flex-col justify-between border border-black/12 bg-[#f7f4ed] p-5 transition-colors hover:bg-white"
                                            >
                                                <div>
                                                    <p className="font-semibold">
                                                        {link.label}
                                                    </p>

                                                    {link.description && (
                                                        <p className="mt-2 text-sm leading-6 text-black/52">
                                                            {link.description}
                                                        </p>
                                                    )}
                                                </div>

                                                <ArrowUpRight
                                                    aria-hidden="true"
                                                    size={16}
                                                    className="mt-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                                />
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </section>
                        ))}
                        {insight.faqs &&
                            insight.faqs.length > 0 && (
                                <section
                                    id="related-questions"
                                    aria-labelledby="related-questions-title"
                                    className="mt-24 scroll-mt-28 border-t border-black/12 pt-20"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/40">
                                        Related questions
                                    </p>

                                    <h2
                                        id="related-questions-title"
                                        className="mt-5 max-w-3xl text-[clamp(2.7rem,4vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.058em]"
                                    >
                                        Questions institute owners may ask next
                                    </h2>

                                    <div className="mt-10 border-t border-black/12">
                                        {insight.faqs.map((faq) => (
                                            <details
                                                key={faq.question}
                                                className="group border-b border-black/12"
                                            >
                                                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-lg font-semibold leading-7 [&::-webkit-details-marker]:hidden">
                                                    <span>{faq.question}</span>

                                                    <span className="text-[#6d8e00] transition-transform duration-300 group-open:rotate-45">
                                                        +
                                                    </span>
                                                </summary>

                                                <p className="max-w-3xl pb-7 text-base leading-8 text-black/62">
                                                    {faq.answer}
                                                </p>
                                            </details>
                                        ))}
                                    </div>
                                </section>
                            )}

                        {/* =================================================
                SOURCES
            ================================================== */}
                        {insight.sources &&
                            insight.sources.length > 0 && (
                                <section
                                    aria-labelledby="sources-title"
                                    className="mt-20 border-t border-black/12 pt-14"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.17em] text-black/38">
                                        Sources
                                    </p>

                                    <h2
                                        id="sources-title"
                                        className="mt-4 text-2xl font-semibold tracking-[-0.035em]"
                                    >
                                        Sources and further reading
                                    </h2>

                                    <ol className="mt-7 space-y-4">
                                        {insight.sources.map(
                                            (source, index) => (
                                                <li
                                                    key={source.url}
                                                    className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-7 text-black/56"
                                                >
                                                    <span className="text-black/30">
                                                        {String(index + 1).padStart(2, "0")}
                                                    </span>

                                                    <a
                                                        href={source.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="group inline-flex w-fit items-start gap-2 underline decoration-black/20 underline-offset-4 transition-colors hover:text-black"
                                                    >
                                                        <span>
                                                            {source.name}

                                                            {source.publisher
                                                                ? ` — ${source.publisher}`
                                                                : ""}
                                                        </span>

                                                        <ExternalLink
                                                            aria-hidden="true"
                                                            size={13}
                                                            className="mt-1 shrink-0 opacity-50"
                                                        />
                                                    </a>
                                                </li>
                                            ),
                                        )}
                                    </ol>
                                </section>
                            )}

                        {/* =================================================
                ARTICLE END
            ================================================== */}
                        <div className="mt-20 border-t border-black/12 pt-8">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/35">
                                        Published by
                                    </p>

                                    <p className="mt-2 font-semibold">
                                        {insight.author.name}
                                    </p>
                                </div>

                                <Link
                                    href="/insights"
                                    className="group inline-flex items-center gap-3 font-semibold"
                                >
                                    <ArrowLeft
                                        aria-hidden="true"
                                        size={16}
                                        className="transition-transform group-hover:-translate-x-1"
                                    />

                                    Explore more insights
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* =====================================================
          RELATED INSIGHTS
      ====================================================== */}
            {relatedInsights.length > 0 && (
                <section
                    aria-labelledby="related-insights-title"
                    className="border-t border-black/10 bg-[#f7f4ed] py-20 lg:py-28"
                >
                    <div className="mx-auto w-[calc(100%-2rem)] max-w-[92rem] px-2 sm:px-5 lg:px-10">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                                    Continue learning
                                </p>

                                <h2
                                    id="related-insights-title"
                                    className="mt-5 text-[clamp(2.8rem,4vw,4.8rem)] font-semibold leading-[0.96] tracking-[-0.055em]"
                                >
                                    Related insights
                                </h2>
                            </div>

                            <Link
                                href="/insights"
                                className="group inline-flex items-center gap-3 text-sm font-semibold"
                            >
                                View all insights

                                <ArrowUpRight
                                    aria-hidden="true"
                                    size={15}
                                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                />
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {relatedInsights.map((related) => (
                                <article
                                    key={related.slug}
                                    className="group flex min-h-[22rem] flex-col border border-black/12 bg-[#f3f0e8] p-7 transition-colors duration-300 hover:bg-white"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/38">
                                        {related.category}
                                    </p>

                                    <h3 className="mt-6 text-2xl font-semibold leading-[1.04] tracking-[-0.04em]">
                                        {related.title}
                                    </h3>

                                    <p className="mt-5 text-sm leading-7 text-black/52">
                                        {related.excerpt}
                                    </p>

                                    <Link
                                        href={`/insights/${related.slug}`}
                                        className="mt-auto flex items-center justify-between border-t border-black/10 pt-6 font-semibold"
                                        aria-label={`Read ${related.title}`}
                                    >
                                        Read insight

                                        <ArrowUpRight
                                            aria-hidden="true"
                                            size={17}
                                            className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                        />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* =====================================================
          ADMISSION SCORE CTA
      ====================================================== */}
            <section className="bg-[#c9ff3d]">
                <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[92rem] gap-10 px-2 py-16 sm:px-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-20">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/45">
                            Apply the insight
                        </p>

                        <h2 className="mt-5 max-w-5xl text-[clamp(2.8rem,4.8vw,5.4rem)] font-semibold leading-[0.94] tracking-[-0.06em]">
                            Find where your own admission journey needs attention.
                        </h2>
                    </div>

                    <div className="lg:flex lg:justify-end">
                        <Link
                            href="/tools/admission-score"
                            className="group inline-flex min-h-16 w-full items-center justify-between gap-8 bg-[#10110f] px-7 font-semibold text-white transition-transform duration-300 hover:-translate-y-1 sm:w-auto"
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