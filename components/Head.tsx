import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = process.env.BASE_URL ?? 'https://threkk.com/'
const BASE_TITLE = 'Alberto de Murga ∙ Amsterdam, The Netherlands'
const BASE_DESCRIPTION = 'also known as threkk. Software, miniatures, books.'
const BASE_COVER = '/cover.png'

interface HeadProps {
  title?: string
  description?: string
  cover?: string
  canonical?: string
}

export default function PageHead(props?: HeadProps): JSX.Element {
  const { title, description, cover, canonical } = props
  console.log(title, description, cover, canonical)
  const router = useRouter()

  const url = new URL(router.asPath, BASE_URL)

  return (
    <Head>
      <title>{props.title ?? BASE_TITLE}</title>
      <link rel='favicon' href='/favicon.ico' />

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

      <link rel='canonical' href={canonical ?? router.asPath} />

      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
    </Head>
  )
}
