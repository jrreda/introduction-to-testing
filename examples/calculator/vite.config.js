import { defineConfig } from 'vite';
import { css } from 'css-configuration';

export default defineConfig({
  assetsInclude: ['**/*.html'],
  css,
  test: {
    // Keep Vitest out of ./tests — those are Playwright e2e specs.
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    environment: 'happy-dom',
    globals: true,
  },
});
