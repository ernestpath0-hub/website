import type { CheerioAPI } from 'cheerio';
import type { CategoryResult, CheckResult } from './types';
import { scoreFromChecks } from './pagespeed';

export function analyzeOnPageSEO($: CheerioAPI): CategoryResult {
  const checks: CheckResult[] = [];

  // Checked first and weighted most severely in framing — if a page is
  // noindexed, nothing else on this list matters until it's fixed.
  const robotsMeta = $('meta[name="robots"]').attr('content')?.toLowerCase() ?? '';
  const isNoindexed = robotsMeta.includes('noindex');
  checks.push({
    id: 'noindex-check',
    label: 'Page is not blocked from search engines',
    passed: !isNoindexed,
    detail: isNoindexed
      ? 'This page has a "noindex" directive — you are actively telling Google not to show it in search results.'
      : 'No noindex directive found — this page is eligible to appear in search results.',
    impact:
      'This is the most severe issue possible — a noindexed page will never appear in Google search results, no matter how good everything else is. Common cause: a "discourage search engines" setting left on from a staging site.',
    diyFix: 'Remove the noindex meta tag or robots directive immediately, unless you specifically intended to hide this page.',
    ernestPathFix: 'We check every page for accidental indexing blocks as the first step of any engagement.',
  });

  const title = $('title').first().text().trim();
  const titleLen = title.length;
  let titleDetail: string;
  let titleImpact: string;
  const titlePassed = titleLen > 10 && titleLen <= 65;

  if (!title) {
    titleDetail = 'No title tag found on this page.';
    titleImpact = "Google has nothing to show as your page's headline in search results — you lose the click entirely.";
  } else if (titleLen <= 10) {
    titleDetail = `Found: "${title}" (${titleLen} characters) — too short to describe the page well.`;
    titleImpact = "A title this short doesn't tell searchers enough to click — you lose clicks to more descriptive listings.";
  } else if (titleLen > 65) {
    titleDetail = `Found: "${title}" (${titleLen} characters) — longer than Google typically displays.`;
    titleImpact = 'Google cuts titles off around 60 characters — the end of your title may not even show in search results, and a truncated title looks unpolished.';
  } else {
    titleDetail = `Found: "${title}" (${titleLen} characters).`;
    titleImpact = '';
  }

  checks.push({
    id: 'title-tag',
    label: 'Title tag present and sized well',
    passed: titlePassed,
    detail: titleDetail,
    impact: titleImpact || undefined,
    diyFix: 'Keep your title between 15 and 60 characters, leading with your city and main course.',
    ernestPathFix: 'We write and test title tags for every page as part of our SEO service.',
  });

  const metaDesc = $('meta[name="description"]').attr('content')?.trim() ?? '';
  const metaLen = metaDesc.length;
  let metaDetail: string;
  let metaImpact: string;
  const metaPassed = metaLen > 50 && metaLen <= 160;

  if (!metaDesc) {
    metaDetail = 'No meta description found.';
    metaImpact = 'This is your pitch in search results. Leave it blank and Google writes it for you — usually badly.';
  } else if (metaLen <= 50) {
    metaDetail = `Found (${metaLen} characters) — too short to be persuasive.`;
    metaImpact = "A short description wastes the space Google gives you to convince someone to click over a competitor's listing.";
  } else if (metaLen > 160) {
    metaDetail = `Found (${metaLen} characters) — longer than Google typically displays.`;
    metaImpact = 'Google truncates descriptions around 155-160 characters — your strongest pitch may be getting cut off mid-sentence.';
  } else {
    metaDetail = `Found (${metaLen} characters).`;
    metaImpact = '';
  }

  checks.push({
    id: 'meta-description',
    label: 'Meta description present and sized well',
    passed: metaPassed,
    detail: metaDetail,
    impact: metaImpact || undefined,
    diyFix: 'Write a compelling 120-155 character description mentioning your city and courses.',
    ernestPathFix: 'Every page we build ships with an optimized meta description.',
  });

  const h1Count = $('h1').length;
  let h1Detail: string;
  let h1Impact: string;

  if (h1Count === 0) {
    h1Detail = 'No H1 heading found on this page.';
    h1Impact = 'Without a clear H1, Google has to guess what this page is about — and often guesses wrong.';
  } else if (h1Count > 1) {
    h1Detail = `Found ${h1Count} H1 tags — more than one on this page.`;
    h1Impact = "Multiple H1s dilute the page's main topic signal, making it less clear to Google what you actually want to rank for.";
  } else {
    h1Detail = 'Found exactly one H1 tag.';
    h1Impact = '';
  }

  checks.push({
    id: 'h1-structure',
    label: 'Exactly one H1 heading',
    passed: h1Count === 1,
    detail: h1Detail,
    impact: h1Impact || undefined,
    diyFix: 'Use exactly one H1 per page, clearly stating what the page is about.',
    ernestPathFix: 'We structure heading hierarchy correctly across every page.',
  });

  const images = $('img');
  const imagesWithoutAlt = images.filter((_, el) => !$(el).attr('alt')?.trim()).length;
  checks.push({
    id: 'image-alt-text',
    label: 'Images have alt text',
    passed: images.length === 0 || imagesWithoutAlt / images.length < 0.2,
    detail: `${imagesWithoutAlt} of ${images.length} images are missing alt text.`,
    impact: 'Your faculty and campus photos are invisible to Google Image search and to screen readers.',
    diyFix: 'Add descriptive alt text to every image, especially faculty and campus photos.',
    ernestPathFix: 'We add proper alt text to every image during the build.',
  });

  const wordCount = $('body').text().trim().split(/\s+/).filter(Boolean).length;
  checks.push({
    id: 'content-depth',
    label: 'Sufficient content depth',
    passed: wordCount >= 300,
    detail: `Approximately ${wordCount} words of visible text on the homepage.`,
    impact: 'Thin pages read as low-effort to Google — competitors with fuller content will consistently outrank you.',
    diyFix: 'Add more real content about your courses, faculty, and results — thin pages rank poorly.',
    ernestPathFix: 'We write full page content as part of every website build.',
  });

  return { key: 'onpage', label: 'On-Page SEO', score: scoreFromChecks(checks), checks };
}

