import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import autoPreprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer';

export default defineConfig({
	plugins: [
		// Only enable sveltekit() in development mode
		process.env.NODE_ENV === 'development' && sveltekit(),
	  ],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: 'src/main.js',
			name: 'SvelteBundle',
			// the proper extensions will be added
			fileName: 'bundle',
		},
		rollupOptions: {
			plugins: [
				svelte({
					preprocess: autoPreprocess({
						postcss: {
							plugins: [autoprefixer()]
						}
					}),
					emitCss: false,
					compilerOptions: {
						customElement: true
					}
				}),
				resolve({
					browser: true,
					jsnext: true,
				}),
				babel({
					extensions: ['.js', '.mjs', '.html', '.svelte'],
					babelHelpers: 'runtime',
					exclude: ['node_modules/@babel/**'],
					presets: [
						[
							'@babel/preset-env',
							{
								targets: '> 0.25%, not dead'
							}
						]
					],
					plugins: [
						'@babel/plugin-syntax-dynamic-import',
						[
							'@babel/plugin-transform-runtime',
							{
								useESModules: true
							}
						]
					]
				}),
				terser()
			],
		}
	}
});