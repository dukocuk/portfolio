import { useCallback, useLayoutEffect, useRef, useState } from 'react';

type Options = {
  count: number;
  columns: number;
  // Elements can only be measured at their natural height, so skip while any of them is expanded.
  freeze: boolean;
  // Change to force a re-measure (e.g. when the copy changes).
  resetKey?: unknown;
};

type Measurement = { signature: string; rows: number[] };

// Equalizes element heights within a grid row by pinning each row's tallest natural height as a
// min-height. Unlike CSS `align-items: stretch`, a pinned element keeps its height when a sibling grows.
export function useEqualRowHeights({ count, columns, freeze, resetKey }: Options) {
  const elements = useRef(new Map<number, HTMLElement>());
  // null means "not measured yet" — no min-height is applied then, so a measure pass reads natural heights.
  const [measurement, setMeasurement] = useState<Measurement | null>(null);
  const signature = `${count}:${columns}:${String(resetKey)}`;

  // Anything in the signature changes the natural heights, so drop the stale measurement before painting.
  if (measurement && measurement.signature !== signature) setMeasurement(null);

  const setRef = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      if (el) elements.current.set(index, el);
      else elements.current.delete(index);
    },
    [],
  );

  useLayoutEffect(() => {
    if (measurement || freeze || columns < 2) return;

    const rows: number[] = [];
    for (const [index, el] of elements.current) {
      const row = Math.floor(index / columns);
      rows[row] = Math.max(rows[row] ?? 0, el.offsetHeight);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading layout can only happen after it
    setMeasurement({ signature, rows });
  }, [measurement, freeze, columns, signature]);

  // Only a width change alters natural heights; ignore the height-only callbacks an expanding panel fires.
  useLayoutEffect(() => {
    const widths = new Map<Element, number>();
    const observer = new ResizeObserver((entries) => {
      const resized = entries.some((entry) => {
        const { width } = entry.contentRect;
        const changed = widths.has(entry.target) && widths.get(entry.target) !== width;
        widths.set(entry.target, width);
        return changed;
      });
      if (resized) setMeasurement(null);
    });

    for (const el of elements.current.values()) observer.observe(el);
    return () => observer.disconnect();
  }, [count]);

  // Heights measured before the display font lands are wrong; re-measure once it has.
  useLayoutEffect(() => {
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) setMeasurement(null);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  const minHeightOf = (index: number) =>
    columns < 2 ? undefined : measurement?.rows[Math.floor(index / columns)];

  return { setRef, minHeightOf };
}
