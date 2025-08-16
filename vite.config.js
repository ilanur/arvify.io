import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		target: 'esnext',
		cssCodeSplit: false // Evita la divisione del CSS per ridurre FOUC
	},
	css: {
		devSourcemap: true // Migliora il debugging CSS in sviluppo
	}
});
