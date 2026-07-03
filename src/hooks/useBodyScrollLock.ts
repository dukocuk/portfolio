import { useEffect } from 'react';

// Module-level so overlapping lock sites (e.g. two modals) share one counter
// instead of each capturing/restoring `overflow` independently — the naive
// per-component version is prone to leaving scroll permanently stuck.
let lockCount = 0;
let savedScrollY = 0;

// Locks page scroll via fixed-position + saved offset rather than a plain
// `overflow: hidden` toggle, which on mobile Safari/Chrome frequently leaves
// touch-scrolling broken after unlock when the page was already scrolled.
// Also deliberately avoids touching `body.style.overflow` at all: the
// Cal.com embed (opened from the booking modal) independently saves/restores
// that same property, and would otherwise capture our locked "hidden" value
// as "the original" and permanently reapply it after closing.
export function useBodyScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;

    if (lockCount === 0) {
      savedScrollY = window.scrollY;
      const { body } = document;
      body.style.position = 'fixed';
      body.style.top = `-${savedScrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
    }
    lockCount++;

    return () => {
      lockCount--;
      if (lockCount === 0) {
        const { body } = document;
        body.style.position = '';
        body.style.top = '';
        body.style.left = '';
        body.style.right = '';
        window.scrollTo({ top: savedScrollY, behavior: 'instant' });
      }
    };
  }, [active]);
}
