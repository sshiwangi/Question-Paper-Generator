/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        reelobg: "#0d9298",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
