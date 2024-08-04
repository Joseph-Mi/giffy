/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          white: "#FFFFFF",
          black: "#00171F",
          navtext: "#D0D0D0",
          navtext_hover: "#676767",
          blue: "#3F94D1",
        },
        secondary: {
          orange: "#E06320",
        },
      },
    },
  },
  plugins: [],
};
