// https://nuxt.com/docs/api/configuration/nuxt-config
const extraModules = []
if (process.env.NODE_ENV === 'development') {
  extraModules.push('@nuxt/devtools')
} else if (process.env.NODE_ENV === 'production') {
  extraModules.push('nuxt-security')
}

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image-edge',
    'nuxt-icon',
    'nuxt-cloudflare-analytics',
    '@nuxt/content',
    '@vueuse/nuxt',
    ...extraModules
  ],
  extends: [
    // TODO: configure seo kit https://nuxt.com/modules/seo-kit
    'nuxt-seo-kit'
  ],
  css: [
    '@/assets/theme.css',
    '@/assets/inter.css',
    '@/assets/fira_code.css',
    '@picocss/pico/css/pico.css'
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
