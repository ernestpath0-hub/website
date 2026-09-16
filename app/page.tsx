import type { Metadata } from "next";
import { Homepage } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { ProblemSection } from "@/components/sections/problem";
import { ServicesOverview } from "@/components/sections/services-overview";
import { Methodology } from "@/components/sections/methodology";
import { DiagnosticCTA } from "@/components/sections/diagnostic-cta";
import { AboutBrand } from "@/components/sections/about";
import {HomeFAQ} from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Coaching Institute Marketing & Enrollment Growth | ErnestPath",
  description:
    "ErnestPath helps coaching and training institutes across India improve admissions with conversion-focused websites, SEO, Google Ads, Meta Ads and better lead-flow measurement.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Coaching Institute Marketing & Enrollment Growth | ErnestPath",
    description:
      "Admission-focused websites, SEO and paid campaigns for coaching and training institutes.",
    url: "/",
    siteName: "ErnestPath",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coaching Institute Marketing & Enrollment Growth | ErnestPath",
    description:
      "Admission-focused websites, SEO and paid campaigns for coaching and training institutes.",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://ernestpath.com/#organization",
      name: "ErnestPath",
      url: "https://ernestpath.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://ernestpath.com/logo.png",
      },
      email: "hello@ernestpath.com",
      description:
        "ErnestPath is a specialist enrollment growth agency providing website development, SEO and paid advertising for coaching and training institutes in India.",
      areaServed: { "@type": "Country", name: "India" },
      knowsAbout: [
        "Coaching institute marketing",
        "Education website development",
        "Local SEO for coaching institutes",
        "Technical SEO",
        "Google Ads",
        "Meta Ads",
        "Admission lead generation",
        "Conversion tracking",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://ernestpath.com/#website",
      url: "https://ernestpath.com/",
      name: "ErnestPath",
      publisher: { "@id": "https://ernestpath.com/#organization" },
      inLanguage: "en-IN",
    },
    {
      "@type": "Service",
      "@id": "https://ernestpath.com/#enrollment-growth",
      name: "Enrollment Growth Services for Coaching Institutes",
      serviceType: "Website development, SEO and paid advertising for coaching institutes",
      provider: { "@id": "https://ernestpath.com/#organization" },
      areaServed: { "@type": "Country", name: "India" },
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Coaching institutes, training institutes and education businesses",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ErnestPath agency services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website Development for Coaching Institutes",
              url: "https://ernestpath.com/services/website-development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "SEO for Coaching Institutes",
              url: "https://ernestpath.com/services/seo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Google and Meta Ads for Coaching Institutes",
              url: "https://ernestpath.com/services/ads",
            },
          },
        ],
      },
    },
  ],
};

function safeJson(value: object) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#f3f0e8] text-[#10110f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(structuredData) }}
      />
      <Homepage />
      <TrustStrip />
      <ProblemSection />
      <ServicesOverview />
      <Methodology />
      <DiagnosticCTA />
      <AboutBrand />
      <HomeFAQ/>
      <FinalCTA />
    </main>
  );
}