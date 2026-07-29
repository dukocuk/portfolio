import type { Metadata, Viewport } from 'next';
import { RootShell } from '../RootShell';
import { buildMetadata } from '../siteMetadata';

// Danish holds the domain root — it is the default language and the canonical
// URL that was already indexed, so it stays at '/'.
export const metadata: Metadata = buildMetadata('da');

export const viewport: Viewport = {
  themeColor: '#090D12',
  width: 'device-width',
  initialScale: 1,
};

export default function DanishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="da">{children}</RootShell>;
}
