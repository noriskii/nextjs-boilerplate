import { AppProps } from 'next/app'
import Head from 'next/head'

// import 'tailwindcss/tailwind.css'

import '../styles/tailwind.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS + TailwindCSS - Boilerplate</title>
        <link rel="shortcut icon" href="/img//favicon.ico" />
        <link rel="apple-touch-icon" href="/img/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and TailwindCSS"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
