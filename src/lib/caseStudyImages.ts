import type { ProjectImage } from '../data/projects';

const fullModules = import.meta.glob(
  '../assets/case-studies/*/*.{png,jpg,jpeg}',
  { eager: true, query: '?w=1600&format=webp&quality=80&url', import: 'default' },
) as Record<string, string>;

const thumbModules = import.meta.glob(
  '../assets/case-studies/*/*.{png,jpg,jpeg}',
  { eager: true, query: '?w=480&format=webp&quality=75&url', import: 'default' },
) as Record<string, string>;

const passthroughModules = import.meta.glob(
  '../assets/case-studies/*/*.{webp,gif,svg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

type Entry = { filename: string; src: string; thumb: string };
const byId = new Map<string, Entry[]>();

function push(path: string, src: string, thumb: string) {
  const match = path.match(/case-studies\/([^/]+)\/([^/]+)$/);
  if (!match) return;
  const [, id, filename] = match;
  const bucket = byId.get(id) ?? [];
  bucket.push({ filename, src, thumb });
  byId.set(id, bucket);
}

for (const [path, src] of Object.entries(fullModules)) {
  const thumb = thumbModules[path] ?? src;
  push(path, src, thumb);
}

for (const [path, url] of Object.entries(passthroughModules)) {
  push(path, url, url);
}

for (const bucket of byId.values()) {
  // Numeric collation so image10 sorts after image2, not after image1.
  bucket.sort((a, b) => a.filename.localeCompare(b.filename, undefined, { numeric: true }));
}

export function getCaseStudyImages(
  id: string,
  alt: (n: number) => string,
): ProjectImage[] {
  const bucket = byId.get(id) ?? [];
  return bucket.map(({ src, thumb }, i) => ({ src, thumb, alt: alt(i + 1) }));
}
