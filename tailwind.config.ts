import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				text: "#262626",
			},
			backgroundImage: {
				"bg-hero": "url('/assets/HomeBgs.png')",
			},
		},
	},
	plugins: [],
};
export default config;
