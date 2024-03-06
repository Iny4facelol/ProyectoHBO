/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',"./node_modules/flowbite/**/*.js"],
	theme: {

		extend: {
			colors: {
				'bodyColor': '#030328',
				'btnBackground' : '#b535f6',
				'acorddionColor' : '#9e86ff',
				
			},
			fontFamily:{
				'mainFont' : 'Poppins'
			},
		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
