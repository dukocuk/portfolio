import type { ProjectImage } from '../data/projects';

const modules = import.meta.glob(
  '../assets/case-studies/*/*.{png,jpg,jpeg,webp,gif,svg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

type Entry = { filename: string; url: string };
const byId = new Map<string, Entry[]>();

for (const [path, url] of Object.entries(modules)) {
  const match = path.match(/case-studies\/([^/]+)\/([^/]+)$/);
  if (!match) continue;
  const [, id, filename] = match;
  const bucket = byId.get(id) ?? [];
  bucket.push({ filename, url });
  byId.set(id, bucket);
}

for (const bucket of byId.values()) {
  bucket.sort((a, b) => a.filename.localeCompare(b.filename));
}

export function getCaseStudyImages(
  id: string,
  alt: (n: number) => string,
): ProjectImage[] {
  const bucket = byId.get(id) ?? [];
  return bucket.map(({ url }, i) => ({ src: url, alt: alt(i + 1) }));
}
