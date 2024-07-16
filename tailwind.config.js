/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ["Playwrite CU", 'cursive'],
        workss: ["Work Sans", 'sans - serif'],
        anton: ["Anton SC", 'sans-serif'],
        DM: ["DM Sans", 'sans-serif']
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake", "aqua", "coffee", "dim", "retro", "acid", "nord", "garden"],
  },
}
