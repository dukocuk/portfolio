import type { ProjectImage } from '../../data/projects';
import { useLanguage } from '../../i18n/useLanguage';
import { uiStrings } from '../../i18n/ui';
import { prefetchImage } from '../../lib/prefetchImage';

type Props = {
  images: ProjectImage[];
  onOpen: (index: number) => void;
};

export function ImageGallery({ images, onOpen }: Props) {
  const { lang } = useLanguage();
  const ui = uiStrings[lang].lightbox;
  const visible = images.slice(0, 2);
  const hiddenCount = Math.max(images.length - 2, 0);

  return (
    <ul className="flex gap-3" role="list">
      {visible.map((image, i) => {
        const isOverlayTile = i === 1 && hiddenCount > 0;
        const label = isOverlayTile ? ui.moreAria(hiddenCount) : `${ui.open}: ${image.alt}`;
        const warm = () => {
          prefetchImage(image.src);
          if (isOverlayTile) prefetchImage(images[2]?.src);
        };
        return (
          <li key={image.src} className="shrink-0">
            <button
              type="button"
              onClick={() => onOpen(i)}
              onPointerEnter={warm}
              onFocus={warm}
              onTouchStart={warm}
              aria-label={label}
              className="group relative block aspect-[16/9] h-24 overflow-hidden rounded-lg border border-border bg-surface-2 transition-all hover:border-accent/60 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-28"
            >
              <img
                src={image.thumb}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {isOverlayTile && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center bg-black/55 text-lg font-semibold text-white"
                >
                  +{hiddenCount}
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
