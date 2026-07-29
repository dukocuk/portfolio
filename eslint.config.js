import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

// `eslint-config-next` is deliberately absent. Its peer range allows ESLint 10,
// but it pulls in eslint-plugin-react / jsx-a11y / import, none of which support
// ESLint 10 yet — adding it takes `npm run lint` (and therefore CI) red. Next's
// own build still reports the things that matter most here: type errors, and
// client/server boundary violations.
export default defineConfig([
  globalIgnores(['.next', 'out', 'next-env.d.ts', 'src/lib/caseStudyImages.generated.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.next,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // Build tooling that runs in Node, not the browser.
  {
    files: ['scripts/**/*.mjs', 'next.config.ts', 'app/{sitemap,robots}.ts'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: globals.node,
    },
  },
])
