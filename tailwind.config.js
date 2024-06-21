/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./App.{js,jsx,ts,tsx}"

  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#00bfa5",
        sidebar_activate_text: "#2B9E90",
        sidebar_activate_bg: "#fff",
        primary_color: "#E76F51",
        secondary_color: "#E7C651",
        secondary_text: "#B3ABAB",
        text_danger: "#FF1212",
        green: "#51E769",
        yellow: "#DDEF07"
      }
    },
  },
  plugins: [],
}
