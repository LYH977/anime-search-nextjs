import '@/styles/globals.css'
import Navbar from 'layouts/Navbar'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Navbar />
    <Component { ...pageProps } />
  </>
}
