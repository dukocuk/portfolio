'use client';

import { useState } from 'react';
import type { Project } from '../data/projects';
import { ImageGallery } from './ui/ImageGallery';
import { Lightbox } from './ui/Lightbox';

// The gallery + prose body shared by the collapsible homepage panel
// (ProjectCard) and the standalone case-study page. `mountGallery` lets
// ProjectCard keep gating the thumbs on `open` — mounting them unconditionally
// inside a height-0 clipped parent still fetches them, since `loading="lazy"`
// only defers on actual viewport distance, not clip-path/height. The
// standalone page has nothing hidden, so it always passes `mountGallery`.
export function CaseStudyContent({
  project,
  mountGallery = true,
}: {
  project: Project;
  mountGallery?: boolean;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = project.images ?? [];
  const hasImages = images.length > 0;

  return (
    <>
      {mountGallery && hasImages && (
        <ImageGallery images={images} onOpen={(i) => setLightboxIndex(i)} />
      )}
      <dl className="space-y-4">
        {project.sections.map((s, i) => (
          <div key={i}>
            <dt className="text-sm font-semibold text-text">{s.heading}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted">
              {Array.isArray(s.body) ? (
                <ul className="list-disc space-y-1 pl-5">
                  {s.body.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                s.body
              )}
            </dd>
          </div>
        ))}
      </dl>
      {hasImages && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex ?? 0}
          open={lightboxIndex !== null}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
