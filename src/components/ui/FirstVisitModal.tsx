import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../i18n/useLanguage';
import { firstVisitContent } from '../../data/popup';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

const STORAGE_KEY = 'firstVisitAck';

function getInitialOpen(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== 'true';
  } catch {
    return true;
  }
}

// Blocking, once-per-browser notice. Unlike Lightbox, there is no Escape
// or backdrop-click dismissal — acknowledging via the CTA is the only exit.
export function FirstVisitModal() {
  const { lang } = useLanguage();
  const copy = firstVisitContent[lang];
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<boolean>(getInitialOpen);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const continueRef = useRef<HTMLButtonElement | null>(null);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Storage unavailable — dismissal won't persist, acceptable degradation.
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const root = dialogRef.current;
      if (!root) return;
      const focusables = root.querySelectorAll<HTMLElement>(
        'button, [href], [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(() => continueRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const rootEl = document.getElementById('root');
    if (!rootEl) return;
    const hadAriaHidden = rootEl.hasAttribute('aria-hidden');
    const prevAriaHidden = rootEl.getAttribute('aria-hidden');
    rootEl.inert = true;
    rootEl.setAttribute('aria-hidden', 'true');
    return () => {
      rootEl.inert = false;
      if (hadAriaHidden) rootEl.setAttribute('aria-hidden', prevAriaHidden!);
      else rootEl.removeAttribute('aria-hidden');
    };
  }, [open]);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="first-visit-title"
          aria-describedby="first-visit-body"
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          exit={reduced ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={reduced ? {} : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? {} : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 text-center shadow-2xl sm:p-8"
          >
            <h2 id="first-visit-title" className="text-xl font-semibold text-text sm:text-2xl">
              {copy.title}
            </h2>
            <p id="first-visit-body" className="mt-4 text-sm leading-relaxed text-muted">
              {copy.body}
            </p>
            <button
              ref={continueRef}
              type="button"
              onClick={dismiss}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-auto"
            >
              {copy.cta}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
