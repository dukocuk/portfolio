import { useEffect, useRef, useState } from 'react';
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from 'framer-motion';

type StatProps = {
  /** Numeric target to count up to. Omit for a static text value (e.g. "MSc"). */
  value?: number;
  /** Static text shown instead of a counter (e.g. "MSc"). */
  text?: string;
  suffix?: string;
  label: string;
};

// A single hero stat. Numeric stats count up once when scrolled into view;
// reduced-motion users (and text stats) see the final value immediately.
export function Stat({ value, text, suffix = '', label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduced = useReducedMotion();
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (value === undefined || !inView || reduced) return;
    const controls = animate(motionVal, value, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, value, reduced, motionVal]);

  // Reduced-motion users (and pre-animation) get the final value with no count-up.
  const shown = reduced && value !== undefined ? value : display;

  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-bold text-text sm:text-4xl">
        {text ?? (
          <>
            {shown}
            <span className="text-gradient">{suffix}</span>
          </>
        )}
      </div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}
