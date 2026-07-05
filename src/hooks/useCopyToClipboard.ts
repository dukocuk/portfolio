import { useCallback, useEffect, useRef, useState } from 'react';

// Copy text to the clipboard and briefly flag success. `copied` flips back to
// false after `resetMs`. Silently no-ops when the Clipboard API is unavailable
// (callers always keep a fallback: a mailto link, a download, or a QR code).
export function useCopyToClipboard(resetMs = 2000) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => setCopied(false), resetMs);
      } catch {
        /* clipboard unavailable — caller's fallback still works */
      }
    },
    [resetMs],
  );

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  return { copied, copy };
}
