import type { MetadataRoute } from 'next';
import { LANG_PATHS, projectPath } from '../src/i18n/config';
import { projectIds } from '../src/data/projects';
import { SITE_URL } from './siteMetadata';

// Metadata routes are dynamic by default; `output: 'export'` refuses to build
// one that hasn't opted into being written out as a file.
export const dynamic = 'force-static';

// Replaces the hand-maintained public/sitemap.xml, which listed only the
// Danish root because that was the only URL the site had.
export default function sitemap(): MetadataRoute.Sitemap {
  const homeAlternates = {
    languages: {
      da: `${SITE_URL}${LANG_PATHS.da}`,
      en: `${SITE_URL}${LANG_PATHS.en}`,
    },
  };

  // One entry per project × locale — the pages that make each case study
  // independently rankable, rather than one homepage ranking for nine topics.
  const projectEntries: MetadataRoute.Sitemap = projectIds.flatMap((id) => {
    const alternates = {
      languages: {
        da: `${SITE_URL}${projectPath('da', id)}`,
        en: `${SITE_URL}${projectPath('en', id)}`,
      },
    };
    return [
      { url: `${SITE_URL}${projectPath('da', id)}`, priority: 0.7, alternates },
      { url: `${SITE_URL}${projectPath('en', id)}`, priority: 0.7, alternates },
    ];
  });

  return [
    { url: `${SITE_URL}${LANG_PATHS.da}`, priority: 1, alternates: homeAlternates },
    { url: `${SITE_URL}${LANG_PATHS.en}`, priority: 0.9, alternates: homeAlternates },
    ...projectEntries,
  ];
}
