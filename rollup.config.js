import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import image from '@rollup/plugin-image';

export default [
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    external: ['react'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      image(),
    ],
  },
];
