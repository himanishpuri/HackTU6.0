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
        inter: ["Inter", "sans-serif"],
        tilt_warp: ["Tilt Warp", "sans-serif"],
        space_grotesx: ["Space Grotesk", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "dark-blue": "#004466", // Dark blue
        "teal-400": "#70d1c8", // Light teal
      },
      screens: {
        xs: "415px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "slab-shadow": "rgba(0, 0, 0, 0.15) 10px 5.95px 7.6px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
