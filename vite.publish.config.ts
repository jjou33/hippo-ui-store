import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

import pkg from './package.json';

const makeExternalPredicate = (externalArr: string[]) => {
  if (externalArr.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externalArr.join('|')})($|/)`);
  return (id: string) => pattern.test(id);
};

const externals = makeExternalPredicate(Object.keys(pkg.peerDependencies));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'index',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: externals,
      output: {
        globals: {
          react: 'React',
          '@emotion/react/jsx-runtime': 'jsxRuntime',
          '@emotion/react': 'react',
          '@emotion/styled': 'styled',
          'react/jsx-runtime': 'jsxRuntime',
        },
      },
    },
  },
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      copyDtsFiles: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components'),
      },
      {
        find: '@assets',
        replacement: resolve(__dirname, './src/assets')
      }
    ]
  }
});
