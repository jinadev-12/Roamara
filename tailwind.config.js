/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#efe5d7", // custom background color
      },
      fontFamily: {
        primary: ["Cinzel", "sans-serif"],
        secondary: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
