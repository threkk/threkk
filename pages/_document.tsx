import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name='robots' content='index,follow,noodp' />
          <meta name='googlebot' content='index,follow' />

          <link rel='shortcut icon' type='image/favicon' href='/favicon.ico' />
          <link rel='shortcut icon' type='image/png' href='/square.png' />
          <link rel='shortcut icon' type='image/favicon' href='/favicon.ico' />
          <link rel='favicon' href='/favicon.ico' />

          <link rel='apple-touch-icon' href='/square.png' />
          <meta name='mobile-web-app-capable' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='black' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
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
