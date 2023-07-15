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
      lg: "1024px",
      xl: "1200px",
    },
    colors: {
      primary: "#5D5DFF",
      gray: {
        100: "#d9e3ea",
        200: "#9BA9B4",
        300: "#33363A",
      },
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
    },
  },
};
