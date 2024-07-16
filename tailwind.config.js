/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        BodoniModa: ["BodoniModa", "serif"],
        CormorantGaramond: ["CormorantGaramond", "serif"],
      },
      colors: {
        beige: "#ECE7E1",
        dark: "#1A1818",
        darkCard: "#434040",
        beigeCard: "#B5A89F",
        btnBeige: "#ECE7E1",
        btnDark: "#1A1818",
      },
      keyframes: {
        l24: {
          "0%": { backgroundPosition: "right" },
          "100%": { backgroundPosition: "left" },
        },
      },
      animation: {
        l24: "l24 1s infinite alternate linear",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

// use https://www.tailwindcss-animated.com/configurator.html?animation=fade-up at titles effect
// animate-fade-up animate-duration-[2000ms] animate-ease-in-out
