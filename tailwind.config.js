/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        color:{
            primary: "#1c2780"
        },
        flex:{
            '2':'2 2 0%',
            '3':'3 3 0%',
            '3.5':'3.5 3.5 0%',
            '4':'4 4 0%',
            '5':'5 5 0%',
            '5.5':'5.5 5.5 0%',
            '6':'6 6 0%'
        }
    },
  },
  plugins: [],
}