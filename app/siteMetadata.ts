import type { Metadata } from 'next';
import { LANG_META, LANG_PATHS, otherLang, projectPath, type Lang } from '../src/i18n/config';
import { uiStrings } from '../src/i18n/ui';
import type { Project } from '../src/data/projects';

// Everything the old hand-written <head> in index.html carried, but resolved
// per locale. This is the point of the routed-locale setup: /  and /en/ are
// pre-rendered as separate documents, each announcing its own language,
// canonical URL and social preview.

export const SITE_URL = 'https://whoisduran.com';

// Social previews use a shorter, punchier line than the SEO description — the
// same split the previous index.html made.
const social: Record<Lang, { title: string; description: string; imageAlt: string }> = {
  da: {
    title: 'Duran Köse — Softwareingeniør & Full-Stack-udvikler',
    description:
      'Full-stack-udvikling med enterprise-disciplin — projekter inden for computer vision, IoT-sikkerhed, systemintegration og mobil.',
    imageAlt: 'Duran Köse — Softwareingeniør & Full-Stack-udvikler',
  },
  en: {
    title: 'Duran Köse — Software Engineer & Full-Stack Developer',
    description:
      'Full-stack engineering with enterprise discipline — projects spanning computer vision, IoT security, system integration, and mobile.',
    imageAlt: 'Duran Köse — Software Engineer & Full-Stack Developer',
  },
};

// Danish is x-default: it holds the domain root and is the site's primary
// language, so it is what a crawler should serve to unmatched locales.
const languageAlternates = {
  da: LANG_PATHS.da,
  en: LANG_PATHS.en,
  'x-default': LANG_PATHS.da,
};

export function buildMetadata(lang: Lang): Metadata {
  const { seo } = uiStrings[lang];
  const s = social[lang];
  const other = lang === 'da' ? 'en' : 'da';

  return {
    metadataBase: new URL(SITE_URL),
    title: seo.title,
    description: seo.description,
    authors: [{ name: 'Duran Köse', url: SITE_URL }],
    alternates: {
      canonical: LANG_PATHS[lang],
      languages: languageAlternates,
    },
    openGraph: {
      type: 'website',
      url: LANG_PATHS[lang],
      siteName: 'Duran Köse — Portfolio',
      title: s.title,
      description: s.description,
      locale: LANG_META[lang].ogLocale,
      alternateLocale: LANG_META[other].ogLocale,
      images: [
        { url: '/og-image.png', width: 1200, height: 630, alt: s.imageAlt },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: s.title,
      description: s.description,
      images: [{ url: '/og-image.png', alt: s.imageAlt }],
    },
    icons: {
      icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
      apple: [{ url: '/apple-touch-icon.png' }],
    },
  };
}

// Metadata for one project's dedicated case-study page. `metadataBase` and
// `icons` aren't repeated here — both are set once on the root layout's
// `buildMetadata()` and inherited by every descendant route's metadata.
//
// OG/Twitter images intentionally stay the generic `/og-image.png` rather
// than the project's own screenshots: those are WebP, and social scrapers
// (LinkedIn in particular) are unreliable with WebP `og:image` — exactly the
// failure that would undercut "shareable," the reason this page exists. A
// real per-project social card is a PNG-generation task worth its own change.
export function buildProjectMetadata(lang: Lang, project: Project): Metadata {
  const other = otherLang(lang);
  const canonical = projectPath(lang, project.id);
  const title = `${project.title} | Duran Köse`;

  return {
    title,
    description: project.summary,
    alternates: {
      canonical,
      languages: {
        da: projectPath('da', project.id),
        en: projectPath('en', project.id),
        'x-default': projectPath('da', project.id),
      },
    },
    openGraph: {
      type: 'article',
      url: canonical,
      siteName: 'Duran Köse — Portfolio',
      title,
      description: project.summary,
      locale: LANG_META[lang].ogLocale,
      alternateLocale: LANG_META[other].ogLocale,
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: project.summary,
      images: [{ url: '/og-image.png', alt: title }],
    },
  };
}

// schema.org Person. `url` points at the locale being rendered so the two
// documents don't both claim to be the canonical description of the same page.
export function buildPersonJsonLd(lang: Lang) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Duran Köse',
    jobTitle: 'Software Engineer / Full-Stack Developer',
    url: `${SITE_URL}${LANG_PATHS[lang]}`,
    image: `${SITE_URL}/og-image.png`,
    email: 'mailto:duran.kose@protonmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Taastrup',
      addressCountry: 'DK',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Technical University of Denmark (DTU)',
    },
  };
}
