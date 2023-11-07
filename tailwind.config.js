/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkElement: "#2b3945",
        darkBg: "#212d38",
        lightText: "#121517",
        lightInput: "#858585",
        lightBg: "#fafafa",
        darkText_LightElement: "#ffffff",
      },
      width: {
        96: "30rem",
      },
    },
  },
  plugins: [],
};
