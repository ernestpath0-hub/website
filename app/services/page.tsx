import type { Metadata } from "next";
import { ServicesOverview } from "@/components/sections/services-overview";

export const metadata: Metadata = {
  title: "Services — Website, SEO & Ads for Coaching Institutes",
  description:
    "Website development, SEO & AI visibility, and Google & Meta Ads — three specialist services for coaching and training institutes, connected through one enrollment growth strategy.",
};

export default function ServicesPage() {
  return <ServicesOverview />;
}