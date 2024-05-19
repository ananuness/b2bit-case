/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
  test: {
    bail: 1,
    globals: true,
    css: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
    coverage: {
      include: ['src/**/*'],
      enabled: true,
    },
  },
});
