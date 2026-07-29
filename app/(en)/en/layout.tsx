import type { Metadata, Viewport } from 'next';
import { RootShell } from '../../RootShell';
import { buildMetadata } from '../../siteMetadata';

// English lives at /en/ as its own pre-rendered document. Before the Next
// migration this version existed only after JavaScript swapped the copy, so
// crawlers and link previews never saw it.
export const metadata: Metadata = buildMetadata('en');

export const viewport: Viewport = {
  themeColor: '#090D12',
  width: 'device-width',
  initialScale: 1,
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>;
}
