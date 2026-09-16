import type { Metadata } from 'next';
import { HubHero } from '@/components/academy/hub-hero';
import { AudienceTabs } from '@/components/academy/audience-tabs';
import { CourseGrid } from '@/components/academy/course-grid';
import { HubCTA } from '@/components/academy/hub-cta';

export const metadata: Metadata = {
  title: 'ErnestPath Academy — Free MERN & Freelance Marketing Courses',
  description:
    'Free, full roadmaps for MERN Stack and freelance digital marketing — with optional live classes, mentorship, and real project matching.',
};

export default function AcademyPage() {
  return (
    <>
      <HubHero />
      <AudienceTabs />
      <CourseGrid />
      <HubCTA />
    </>
  );
}