import react from '@vitejs/plugin-react-swc';

import type { ConfigObject } from '../interfaces';

// https://vitejs.dev/config/
const buildConfig: ConfigObject = {
  LIB: {},
  SITE: {
    plugins: [react()],
    build: {
      outDir: 'build',
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      rollupOptions: {
        output: {
          entryFileNames: 'site-bundle-[name].js',
        },
      },
    },
    test: {
      // This will expose all of the API's method from Vite into the project
      globals: true,
      environment: 'jsdom',
      css: true,
      // This file will run at the beginning of every test run
      setupFiles: './testsSetup.ts',
    },
  },
};

export default buildConfig;
