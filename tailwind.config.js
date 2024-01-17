/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: {
          default: "#F6F8FB",
          card: "#D8D7DA",
          header: "#002D67",
        },
        text: {
          default: "#333333",
          muted: "#666666",
          link: "#007BFF",
        },
        accent: {
          primary: "#FFA939",
          secondary: "#FFD339",
        },
        border: "#CECECE",
      },
    },
  },
  plugins: [],
};
