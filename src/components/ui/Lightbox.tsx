import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { ProjectImage } from '../../data/projects';
import { useLanguage } from '../../i18n/useLanguage';
import { uiStrings } from '../../i18n/ui';
import { prefetchImage } from '../../lib/prefetchImage';
import { useModalA11y } from '../../hooks/useModalA11y';

type Props = {
  images: ProjectImage[];
  initialIndex: number;
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ images, initialIndex, open, onClose }: Props) {
  const { lang } = useLanguage();
  const ui = uiStrings[lang].lightbox;
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(initialIndex);
  const [wasOpen, setWasOpen] = useState(open);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Reset to the requested index whenever the lightbox transitions from closed
  // to open, so reopening always lands on the thumbnail that was clicked.
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setIndex(initialIndex);
  }

  const total = images.length;
  const goPrev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  // Arrow-key navigation layered on top of the shared modal a11y behaviour
  // (focus trap, Escape-to-close, scroll lock, background inert, focus restore).
  const onArrowKeys = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && total > 1) {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight' && total > 1) {
        e.preventDefault();
        goNext();
      }
    },
    [total, goPrev, goNext],
  );
  useModalA11y(dialogRef, { open, onClose, restoreFocus: true, onKeyDown: onArrowKeys });

  useEffect(() => {
    if (!open || total <= 1) return;
    prefetchImage(images[(index + 1) % total]?.src);
    prefetchImage(images[(index - 1 + total) % total]?.src);
  }, [open, index, images, total]);

  const current = images[index];

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && current && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          exit={reduced ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={ui.close}
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 text-text shadow-lg ring-1 ring-border transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label={ui.previous}
                className="absolute left-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 text-text shadow-lg ring-1 ring-border transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-12 sm:w-12"
              >
                <svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={ui.next}
                className="absolute right-4 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/80 text-text shadow-lg ring-1 ring-border transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-12 sm:w-12"
              >
                <svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </>
          )}

          <figure className="flex max-h-full max-w-full flex-col items-center gap-3">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              decoding="async"
              initial={reduced ? false : { opacity: 0, scale: 0.98 }}
              animate={reduced ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            />
            <figcaption className="flex items-center gap-3 text-sm text-white/80">
              {current.alt && <span className="max-w-prose text-center">{current.alt}</span>}
              {total > 1 && (
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium">
                  {ui.counter(index + 1, total)}
                </span>
              )}
            </figcaption>
          </figure>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
