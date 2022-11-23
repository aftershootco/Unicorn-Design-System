import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import postcssUrl from 'postcss-url'
import babel from 'rollup-plugin-babel'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import svg from 'rollup-plugin-svg'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default [
	{
		input: 'src/components/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
			},
			{
				file: packageJson.module,
				format: 'esm',
			},
		],
		plugins: [
			resolve(),
			peerDepsExternal(),
			commonjs(),
			svg(),
			svgr(),
			url(),
			postcss({
				minimize: true,
				modules: {
					generateScopedName: '[hash:base64:5]',
				},
			}),
			postcssUrl({
				url: 'inline',
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
			babel({
				exclude: ['node_modules/**', 'src/stories/**'],
			}),
		],
	},

	{
		input: 'src/components/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.scss$/],
	},
]
