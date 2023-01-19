/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        "GW-Red": '#411616',
        "GW-Black": "#201C1C",
        "GW-blue": "#20e3eC",
        "GW-Gray": "#D9D9D9",
        "GW-White": "#ffffff",
    },
    extend: {
      fontFamily: {
        clashGrotesk: "ClashGrotesk",
      },
      screens: {
        xs: "323px"
      }
    },
  },
  plugins: [],
}