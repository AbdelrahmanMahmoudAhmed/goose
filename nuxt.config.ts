
import path from 'path'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    lazy: true,
    langDir: "locales",
    locales: [
      {
        code: 'en',
        file: 'en.json'
      },
      {
        code: 'ar',
        file: 'ar.json'
      },
    ],
    defaultLocale: 'ar',

    strategy: 'no_prefix',


  },
  css: ['~/assets/css/main.css',
    '~/assets/css/fonts.css'
  ],
  plugins: [
  ],



  runtimeConfig: {
    public: {
      dev_base: process.env.API_BASE,
      prod_base: process.env.API_BASE_PRODUCTION,
      base_url: process.env.BASE_URL
    }
  },

  app: {
    head: {
      title: "GooseFlight",
      link: [{ rel: 'icon', type: 'image/png', href: "/logo.png" }]
    },
  },

})