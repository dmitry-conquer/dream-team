/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1110px",
    },

    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      md: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.875rem",
      "3xl": "2.125rem",
      "4xl": "3.25rem",
    },
    fontFamily: {
      arch: ["Architects Daughter", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      padding: {
        section: "4rem",
      },
      colors: {
        primary: {
          DEFAULT: "#5D5DFF",
          dark: "#4B4ACF",
        },
        dark: "#151719",
        white: "#fff",
        gray: {
          100: "#d9e3ea",
          150: "#f3f4f6",
          200: "#9BA9B4",
          300: "#33363A",
        },
        "admin-brand": {
          100: "#3fcf8e",
          200: "#30a46c",
          300: "#0c1f17",
        },
        "admin-gray": {
          100: "#ededed", // text primary
          200: "#bbbbbb", // text muted
          300: "#707070", // text muted dark
          400: "#343434",
          500: "#2e2e2e",
          600: "#232323", // secondary bg
          700: "#1c1c1c", // main bg
        },
      },
    },
  },
};
