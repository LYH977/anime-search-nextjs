import { useState } from 'react'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'

import { ThemeWrapper } from 'layouts'
import '@/styles/globals.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NextNProgress from 'nextjs-progressbar';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { I18nProvider } from "next-rosetta";

const inter = Inter({ subsets: ['latin'] })
const npOption = { showSpinner: false }

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={ queryClient }>
      <NextNProgress color='red' options={ npOption } />
      <I18nProvider table={ pageProps.table }>
        <header className={ inter.className }>
          <ThemeWrapper />
        </header>
        <main className={ inter.className }>
          <Component { ...pageProps } />
        </main>
        <a href='#' className={ `${inter.className} fixed right-8 bottom-8 rounded-full h-7 w-7 bg-white text-black shadow-lg shadow-black text-center text-lg scale-150` } aria-label='scroll to top'>↑</a>
      </I18nProvider>
      <ReactQueryDevtools />
    </QueryClientProvider >
  )
}


