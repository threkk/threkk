import Head from 'next/head'
import { useRouter } from 'next/router'

const BASE_URL = process.env.BASE_URL ?? 'https://threkk.com/'
const BASE_TITLE = 'Alberto de Murga ∙ threkk'
const BASE_DESCRIPTION =
  'Software engineer at Booking.com. I write about tech, mostly *nix, JS & Go. Also life stuff, learning languages and hobbies.'
const BASE_COVER = '/cover.png'

interface HeadProps {
  title?: string
  description?: string
  cover?: string
  canonical?: string
}

export default function PageHead(props?: HeadProps) {
  const { title, description, cover, canonical } = props
  const router = useRouter()

  const url = new URL(router.asPath, BASE_URL)

  return (
    <Head>
      <title>{props.title ?? BASE_TITLE}</title>

      <meta name='title' content={title ?? BASE_TITLE} />
      <meta name='description' content={description ?? BASE_DESCRIPTION} />
      <meta name='theme-color' content='#43846d' />

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

      <link rel='canonical' href={canonical ?? url.toString()} />
    </Head>
  )
}
