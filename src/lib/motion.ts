import type { Variants, Transition } from 'framer-motion';

// Shared spring used across interactive elements (buttons, cards).
export const spring: Transition = { type: 'spring', stiffness: 320, damping: 26, mass: 0.6 };

// Fade + rise. Used for scroll-reveal of section headers and standalone blocks.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// Parent that staggers its children's reveal. Pair with `staggerItem` on children.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Shared viewport config so reveals fire once, slightly before fully in view.
export const viewportOnce = { once: true, margin: '0px 0px -12% 0px' } as const;
