// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  colorMode: {
    classSuffix: "",
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "@formkit/auto-animate/nuxt",
  ],
});
