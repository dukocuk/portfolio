import type { ReactNode } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../lib/motion';

type RevealProps = {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  /** Render as a different element while keeping motion (e.g. 'ul', 'li'). */
  as?: 'div' | 'ul' | 'li' | 'ol' | 'section' | 'span';
  /** Used by staggerContainer parents; children should set their own item variants. */
  stagger?: boolean;
};

// Scroll-reveal wrapper. Collapses to a plain, fully-visible element when the
// user prefers reduced motion, so nothing stays hidden and no motion plays.
export function Reveal({ children, variants = fadeUp, className = '', as = 'div', stagger = false }: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as];

  if (reduced) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      {...(stagger ? {} : {})}
    >
      {children}
    </MotionTag>
  );
}
