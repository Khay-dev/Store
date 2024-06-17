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
				"new": "url('/assets/new.png')",
				"holiday": "url('/assets/holiday.png')",
				"best": "url('/assets/best.png')",
			},
		},
	},
	plugins: [],
};
export default config;
