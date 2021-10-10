import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html>
        <Head>
          <meta name='robots' content='index,follow,noodp' />
          <meta name='googlebot' content='index,follow' />

          { /* Favicon */ }
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />

          { /* Apple stuff */ }
          <meta name='mobile-web-app-capable' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />

          { /* Indiweb declarations */ }
          <link rel='me' href='https://twitter.com/threkk' />
          <link rel='me' href='mailto:alberto@threkk.com' />
          <link rel='me' href='https://github.com/threkk' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
