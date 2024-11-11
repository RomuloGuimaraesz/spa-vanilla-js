// vite.config.mjs
import { defineConfig } from 'vite';
import babelAsyncPlugin from './vite-plugin-babel-async.mjs';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    babelAsyncPlugin({
      babelConfig: './config/babel.config.build.mjs',
      include: ['**/*.js'],
      babelOptions: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
        plugins: ['./remove-jsdoc.js'],
      },
    }),
  ],
});
