import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="min-h-max max-w-screen">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
