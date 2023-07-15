// import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Conquer Cinema",
      meta: [
        { name: "description", content: "Усі фільми в одному місці." },
        { name: "keywords", content: "movies, conquer, films" },
        { name: "robots", content: "noindex, nofollow" },
        { name: "language", content: "English" },
        { name: "author", content: "Dmitry Conquer" },
      ],
    },
  },
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
});
