export type InsightCategory =
  | "SEO & Search"
  | "Websites & Conversion"
  | "Paid Acquisition"
  | "Admission Growth"
  | "Strategy";

export type InsightAuthor = {
  name: string;
  type: "Person" | "Organization";
  url?: string;
};

export type InsightSource = {
  name: string;
  publisher?: string;
  url: string;
};

export type InsightFaq = {
  question: string;
  answer: string;
};

export type InsightCallout = {
  title: string;
  text: string;
};

export type InsightSection = {
  id: string;
  title: string;
  answer?: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  callout?: InsightCallout;
  links?: readonly InsightInternalLink[];
};

export type InsightStatus = "published" | "draft";

export type Insight = {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  excerpt: string;
  category: InsightCategory;
  publishedAt: string;
  updatedAt?: string;
  readTime: string;

  author: InsightAuthor;
  featured?: boolean;
  status: InsightStatus;
  directAnswer: string;
  keyTakeaways: readonly string[];

  sections: readonly InsightSection[];
  faqs?: readonly InsightFaq[];
  sources?: readonly InsightSource[];
  relatedSlugs?: readonly string[];
  tags: readonly string[];
  image?: string;

  imageAlt?: string;
};
export type InsightInternalLink = {
  label: string;
  href: string;
  description?: string;
};