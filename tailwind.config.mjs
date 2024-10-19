import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#feb3a4', 600: '#c52100', 900: '#610b00', 950: '#460b03' };
const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};