export function analyzeLocalSEO($: CheerioAPI, city: string, examFocus: string): CategoryResult {
  const checks: CheckResult[] = [];
  const bodyText = $('body').text().toLowerCase();

  const cityMentioned = city.trim().length > 0 && bodyText.includes(city.trim().toLowerCase());
  checks.push({
    id: 'city-keyword',
    label: `Mentions "${city || 'your city'}" on the page`,
    passed: cityMentioned,
    detail: cityMentioned
      ? 'Your city is mentioned on the page.'
      : 'Your city was not found in the page content.',
    impact: 'Without your city on the page, you\'re invisible to the exact "coaching institute near me" searches parents actually type.',
    diyFix: 'Mention your city naturally in headings and body text, not just the address.',
    ernestPathFix: 'We build location-targeted content and pages as part of local SEO.',
  });

  const examMentioned = examFocus.trim().length > 0 && bodyText.includes(examFocus.trim().toLowerCase());
  checks.push({
    id: 'exam-keyword',
    label: `Mentions "${examFocus || 'your target exam'}" on the page`,
    passed: examMentioned,
    detail: examMentioned
      ? 'Your target exam/course is mentioned clearly.'
      : "Your target exam/course wasn't found prominently in the page content.",
    impact: 'You rank for generic searches instead of the specific, high-intent ones that actually convert.',
    diyFix: 'Make sure your main exam focus appears in your homepage heading and first paragraph.',
    ernestPathFix: 'We target exam-specific keywords across dedicated pages, not just the homepage.',
  });

  const hasPhone = /(\+?\d[\d\-\s]{8,}\d)/.test($('body').text());
  checks.push({
    id: 'nap-consistency',
    label: 'Phone number visible on the page',
    passed: hasPhone,
    detail: hasPhone
      ? 'A phone number was found on the page.'
      : 'No clear phone number found.',
    impact: 'A missing phone number costs you both visitor trust and your chances in the local map pack.',
    diyFix: 'Display your phone number clearly in the header or footer, in plain text.',
    ernestPathFix: 'We ensure NAP (name, address, phone) consistency across your site and directory listings.',
  });

  const hasLocalSchema = $('script[type="application/ld+json"]')
    .toArray()
    .some((el) => {
      try {
        const json = JSON.parse($(el).text());
        const type = json['@type'];
        return (
          type === 'LocalBusiness' ||
          type === 'EducationalOrganization' ||
          (Array.isArray(type) && type.includes('LocalBusiness'))
        );
      } catch {
        return false;
      }
    });
  checks.push({
    id: 'local-schema',
    label: 'LocalBusiness structured data present',
    passed: hasLocalSchema,
    detail: hasLocalSchema
      ? 'LocalBusiness schema markup found.'
      : 'No LocalBusiness or EducationalOrganization schema found.',
    impact: "Google can't confidently show your institute in local search results and map listings without this.",
    diyFix: 'Add basic LocalBusiness JSON-LD schema with your name, address, and phone.',
    ernestPathFix: 'We add full structured data across every page we build.',
  });

  return { key: 'local', label: 'Local SEO', score: scoreFromChecks(checks), checks };
}

