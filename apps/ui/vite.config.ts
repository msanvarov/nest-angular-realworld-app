/// <reference types="vitest" />
import analog from '@analogjs/platform';
import {
  defineConfig,
  searchForWorkspaceRoot,
  splitVendorChunkPlugin,
} from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/public',

    build: {
      target: ['es2020'],
    },
    plugins: [
      analog(),
      tsConfigPaths({
        root: '../../',
      }),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
    server: {
      fs: {
        allow: [
          // search up for workspace root
          searchForWorkspaceRoot(process.cwd()),
          // your custom rules
          '/libs/core-components',
        ],
      },
    },
  };
});
