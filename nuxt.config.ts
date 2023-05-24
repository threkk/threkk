// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image-edge',
    '@nuxt/devtools',
    'nuxt-icon',
    'nuxt-cloudflare-analytics',
    '@nuxt/content',
    // Enable only in production or it will break the dev tools
    // 'nuxt-security', 
    '@vueuse/nuxt'
  ],
  extends: [
    // TODO: configure seo kit https://nuxt.com/modules/seo-kit
    'nuxt-seo-kit'
  ],
  devtools: {
    enabled: true
  },
  cloudflareAnalytics: {
    // https://nuxt.com/modules/cloudflare-analytics
  },
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})
