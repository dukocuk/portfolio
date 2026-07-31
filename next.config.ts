import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The site is a pile of static files behind nginx on a VPS — there is no Node
  // process to serve it. `export` is what makes `npm run build` produce that.
  output: 'export',

  // Emits out/en/index.html rather than out/en.html, so nginx's existing
  // `try_files $uri $uri/ /index.html` resolves /en/ without a new rule.
  trailingSlash: true,

  // Next's default image optimizer is a server feature and hard-errors during
  // export. The WebP variants are produced ahead of the build instead — see
  // scripts/build-case-images.mjs.
  images: { unoptimized: true },

  experimental: {
    // Opts app/global-not-found.tsx in. Both root layouts live in route groups
    // so <html lang> can differ per locale, which leaves no root layout for a
    // plain not-found.tsx to render inside — global-not-found owns its own
    // <html>/<body> and is the supported way to do this.
    globalNotFound: true,
  },
};

export default nextConfig;
