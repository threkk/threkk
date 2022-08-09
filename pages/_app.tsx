import '../styles/icons.scss'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Markdown from '../layouts/Markdown'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
      </Head>
      <>
        <header>
          <Navbar />
        </header>
          <Markdown>
            <Component {...pageProps} />
          </Markdown>
        </>
    </>
  )
}

export default App
