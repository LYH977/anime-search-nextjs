import Head from 'next/head'
import { Inter } from '@next/font/google'
import { AnimeCard } from 'features/AnimeSearch/components'
import { useAnimeList } from 'features/AnimeSearch/hooks'
import { ChangeEvent, useRef, useState } from 'react'
import { Pagination, SearchBar } from 'components'
import { useDebouncedCallback } from 'use-debounce';
import { AnimeFilterResultsProps, AnimeFullResultsProps, AnimeRecommendationResponseProps, } from 'features/AnimeSearch/types'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps({ resolvedUrl }: any) {

  const queryParam = resolvedUrl.match(/q=[^&]*(&|$)/)
  if (queryParam) {
    const query = queryParam[0].slice(2).replace('&', '')
    const queryResponse = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&page=1`)
    const queryResult: AnimeFullResultsProps = await queryResponse.json()
    return {
      props: {
        totalPages: queryResult.pagination.last_visible_page,
        animes: queryResult.data.map((anime) => ({
          imageUrl: anime.images.jpg.large_image_url,
          mal_id: anime.mal_id,
          title: anime.title_english ?? anime.title,
        })),
      }
    }


  }
  const data: any = []
  const uniqueMap: { [key: string]: any } = {}

  const response = await fetch('https://api.jikan.moe/v4/recommendations/anime')
  const animes: AnimeRecommendationResponseProps = await response.json()
  for (const temp of animes.data.slice(0, 10)) {
    temp.entry.forEach(({ mal_id, title, images: { jpg: { large_image_url } } }) => {
      if (!uniqueMap[mal_id]) {
        uniqueMap[mal_id] = true
        data.push({
          mal_id,
          title,
          imageUrl: large_image_url
        })
      }
    })

  }
  return {
    props: {
      animes: data,
      totalPages: 0
    }
  }



}


export default function Home(serverProps: AnimeFilterResultsProps) {
  const router = useRouter()
  const initiateData = useRef(serverProps.totalPages === 0 ? undefined : serverProps)
  const [query, setQuery] = useState(() => {
    const initialQuery = router.query.q
    if (Array.isArray(initialQuery)) {
      return initialQuery[0]
    }
    return initialQuery ?? ''
  })
  const [page, setPage] = useState(1)
  const { data: clientData, isLoading, isFetching } = useAnimeList(query, page, initiateData.current)
  const myData = clientData ?? serverProps
  const animesLength = myData.animes.length
  const resultText = `${animesLength} result${animesLength > 1 ? 's' : ''} for "${query}"`
  const heading = clientData ? resultText : 'Anime Recommendation'

  // console.log({ clientData, serverProps, data: myData })

  const debounced = useDebouncedCallback(value => {
    if (value) {
      setQuery(value)
      setPage(1)
      router.push(`/?q=${value}`, undefined, { shallow: true })
    }

  }, 500)
  const updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
    debounced(e.target.value)
  }


  return (
    <>
      <Head>
        <title>NextAnime</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='mx-auto px-4 pb-4 center flex-col max-w-5xl'>
        <h1 className='font-bold my-4 text-lg'>Search your next favourite anime here!</h1>
        <SearchBar placeholder="Search Animes..."
          onChange={ updateQuery } id='searchBar' defaultValue={ query } isLoading={ isFetching }
        />

        <p className='self-start mt-4 '>
          { heading }
        </p>

        <div className='grid gap-8 py-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
          { myData.animes.map(({ title, mal_id, imageUrl }) =>
          (
            <AnimeCard key={ mal_id } id={ mal_id } title={ title } imageUrl={ imageUrl } />
          )
          ) }
        </div>

        { myData.totalPages > 0 && myData.animes.length > 0 && <Pagination currentPage={ page } totalPages={ myData.totalPages } setPage={ setPage } /> }
      </main>
    </>
  )
}
