import type { ProjectImage } from '../data/projects';
import { caseStudyImageManifest } from './caseStudyImages.generated';

// The manifest is produced by scripts/build-case-images.mjs, which walks
// src/assets/case-studies/*/ before every dev run and build. Images are
// discovered by folder name, so a project's gallery is whatever sits in the
// folder matching its `id` — there is nothing to register here.

const warnedEmpty = new Set<string>();

export function getCaseStudyImages(
  id: string,
  alt: (n: number) => string,
): ProjectImage[] {
  const bucket = caseStudyImageManifest[id] ?? [];
  if (process.env.NODE_ENV !== 'production' && bucket.length === 0 && !warnedEmpty.has(id)) {
    warnedEmpty.add(id);
    console.warn(
      `[caseStudyImages] No images found for project "${id}". ` +
        `Expected files under src/assets/case-studies/${id}/ — check the folder name matches the project id.`,
    );
  }
  return bucket.map(({ src, thumb }, i) => ({ src, thumb, alt: alt(i + 1) }));
}
