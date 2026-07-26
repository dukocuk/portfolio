import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from the root of whoisduran.com, not a GitHub Pages
  // subpath — a non-'/' base here 404s every asset.
  base: '/',
  plugins: [react(), imagetools()],
})
