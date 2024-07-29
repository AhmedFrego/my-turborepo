import { sentryVitePlugin } from '@sentry/vite-plugin';
import react from '@vitejs/plugin-react';
import process from 'node:process';
import { bundleStats } from 'rollup-plugin-bundle-stats';
import { visualizer } from 'rollup-plugin-visualizer';
import { TemplateType } from 'rollup-plugin-visualizer/dist/plugin/template-types';
import { type PluginOption, defineConfig, splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const visualizerTemplates: TemplateType[] = ['treemap', 'flamegraph'];

	const plugins = [
		tsconfigPaths(),
		react({
			jsxImportSource:
				mode === 'development'
					? '@welldone-software/why-did-you-render'
					: undefined,
		}),
		splitVendorChunkPlugin(),
		bundleStats(),
	];

	if (process.env.LOCAL) {
		for (const item of visualizerTemplates) {
			plugins.push(
				visualizer({
					filename: `visualizer/${item}.html`,
					template: item,
				}),
			);
		}
	}

	if (!process.env.LOCAL) {
		plugins.push(
			sentryVitePlugin({
				// and need `project:releases` and `org:read` scopes
				authToken: process.env.SENTRY_AUTH_TOKEN,
				org: 'brands-maker',
				// Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
				project: 'sfyr-web',
			}) as PluginOption[],
		);
	}

	return {
		build: {
			rollupOptions: {
				treeshake: true,
			},
			sourcemap: 'hidden' as const,
		},
		define: {
			'process.env': process.env,
		},
		plugins: plugins as PluginOption[],
		server: {
			host: true,
		},
	};
});
