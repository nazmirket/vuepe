import vue from 'rollup-plugin-vue'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import url from '@rollup/plugin-url'
import fs from 'fs'

export default [
	// ES config
	{
		input: 'plugin.esm.js',
		external: ['vue'],
		output: {
			file: 'dist/vuepe.esm.js',
			format: 'esm',
			exports: 'named',
		},
		plugins: [
			url(),
			vue({
				css: true,
				template: { isProduction: true },
			}),
			resolve({
				extensions: ['.js', '.vue'],
			}),
			commonjs(),
		],
	},
	// SSR config
	{
		input: 'plugin.js',
		external: ['vue'],
		output: {
			compact: true,
			file: 'dist/vuepe.ssr.js',
			format: 'cjs',
			name: 'Vuepe',
			exports: 'auto',
			globals: { vue: 'Vue' },
		},
		plugins: [
			url(),
			vue({
				css: true,
				template: { isProduction: true, optimizeSSR: true },
			}),
			resolve({
				extensions: ['.js', '.vue'],
			}),
			commonjs(),
		],
	},
	// SASS SCSS config
	{
		input: 'style.js',
		plugins: [
			scss({
				sass: require('sass'),
				output(css) {
					const out = 'dist/vuepe.css'
					fs.writeFileSync(out, css)
				},
				outputStyle: 'compressed',
				failOnError: true,
			}),
		],
	},
]
