import Head from 'next/head'

interface HeadProps {
  title: string
  description: string
  image: string
  url: string
}

export default function PageHead(props: HeadProps): JSX.Element {
  return (
    <Head>
      <title>{props.title}</title>
      <link rel='favicon' href='/favicon.ico' />

      <title>props.title</title>
      <meta name='title' content={props.title} />
      <meta name='description' content={props.description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content={props.url} />
      <meta property='og:title' content={props.title} />
      <meta property='og:description' content={props.description} />
      <meta property='og:image' content={props.image} />

      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={props.url} />
      <meta property='twitter:title' content={props.title} />
      <meta property='twitter:description' content={props.description} />
      <meta property='twitter:image' content={props.image} />

      <meta name='robots' content='index,follow,noodp' />
      <meta name='googlebot' content='index,follow' />

      <link rel='canonical' href={props.url} />

      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
    </Head>
  )
}
