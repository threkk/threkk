import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = process.env.BASE_URL ?? 'https://threkk.com/'
const BASE_TITLE = 'Alberto de Murga ∙ threkk'
const BASE_DESCRIPTION =
  'Based in Amsterdam, The Netherlands. Software, miniatures, books.'
const BASE_COVER = '/cover.png'

interface HeadProps {
  title?: string
  description?: string
  cover?: string
  canonical?: string
}

export default function PageHead(props?: HeadProps): JSX.Element {
  const { title, description, cover, canonical } = props
  const router = useRouter()

  const url = new URL(router.asPath, BASE_URL)

  return (
    <Head>
      <title>{props.title ?? BASE_TITLE}</title>
      <link rel='shortcut icon' type='image/favicon' href='/favicon.ico' />

      <meta name='title' content={title ?? BASE_TITLE} />
      <meta name='description' content={description ?? BASE_DESCRIPTION} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={url.toString()} />
      <meta property='og:title' content={title ?? BASE_TITLE} />
      <meta
        property='og:description'
        content={description ?? BASE_DESCRIPTION}
      />
      <meta property='og:image' content={cover ?? BASE_COVER} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url.toString()} />
      <meta property='twitter:title' content={title ?? BASE_TITLE} />
      <meta
        property='twitter:description'
        content={description ?? BASE_DESCRIPTION}
      />
      <meta property='twitter:image' content={cover ?? BASE_COVER} />

      <meta name='robots' content='index,follow,noodp' />
      <meta name='googlebot' content='index,follow' />

      <link rel='canonical' href={canonical ?? url.toString()} />

      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <link rel='favicon' href='/favicon.ico' />
      <link rel='shortcut icon' type='image/favicon' href='/favicon.ico' />
      <link rel='shortcut icon' type='image/png' href='/square.png' />
      <link rel='apple-touch-icon' href='/square.png' />
      <meta name='mobile-web-app-capable' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />

      <link rel='me' href='https://twitter.com/threkk' />
      <link rel='me' href='mailto:alberto@threkk.com' />
      <link rel='me' href='https://github.com/threkk' />
    </Head>
  )
}
