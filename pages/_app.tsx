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

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={ queryClient }>
      <NextNProgress color='red' />
      <header className={ inter.className }>
        <ThemeWrapper />
      </header>
      <main className={ inter.className }>
        <Component { ...pageProps } />
      </main>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}


