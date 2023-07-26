import pkg from './package.json' assert { type: 'json' };
import { defineConfig } from 'rollup';
import { fileURLToPath } from 'node:url';
import terser from '@rollup/plugin-terser';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';

// console.log(new URL('src/index.js', import.meta.url).pathname);
console.log(fileURLToPath(new URL('src/index.js', import.meta.url)));

export default defineConfig({
  input: 'src/index.js',

  output: {
    dir: './dist/',
    format: 'cjs',
  },

  // output: [
  //   // {
  //   //   name: 'tts',
  //   //   format: 'umd',
  //   //   file: `dist/bundle-${pkg.version}.umd.js`,
  //   //   footer: '\n// hello this is me first bundle',
  //   // },
  //   // {
  //   //   name: 'tts',
  //   //   format: 'umd',
  //   //   file: `dist/bundle-${pkg.version}.umd.min.js`,
  //   //   footer: '\n// hello this is me first bundle',
  //   //   plugins: [terser()],
  //   // },
  //   {
  //     name: 'tts',
  //     format: 'amd',
  //     file: `dist/bundle-${pkg.version}.amd.js`,
  //   },
  //   {
  //     format: 'cjs',
  //     file: `dist/bundle-${pkg.version}.common.js`,
  //   },
  //   {
  //     format: 'cjs',
  //     file: `dist/bundle-${pkg.version}.es.js`,
  //   },
  // ],

  plugins: [json(), babel({ babelHelpers: 'bundled' })],
});
