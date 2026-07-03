const seen = new Set<string>();

export function prefetchImage(url: string | undefined | null): void {
  if (!url || seen.has(url)) return;
  seen.add(url);
  const img = new Image();
  img.decoding = 'async';
  img.src = url;
}
