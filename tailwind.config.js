/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Custom breakpoint for extra small screens
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(318deg, #3C147F, #4B2EA4)',
      },
    },
  },
  plugins: [],
};
