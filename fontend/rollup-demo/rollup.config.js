import json from '@rollup/plugin-json';

const config = {
  input: 'src/index.js',
  output: [
    {
      format: 'umd',
      file: 'dist/bundle.js',
    },
    {
      format: 'amd',
      file: 'dist/bundle.amd.js',
    },
    {
      format: 'cjs',
      file: 'dist/bundle.cjs',
    },
  ],
  compact: true,

  plugins: [json()],
};

export default config;
