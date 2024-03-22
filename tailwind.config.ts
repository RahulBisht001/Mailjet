import { Red_Hat_Display } from "next/font/google";
import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			Poppins: ["var(--font-Poppins)"],
			Lexend: ["var(--font-Lexend)"],
			Overpass: ["var(--font-Overpass)"],
			RedHatDisplay: ["var(--font-RedHatDisplay)"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
};
export default config;
