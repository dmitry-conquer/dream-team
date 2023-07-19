export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Dream Team",
      meta: [
        { name: "description", content: "Dream Team web site." },
        { name: "keywords", content: "Dream, Team, site" },
        { name: "robots", content: "noindex, nofollow" },
        { name: "language", content: "English" },
        { name: "author", content: "Dmitry Conquer" },
      ],
    },
  },
  runtimeConfig: {
    SUPABASE_KEY: process.env.SUPABASE_KEY,
    SUPABASE_URL: process.env.SUPABASE_URL,
  },
  spaLoadingTemplate: false,
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxtjs/supabase"],

  css: ["~/assets/style.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
});
