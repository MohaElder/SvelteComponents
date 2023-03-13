import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import svelte from 'rollup-plugin-svelte';
import { babel } from '@rollup/plugin-babel';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

const debug = process.env.NODE_ENV === 'development';

export default defineConfig({
	plugins: [
		// Only enable sveltekit() in development mode
		debug && sveltekit({
		}),
		!debug && svelte({
			preprocess: vitePreprocess(),
		}),
		!debug && babel({
			babelHelpers: 'runtime',
			exclude: ['node_modules/@babel/**'],
			presets: [
				[
					'@babel/preset-env',
				]
			],
			plugins: [
				[
					'@babel/plugin-transform-runtime',
				]
			]
		})
	],
	build: {
		emptyOutDir: true,
		outDir: './dist',
		lib: {
			entry: path.resolve(__dirname, 'src/main.js'),
			name: 'SvelteBundle',
			fileName: 'bundle',
			formats: ['es']
		},
		minify: !debug ? 'esbuild' : false,
		sourcemap: !debug,
	}
});