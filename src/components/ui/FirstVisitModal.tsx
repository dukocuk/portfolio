import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import { firstVisitContent } from '../../data/popup';
import { Modal } from './Modal';

const STORAGE_KEY = 'firstVisitAck';

function getInitialOpen(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== 'true';
  } catch {
    return true;
  }
}

// Blocking, once-per-browser notice. Unlike the other modals, there is no
// Escape or backdrop-click dismissal — acknowledging via the CTA is the only
// exit (closeOnEscape / closeOnBackdrop disabled below).
export function FirstVisitModal() {
  const { lang } = useLanguage();
  const copy = firstVisitContent[lang];
  const [open, setOpen] = useState<boolean>(getInitialOpen);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Storage unavailable — dismissal won't persist, acceptable degradation.
    }
  };

  return (
    <Modal
      open={open}
      onClose={dismiss}
      closeOnEscape={false}
      closeOnBackdrop={false}
      labelledBy="first-visit-title"
      describedBy="first-visit-body"
      cardClassName="w-full max-w-md rounded-2xl border border-border bg-surface p-6 text-center shadow-2xl sm:p-8"
    >
      <h2 id="first-visit-title" className="text-xl font-semibold text-text sm:text-2xl">
        {copy.title}
      </h2>
      <p id="first-visit-body" className="mt-4 text-sm leading-relaxed text-muted">
        {copy.body}
      </p>
      <button
        type="button"
        onClick={dismiss}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent-gradient px-5 py-3 text-sm font-semibold text-white shadow-md shadow-accent/20 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:w-auto"
      >
        {copy.cta}
      </button>
    </Modal>
  );
}
