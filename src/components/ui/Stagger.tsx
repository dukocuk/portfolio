import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOnce } from '../../lib/motion';

type GroupProps = { children: ReactNode; className?: string };

// Parent grid/list that reveals its <StaggerItem> children in sequence on scroll.
export function StaggerGroup({ children, className = '' }: GroupProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}

// One child of a StaggerGroup. Inherits the group's reveal timing.
export function StaggerItem({ children, className = '' }: GroupProps) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