export function analyzeAeoVisibility(
  $: CheerioAPI,
  robotsTxt: string | null,
  llmsTxtExists: boolean
): CategoryResult {
  const checks: CheckResult[] = [];

  const schemaTypes = new Set<string>();
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const json = JSON.parse($(el).text());
      const type = json['@type'];
      if (Array.isArray(type)) type.forEach((t) => schemaTypes.add(t));
      else if (type) schemaTypes.add(type);
    } catch {
      // ignore malformed JSON-LD
    }
  });

  checks.push({
    id: 'faq-schema',
    label: 'FAQ schema present',
    passed: schemaTypes.has('FAQPage'),
    detail: schemaTypes.has('FAQPage')
      ? 'FAQPage schema found — eligible for rich results and AI citations.'
      : 'No FAQPage schema found.',
    impact: 'This is what lets Google and AI tools pull your answers directly into results — without it, a competitor gets that visibility instead.',
    diyFix: 'Add a few common questions with an FAQPage JSON-LD block.',
    ernestPathFix: 'We add FAQ schema to every service and course page we build.',
  });

  checks.push({
    id: 'org-schema',
    label: 'Organization schema present',
    passed: schemaTypes.has('Organization') || schemaTypes.has('EducationalOrganization'),
    detail:
      schemaTypes.size > 0
        ? `Found schema types: ${Array.from(schemaTypes).join(', ')}.`
        : 'No structured data found on this page at all.',
    impact: 'Search engines and AI tools have no structured way to verify who you are — a real, fixable trust gap.',
    diyFix: 'Add basic Organization schema with your name, logo, and contact details.',
    ernestPathFix: 'We add Organization schema site-wide from the root layout.',
  });

  checks.push({
    id: 'llms-txt',
    label: 'llms.txt present (AI crawler guidance)',
    passed: llmsTxtExists,
    detail: llmsTxtExists
      ? 'llms.txt found — helps AI engines understand your site.'
      : "No llms.txt found — most sites don't have this yet, but it helps AI tools cite you accurately.",
    impact: "People increasingly ask AI tools like ChatGPT for institute recommendations — without this, you're invisible to that entire channel.",
    diyFix: 'Add a simple llms.txt file describing what your institute offers.',
    ernestPathFix: 'We add llms.txt as a standard part of every build.',
  });

  const blocksAiCrawlers = robotsTxt
    ? /user-agent:\s*(gptbot|google-extended|ccbot)/i.test(robotsTxt) && /disallow:\s*\//i.test(robotsTxt)
    : false;
  checks.push({
    id: 'ai-crawler-access',
    label: 'AI crawlers are not blocked',
    passed: !blocksAiCrawlers,
    detail: blocksAiCrawlers
      ? 'Your robots.txt appears to block AI crawlers.'
      : 'AI crawlers do not appear to be blocked.',
    impact: "If AI crawlers are blocked, you'll never be mentioned when someone asks an AI assistant for a recommendation.",
    diyFix: 'Review your robots.txt and remove any rules blocking GPTBot or Google-Extended, if AI visibility matters to you.',
    ernestPathFix: 'We configure crawler access deliberately as part of technical setup.',
  });

  return { key: 'aeo', label: 'AI Visibility (AEO)', score: scoreFromChecks(checks), checks };
}

export function analyzeConversionFriction($: CheerioAPI): CategoryResult {
  const checks: CheckResult[] = [];

  const formInputs = $('form input, form select, form textarea').filter(
    (_, el) => $(el).attr('type') !== 'hidden' && $(el).attr('type') !== 'submit'
  ).length;
  const formCount = $('form').length;
  let formDetail: string;
  let formImpact: string;

  if (formCount === 0) {
    formDetail = 'No enquiry form was detected on this page.';
    formImpact = "Without a working enquiry form, interested visitors have no clear way to reach out — you may be losing them entirely, not just losing some submissions. (If you do have a form, make sure it's built with a standard <form> element our scanner can detect.)";
  } else if (formInputs > 5) {
    formDetail = `Found a form with approximately ${formInputs} fields — more than we recommend.`;
    formImpact = 'Every extra form field loses real submissions — this is one of the most common, most fixable leaks in the whole funnel.';
  } else {
    formDetail = `Found a form with approximately ${formInputs} fields.`;
    formImpact = '';
  }

  checks.push({
    id: 'form-friction',
    label: 'Enquiry form is short (5 fields or fewer)',
    passed: formCount > 0 && formInputs > 0 && formInputs <= 5,
    detail: formDetail,
    impact: formImpact || undefined,
    diyFix: 'Cut your enquiry form down to name, phone, and course interest — every extra field loses submissions.',
    ernestPathFix: 'We design and test enquiry forms specifically for conversion.',
  });

  const html = $.html();
  const hasWhatsApp = /wa\.me|api\.whatsapp\.com/i.test(html);
  const hasTel = /tel:/i.test(html);
  checks.push({
    id: 'direct-contact',
    label: 'Direct call or WhatsApp link present',
    passed: hasWhatsApp || hasTel,
    detail:
      hasWhatsApp || hasTel
        ? 'A clickable phone or WhatsApp link was found.'
        : 'No clickable phone or WhatsApp link found.',
    impact: "Mobile visitors — most of your traffic — have to manually dial or type instead of tapping once. Many just won't bother.",
    diyFix: 'Add a tap-to-call or WhatsApp link near your enquiry form.',
    ernestPathFix: 'Every site we build includes one-tap contact options.',
  });

  return { key: 'conversion', label: 'Conversion Friction', score: scoreFromChecks(checks), checks };
}