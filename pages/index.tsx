import Head from 'next/head'
import { Inter } from '@next/font/google'
import results from '@/data/animeList.json'
import { AnimeCard } from 'features/Home/components'
import { useAnimeList } from 'features/Home/hooks'
import { useState } from 'react'
import { Pagination, SearchBar } from 'components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const animes = results.data
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const { data, isLoading, isFetching, isInitialLoading } = useAnimeList(query, page)

  const test = (a = 2) => a
  test()

  return (
    <>
      <Head>
        <title>Anime Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='mx-auto px-4 pb-4 center flex-col max-w-5xl'>

        <SearchBar placeholder="Search Animes..." />

        <div className='grid gap-8 py-4 mt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
          { animes.map(({ title, mal_id, images: { jpg: { large_image_url } } }) =>
          (
            <AnimeCard key={ mal_id } id={ mal_id } title={ title } imageUrl={ large_image_url } />
          )
          ) }
        </div>
        <Pagination currentPage={ page } totalPages={ 2 } setPage={ setPage } />
      </main>
    </>
  )
}
