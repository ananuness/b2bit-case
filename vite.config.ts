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
    environment: 'jsdom',
    globals: true,
    bail: 1,
    coverage: {
      include: ['src/**/*'],
      enabled: true,
    },
  },
});
