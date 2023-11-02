/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#01062A",
        accent: "#335BF0",
        component: "#091741",
      },
      fontFamily: {
        agbalumo: ['Agbalumo'],
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}