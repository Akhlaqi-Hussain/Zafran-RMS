/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // If using the App Router
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
      colors: {
        goldenBrown: "#c49b63",
      },
    },
  },
  plugins: [],
};
