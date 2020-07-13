import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

// http://simey.me/svelte3-rollup-and-babel7/

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name },
		{ file: 'dist/shareable-svelte-components.min.js', format: 'iife', name }
	],
	plugins: [
		svelte(),
		resolve(),
		babel({
			extensions: [ ".js", ".mjs", ".html", ".svelte" ]
		})
	]
};
