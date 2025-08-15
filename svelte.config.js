import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Configura Cloudflare Pages
			platformProxy: {
				configPath: 'wrangler.toml',
				experimentalJsonConfig: false
			}
		})
	}
};

export default config;
