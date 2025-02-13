/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"],
      },
      colors: {
        red: {
          500: "#FF3333",
        },
        sky: {
          300: "#55D0FF",
        },
      },
    },
  },
  plugins: [],
};
