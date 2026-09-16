export interface SampleDay {
  day: number;
  title: string;
  topics: string[];
}

export interface CoursePhase {
  tag: string; // e.g. "Phase 1 · 30 lessons"
  title: string;
  topics: string[]; // summary topics shown in the curriculum accordion
  sampleDays?: SampleDay[]; // a few real day-by-day examples as a free preview
}

export interface CourseFAQ {
  q: string;
  a: string;
}

export interface Course {
  slug: string;
  title: string;
  tagline: string;
  audience: string[];
  durationLabel: string;
  heroDescription: string;
  phases: CoursePhase[];
  freeIncludes: string[];
  liveIncludes: string[];
  price: string; // placeholder — replace with your real pricing
  faqs: CourseFAQ[];
}

export const courses: Course[] = [
  {
    slug: 'mern-stack',
    title: 'MERN Stack',
    tagline: 'Learn MERN. Build real projects. Freelance-ready.',
    audience: ['Students', 'Unemployed graduates', 'Working professionals', 'Freelancers'],
    durationLabel: '90 lessons · as little as 3 months',
    heroDescription:
      'Frontend, backend, and full-stack — taught through real client-style projects, not toy apps.',
    phases: [
      {
        tag: 'Phase 1 · 30 lessons',
        title: 'Frontend Foundations',
        topics: [
          'HTML & CSS fundamentals',
          'JavaScript essentials (ES6+)',
          'Git & GitHub workflow',
          'React fundamentals — components, props, state',
          'React hooks & routing',
          'Phase project: a client-style landing page build',
        ],
        sampleDays: [
          {
            day: 1,
            title: 'HTML structure & semantic tags',
            topics: ['Document structure', 'Semantic elements', 'Forms & inputs', 'Mini exercise: a course landing page skeleton'],
          },
          {
            day: 2,
            title: 'CSS box model & layout basics',
            topics: ['Box model', 'Flexbox fundamentals', 'Responsive units', 'Mini exercise: style the Day 1 page'],
          },
        ],
      },
      {
        tag: 'Phase 2 · 30 lessons',
        title: 'Backend with Node.js',
        topics: [
          'Node.js & npm fundamentals',
          'Express.js & building REST APIs',
          'MongoDB & Mongoose',
          'Authentication & JWT',
          'File uploads & third-party APIs',
          'Phase project: a full backend for a booking system',
        ],
      },
      {
        tag: 'Phase 3 · 30 lessons',
        title: 'Full-Stack Projects',
        topics: [
          'Connecting frontend to backend',
          'State management at scale',
          'Deployment (Vercel, Render, MongoDB Atlas)',
          'Building real tools with AI/LLM APIs',
          'Testing & debugging real apps',
          'Phase project: a complete client-style full-stack application',
        ],
      },
    ],
    freeIncludes: [
      'Full day-wise roadmap for all 90 lessons',
      'Practice exercises for every lesson',
      'Public project briefs you can build on your own',
    ],
    liveIncludes: [
      'Live doubt-clearing sessions',
      'Real client-style project matching through ErnestPath\'s pipeline',
      'Direct mentor feedback on your code',
      'Freelance-readiness track (portfolio, pricing, pitching)',
    ],
    price: '[₹XX,XXX] one-time',
    faqs: [
      {
        q: 'Do I need prior coding experience?',
        a: 'No — Phase 1 starts from fundamentals. If you already know the basics, you can move through early lessons faster.',
      },
      {
        q: 'Can I do the free content without enrolling in live classes?',
        a: 'Yes — the full roadmap and exercises are free. Live classes and project matching are optional add-ons.',
      },
    ],
  },
  {
    slug: 'digital-marketing-freelance',
    title: '30-Day Digital Marketing for Freelancers',
    tagline: 'The exact marketing basics you need to freelance — not a full marketing degree.',
    audience: ['Freelancers', 'Working professionals', 'MERN Academy graduates'],
    durationLabel: '30 lessons · as little as 1 month',
    heroDescription:
      'Portfolio positioning, pricing, pitching, and personal branding — built specifically for developers going freelance.',
    phases: [
      {
        tag: 'Phase 1 · 10 lessons',
        title: 'Positioning & Portfolio',
        topics: [
          'Building a portfolio that actually converts',
          'Writing project case studies, not just project lists',
          'Personal brand basics on LinkedIn and GitHub',
        ],
      },
      {
        tag: 'Phase 2 · 10 lessons',
        title: 'Pricing & Pitching',
        topics: [
          'Pricing your first freelance projects',
          'Writing proposals that get replies',
          'Cold outreach that doesn\'t feel like spam',
        ],
      },
      {
        tag: 'Phase 3 · 10 lessons',
        title: 'Finding & Keeping Clients',
        topics: [
          'Where to actually find freelance work',
          'Handling scope, revisions, and difficult clients',
          'Turning one client into repeat work and referrals',
        ],
      },
    ],
    freeIncludes: [
      'Full 30-lesson roadmap',
      'Templates: proposal, pricing sheet, outreach message',
    ],
    liveIncludes: [
      'Live Q&A sessions on real pricing/pitching scenarios',
      'Feedback on your actual portfolio and proposals',
      'Priority access to real project matching',
    ],
    price: '[₹19,999] one-time',
    faqs: [
      {
        q: 'Do I need to take the MERN course first?',
        a: 'No — this course works for any freelancer, but it pairs naturally with the MERN Stack course if you\'re a developer.',
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function getAllCourseSlugs(): string[] {
  return courses.map((c) => c.slug);
}