/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        wl: {
          red: "#AA2222",
        },
      },
    },
  },
  plugins: [],
};
