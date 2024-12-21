/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				abel: ["Abel", "sans-serif"],
				lexend: ["Lexend", "sans-serif"],
				abeezee: ["ABeeZee", "sans-serif"],
				fugaz_one: ["Fugaz One", "sans-serif"],
				open_sans: ["Open Sans", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
