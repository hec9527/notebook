import { defineConfig } from 'rollup';
export default defineConfig({
  input: './index.js',
  output: {
    file: 'out.js',
    format: 'cjs',
    footer: '// hello this is me first rollup project. congratulation!',
    exports: 'named',
    banner: `/** copyright hec9527 since 2022 */`,
  },
});
