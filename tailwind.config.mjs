/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			colors: {
				'bodyColor': '#030328',
				'btnBackground' : '#b535f6',
				'acorddionColor' : '#9e86ff',
				
			},
		},
	},
	plugins: [],
}
