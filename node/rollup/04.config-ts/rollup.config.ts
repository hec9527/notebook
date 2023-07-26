import { defineConfig } from 'rollup';

export default new Promise(resolve => {
  const config = defineConfig({
    input: 'index.js',
    output: [
      {
        file: './dist/1.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: './dist/1.esm.js',
        format: 'esm',
      },
      {
        file: './dist/1.umd.js',
        format: 'umd',
        name: 'test',
      },
      {
        file: './dist/1.amd.js',
        format: 'amd',
      },
      {
        file: './dist/1.iife.js',
        format: 'iife',
        name: 'test',
      },
      {
        file: './dist/1.system.js',
        format: 'system',
      },
    ],
  });

  setTimeout(() => {
    console.log('load config file successful!');
    resolve(config);
  }, 1000);
});
