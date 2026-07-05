import { useEffect, type RefObject } from 'react';
import { useBodyScrollLock } from './useBodyScrollLock';

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])';

type Options = {
  open: boolean;
  /** Called on Escape when `closeOnEscape` is true. */
  onClose?: () => void;
  /** Default true. First-visit modal disables this (CTA is the only exit). */
  closeOnEscape?: boolean;
  /** Return focus to the previously focused element on close. Default false. */
  restoreFocus?: boolean;
  /** Extra keydown handling while open (e.g. Lightbox arrow navigation). */
  onKeyDown?: (e: KeyboardEvent) => void;
};

// Shared dialog behaviour for every modal on the site: focus trap, optional
// Escape-to-close, body scroll lock, background `inert`/`aria-hidden` (so screen
// readers can't reach the page behind the dialog), initial focus on the first
// focusable element, and optional focus restoration. Consolidating this here
// keeps the three modals consistent — previously two of them omitted the
// `inert` treatment and leaked the background to assistive tech.
export function useModalA11y<T extends HTMLElement>(
  ref: RefObject<T | null>,
  { open, onClose, closeOnEscape = true, restoreFocus = false, onKeyDown }: Options,
) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEscape) {
        e.preventDefault();
        onClose?.();
        return;
      }
      onKeyDown?.(e);
      if (e.key === 'Tab') {
        const root = ref.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(FOCUSABLE);
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
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose, closeOnEscape, onKeyDown, ref]);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = restoreFocus
      ? (document.activeElement as HTMLElement | null)
      : null;
    const t = window.setTimeout(
      () => ref.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus(),
      0,
    );
    return () => {
      window.clearTimeout(t);
      previouslyFocused?.focus?.();
    };
  }, [open, restoreFocus, ref]);

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
      if (hadAriaHidden && prevAriaHidden !== null) {
        rootEl.setAttribute('aria-hidden', prevAriaHidden);
      } else {
        rootEl.removeAttribute('aria-hidden');
      }
    };
  }, [open]);
}
