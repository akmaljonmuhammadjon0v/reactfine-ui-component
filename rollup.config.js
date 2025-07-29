import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import esbuild from 'rollup-plugin-esbuild';
import packageJson from './package.json' with { type: 'json' };
import alias from '@rollup/plugin-alias';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main, // CJS: dist/index.js
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module, // ESM: dist/index.esm.js
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
		alias({
		entries: [
		  { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
		  { find: 'lib', replacement: path.resolve(__dirname, 'src/lib') },
		  { find: '@', replacement: path.resolve(__dirname, 'src') },
		],
	  }),

			peerDepsExternal(),
			resolve(),
			postcss({
				extract: true,
				minimize: true,
			}),
			commonjs(),
			postcss({ // <-- CSS plugin bu yerda
		extensions: ['.css'],
		extract: true,
		minimize: true,
		sourceMap: true,
	  }),
			json(), // ✅ JSON plugin qo‘shildi asosiy qismga
			esbuild({
		include: /\.[jt]sx?$/, // .ts, .tsx, .js, .jsx fayllarni qo‘llab-quvvatlaydi
		minify: true,
		target: 'esnext',
		tsconfig: './tsconfig.json',
	  }),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
		],
		external: ['react', 'react-dom'],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/types.d.ts', format: 'es' }],
		plugins: [dts()],
	},
];
