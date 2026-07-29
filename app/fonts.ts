import { Inter, Space_Grotesk } from 'next/font/google';

// Self-hosted at build time and exposed as CSS variables that
// tailwind.config.js points `font-sans` / `font-display` at. The weights are
// the ones the design actually uses — asking for more just grows the payload.
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const fontVariables = `${inter.variable} ${spaceGrotesk.variable}`;
