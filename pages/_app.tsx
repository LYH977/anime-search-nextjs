import type { AppProps } from 'next/app'
import { useState } from 'react'

import { ThemeWrapper } from 'layouts'
import '@/styles/globals.css'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import NextNProgress from 'nextjs-progressbar';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={ queryClient }>
      <NextNProgress color='red' />
      <ThemeWrapper />
      <Component { ...pageProps } />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}


