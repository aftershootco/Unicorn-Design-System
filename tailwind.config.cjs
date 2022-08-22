/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00bcd4",
        secondary: "#ff4081",
        tertiary: "#ffeb3b",
        alert: "#ffc107",
        pause: "#ff9800",
        save: "#ffeb3b",
      },
    },
    screens: {
      // tablet: [{ raw: "(max-width: 600px)" }, { raw: "(max-height: 400px)" }],
      tablet: [{ raw: "(max-width: 600px),(max-height: 400px)" }],
    },
  },
  plugins: [],
};
