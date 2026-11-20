import { screens } from "./src/screens";

export default {
  content: ["./src/**/*.{html,js,tsx,astro}"],
  theme: {
    screens,
    extend: {
      fontFamily: {
        display: ["Oswald-Light", "sans-serif"],
        heading: ["Oswald", "sans-serif"],
        body: ["Noto Sans Regular", "sans-serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#808080",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
        accent: {
          50: "#fcf6f4",
          100: "#f9ebe7",
          200: "#f5dbd3",
          300: "#edc1b4",
          400: "#e19d88",
          500: "#d17c62",
          600: "#bd6145",
          700: "#9e4f37",
          800: "#834431",
          900: "#6e3d2e",
          950: "#3b1d14",
        },
      },
    },
  },
};
