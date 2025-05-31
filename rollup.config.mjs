import path from 'path';
import { fileURLToPath } from 'url';
import typescript from 'rollup-plugin-typescript2';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entryPoint = path.resolve(__dirname, 'src', 'index.ts');
const outputEsmPoint = path.resolve(__dirname, 'dist', 'esm');

/**
 * @param output {import('rollup').OutputOptions}
 * @returns {import('rollup').RollupOptions}
 * */
const config = (output) => ({
	input: entryPoint,

	output: {
		...output,

		name: 'uni-shared-types',

		/** Разделение на чанки, чтобы работал tree shaking */
		preserveModules: true,

		/** Не оборачиваем конечный билд в директорию src */
		preserveModulesRoot: 'src',
	},

	plugins: [
		typescript({
			tsconfig: 'tsconfig.json',
		}),
	],
});

export default [config({ dir: outputEsmPoint, format: 'es' })];
