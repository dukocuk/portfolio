import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { getCalApi } from '@calcom/embed-react';
import { calLinks } from '../../data/profile';
import { useLanguage } from '../../i18n/useLanguage';
import { uiStrings } from '../../i18n/ui';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

// Cal.com popup trigger. Nothing Cal-related loads with the page: the embed
// script is only fetched the first time the chooser is opened (while the
// visitor reads the two options), and its iframe loads on the choice click.
//
// A booking can be in-person (2h travel buffer each side) or online (no
// buffer) — these are two separate Cal.com event types, so the primary CTA
// first opens a small chooser and each choice fires the matching event.
const CAL_NAMESPACE = 'booking';

// Booker theming — mirrors the site tokens in src/index.css so the popup
// reads as part of the site instead of stock Cal.com.
const CAL_CSS_VARS: Record<string, string> = {
  'cal-brand': '#14B8A6', // --c-accent
  'cal-brand-emphasis': '#2DD4BF',
  'cal-brand-text': '#FFFFFF',
  'cal-bg': '#10151E', // --c-surface
  'cal-bg-emphasis': '#161D29', // --c-surface-2
  'cal-bg-subtle': '#161D29',
  'cal-bg-muted': '#090D12', // --c-base
  'cal-border': '#212A38', // --c-border
  'cal-border-subtle': '#212A38',
  'cal-border-booker': '#212A38',
  'cal-border-emphasis': '#33415A',
  'cal-text': '#E8EDF3', // --c-text
  'cal-text-emphasis': '#FFFFFF',
  'cal-text-subtle': '#8B97A8', // --c-muted
  'cal-text-muted': '#67748A',
};

// Loads the Cal embed and applies dark theming once the visitor has opened
// the booking chooser. `wanted` gates this: getCalApi() injects the Cal
// script, so it must not run on mount.
function useCalTheme(wanted: boolean) {
  useEffect(() => {
    if (!wanted) return;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal('ui', {
        theme: 'dark',
        layout: 'month_view',
        cssVarsPerTheme: {
          dark: CAL_CSS_VARS,
          light: CAL_CSS_VARS,
        },
      });
    })();
  }, [wanted]);
}

type CalTriggerProps = {
  link: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

// A single Cal.com event trigger. The embed wires this up via the data-cal-*
// attributes on click (event-delegated), so it works even inside the modal
// that mounts only when the chooser is open.
function CalTrigger({ link, className = '', children, onClick }: CalTriggerProps) {
  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={link}
      data-cal-config={JSON.stringify({ theme: 'dark' })}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

type BookingButtonProps = {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

// Public CTA. Renders the primary button (with the caller's styling), and on
// click opens a small "How should we meet?" chooser offering the in-person and
// online event types.
export function BookingButton({ className = '', children, onClick }: BookingButtonProps) {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  // Latches on the first open so the embed only loads once the visitor
  // actually wants to book.
  const [calWanted, setCalWanted] = useState(false);
  useCalTheme(calWanted);

  const openChooser = () => {
    onClick?.(); // e.g. close the mobile nav menu behind the modal
    setCalWanted(true);
    setOpen(true);
  };

  return (
    <>
      <button type="button" className={className} onClick={openChooser}>
        {children}
      </button>
      <BookingChooser open={open} onClose={() => setOpen(false)} lang={lang} />
    </>
  );
}

type BookingChooserProps = {
  open: boolean;
  onClose: () => void;
  lang: ReturnType<typeof useLanguage>['lang'];
};

function BookingChooser({ open, onClose, lang }: BookingChooserProps) {
  const reduced = useReducedMotion();
  const copy = uiStrings[lang].booking;
  const links = calLinks[lang];
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Escape to close + focus trap while open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
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
  }, [open, onClose]);

  useBodyScrollLock(open);

  // Focus the first option while open.
  useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(
      () => dialogRef.current?.querySelector('button')?.focus(),
      0,
    );
    return () => window.clearTimeout(t);
  }, [open]);

  if (typeof document === 'undefined') return null;

  const optionClass =
    'flex flex-col rounded-xl border border-border bg-surface-2 p-4 text-left transition-colors ' +
    'hover:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent';

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-chooser-title"
          aria-describedby="booking-chooser-subtitle"
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          exit={reduced ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            // Close only when the backdrop itself is clicked — never on clicks
            // inside the card (which must reach Cal's document-level listener).
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={reduced ? {} : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? {} : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
          >
            <h2 id="booking-chooser-title" className="text-xl font-semibold text-text sm:text-2xl">
              {copy.heading}
            </h2>
            <p id="booking-chooser-subtitle" className="mt-2 text-sm leading-relaxed text-muted">
              {copy.subheading}
            </p>

            <div className="mt-6 grid gap-3">
              <CalTrigger
                link={links.inPerson}
                className={optionClass}
                onClick={() => window.setTimeout(onClose, 0)}
              >
                <span className="text-sm font-semibold text-text">{copy.inPerson}</span>
                <span className="mt-1 text-xs leading-relaxed text-muted">{copy.inPersonHint}</span>
              </CalTrigger>
              <CalTrigger
                link={links.online}
                className={optionClass}
                onClick={() => window.setTimeout(onClose, 0)}
              >
                <span className="text-sm font-semibold text-text">{copy.online}</span>
                <span className="mt-1 text-xs leading-relaxed text-muted">{copy.onlineHint}</span>
              </CalTrigger>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
