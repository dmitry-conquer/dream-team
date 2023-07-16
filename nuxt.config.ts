export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Dream Team",
      meta: [
        { name: "description", content: "Усі фільми в одному місці." },
        { name: "keywords", content: "movies, conquer, films" },
        { name: "robots", content: "noindex, nofollow" },
        { name: "language", content: "English" },
        { name: "author", content: "Dmitry Conquer" },
      ],
    },
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: "http://localhost:1332", // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
        prefix: "/api",
        version: "v4",
        cookie: {},
        cookieName: "strapi_jwt",
      },
    },
  },
  spaLoadingTemplate: false,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxtjs/strapi"],

  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
});
