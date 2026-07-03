import { motion, useScroll } from 'framer-motion';

// Thin progress bar pinned to the top of the viewport, tracking page scroll.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX: scrollYProgress }}
      className="fixed left-0 top-0 z-[55] h-0.5 w-full origin-left bg-accent-gradient"
    />
  );
}
