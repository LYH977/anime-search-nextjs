import '@/styles/globals.css'
import Navbar from 'layouts/Navbar'
import type { AppProps } from 'next/app'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'
import { DarkModeToggle } from 'layouts/DarkModeToggle'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={ queryClient }>
      <Test />
      <Component { ...pageProps } />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}


const Test = () => {
  const [isDarkMode, setisDarkMode] = useState(false)

  return (
    <>
      <DarkModeToggle isDarkMode={ isDarkMode } />
      <Navbar setisDarkMode={ setisDarkMode } />
    </>
  )
}