import { useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useModalA11y } from '../../hooks/useModalA11y';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** id of the heading that labels the dialog. */
  labelledBy?: string;
  /** id of the element that describes the dialog. */
  describedBy?: string;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
  /** Classes for the inner card; defaults to the standard centered card. */
  cardClassName?: string;
};

const DEFAULT_CARD =
  'w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-2xl sm:p-8';

// Centered-card modal used by the card-style dialogs (booking chooser,
// first-visit notice). Owns the portal, backdrop, animation, and — via
// useModalA11y — the focus trap, scroll lock, and background-inert treatment.
// The full-bleed Lightbox has its own layout and uses useModalA11y directly.
export function Modal({
  open,
  onClose,
  children,
  labelledBy,
  describedBy,
  closeOnEscape = true,
  closeOnBackdrop = true,
  cardClassName = DEFAULT_CARD,
}: ModalProps) {
  const reduced = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  useModalA11y(dialogRef, { open, onClose, closeOnEscape });

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={labelledBy}
          aria-describedby={describedBy}
          initial={reduced ? false : { opacity: 0 }}
          animate={reduced ? {} : { opacity: 1 }}
          exit={reduced ? {} : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={
            closeOnBackdrop
              ? (e) => {
                  if (e.target === e.currentTarget) onClose();
                }
              : undefined
          }
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur"
        >
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={reduced ? {} : { opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? {} : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cardClassName}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
