import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCourseBySlug, getAllCourseSlugs } from '@/lib/courses';
import { CourseHero } from '@/components/academy/courses-hero';
import { CourseCurriculum } from '@/components/academy/course-curriculum';
import { EnrollLiveSection } from '@/components/academy/enroll-live';
import { CourseFAQ } from '@/components/academy/course-faq';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};

  return {
    title: `${course.title} — Free Roadmap + Live Classes`,
    description: course.heroDescription,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) notFound();

  return (
    <>
      <CourseHero course={course} />
      <CourseCurriculum course={course} />
      <EnrollLiveSection course={course} />
      <CourseFAQ course={course} />
    </>
  );
}

// This route is entirely driven by the shared `courses` list in lib/courses.ts —
// add a new course there and it appears here automatically, no new page needed.