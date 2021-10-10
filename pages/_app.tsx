import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
