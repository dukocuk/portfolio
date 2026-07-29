import type { MetadataRoute } from 'next';
import { SITE_URL } from './siteMetadata';

// See app/sitemap.ts — required for metadata routes under `output: 'export'`.
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
