import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    providerImportSource: '@mdx-js/react'
  }
})

const config = withMDX({
  // i18n: {
  //   locales: ['en', 'es', 'fr', 'nl', 'kr'],
  //   defaultLocale: 'en',
  // },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx']
})

export default config
