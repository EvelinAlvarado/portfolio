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
        btnBeige: "#ECE7E1",
        btnDark: "#1A1818",
      },
    },
  },
  plugins: [],
};
