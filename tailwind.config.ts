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
				background: "#DDDBDC",
			},
			backgroundImage: {
				"hero": "url('/assets/home.png')",
				"about": "url('/assets/about.png')",
				"new": "url('/assets/new.png')",
				"holiday": "url('/assets/holiday.png')",
				"best": "url('/assets/best.png')",
				"section": "url('/assets/bgsec.png')",
								"sectionbg": "url('/assets/randab.png')",

				
			},
		},
	},
	plugins: [],
};
export default config;
