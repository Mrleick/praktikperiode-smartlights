/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
    colors: {
    cardcolor: '#D8D7DA',
    cardheader: '#002D67',
    cardp: '#FFA939',
    cardcontainer: '#F6F8FB'
    }
  },
    
  },
  plugins: [],
}