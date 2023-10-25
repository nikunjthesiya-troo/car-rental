/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
	mode: "jit",
	content: [
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				// "glass-effect": "url('./assets/images/glass-effect.png')",
			},
			colors: {
				troo: {
					primary: "#374DC0",
					"primary-light": "#F3F5FF",
					secondary: "#232323",
					yellow: "#E8C409",
					tertiary: "#212121",
					light: "#FFFFFF",
				},
			},
			keyframes: {
				smoothWidthHeight: {
					"0%": { width: "10px", height: "10px" },
					"100%": { width: "100%", height: "100%" },
				},
				smoothWidth: {
					"0%": { width: "0px", height: "100%" },
					"100%": { width: "100%", height: "100%" },
				},
				smoothHeight: {
					"0%": { height: "0%" },
					"100%": { height: "36px" },
				},
				smoothHeightFull: {
					"0%": { height: "0px" },
					"100%": { height: "100%" },
				},
			},
			animation: {
				smoothWidthHeight: "smoothWidthHeight 0.3s ease-in-out",
				smoothWidth: "smoothWidth 0.3s ease-in-out",
				smoothHeight: "smoothHeight 0.4s ease-in-out",
				smoothHeightFull: "smoothHeightFull 0.6s ease-in-out",
			},
		},
	},
	plugins: [nextui()],
};
