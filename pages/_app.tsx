import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { Primary } from 'layouts/Primary'

import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={ queryClient }>
      <NextNProgress color='red' />
      <Primary />
      <Component { ...pageProps } />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}


