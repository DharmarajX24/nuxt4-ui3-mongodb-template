// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_NAME: process.env.MONGODB_NAME,
  },
  ui: {
    colorMode: false,
  },
});
