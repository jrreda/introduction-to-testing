import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { css } from 'css-configuration';

const PORT = process.env.PORT || 3000;

export default defineConfig({
  plugins: [react()],
  css,
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    // Keep Vitest out of ./tests — those are Playwright e2e specs.
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['@testing-library/jest-dom/vitest'],
  },
});
