import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
	plugins: [react(), dts(), tailwindcss()],
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
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
