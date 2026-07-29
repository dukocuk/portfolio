import type { MetadataRoute } from 'next';
import { LANG_PATHS } from '../src/i18n/config';
import { SITE_URL } from './siteMetadata';

// Metadata routes are dynamic by default; `output: 'export'` refuses to build
// one that hasn't opted into being written out as a file.
export const dynamic = 'force-static';

// Replaces the hand-maintained public/sitemap.xml, which listed only the
// Danish root because that was the only URL the site had.
export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = {
    languages: {
      da: `${SITE_URL}${LANG_PATHS.da}`,
      en: `${SITE_URL}${LANG_PATHS.en}`,
    },
  };

  return [
    { url: `${SITE_URL}${LANG_PATHS.da}`, priority: 1, alternates },
    { url: `${SITE_URL}${LANG_PATHS.en}`, priority: 0.9, alternates },
  ];
}
