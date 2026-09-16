import type { Metadata } from "next";
import { Fraunces, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import {Footer} from "@/components/layout/footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  title: {
    default: "ErnestPath — Websites & SEO That Fill Batches for Coaching Institutes",
    template: "%s | ErnestPath",
  },
  description:
    "Website development, SEO, and admission-season ad campaigns built specifically for coaching institutes — plus a career-ready MERN stack academy.",
  keywords: [
    "coaching institute website",
    "SEO for coaching institutes",
    "admission ads",
    "MERN stack course",
  ],
  metadataBase: new URL("https://ernestpath.com"),
  openGraph: {
    title: "ErnestPath",
    description: "Websites, SEO, and ad systems built for coaching institutes.",
    url: "https://ernestpath.com",
    siteName: "ErnestPath",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ErnestPath",
    description: "Websites, SEO, and ad systems built for coaching institutes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ErnestPath",
  url: "https://ernestpath.com",
  logo: "https://ernestpath.com/logo.png",
  description:
    "Website development, SEO, and admission-season ad campaigns built specifically for coaching institutes, plus a career-ready MERN stack academy.",
  sameAs: [
    "https://instagram.com/ernestpath",
    "https://linkedin.com/company/ernestpath",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${sora.variable} h-full scroll-smooth`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-noir antialiased selection:bg-lime selection:text-noir">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
      
    </html>
  );
}