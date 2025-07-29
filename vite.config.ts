import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'reactfine-ui',
			fileName: 'index',
			formats: ['es', 'cjs'],
		},
		rollupOptions: {
			external: ['react', 'react-dom'],
		},
		sourcemap: true,
		emptyOutDir: true,
	},

	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	plugins: [react(), dts(), tailwindcss()],
});
