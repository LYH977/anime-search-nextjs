import Head from 'next/head'
import { useState } from 'react'

import { Pagination, SearchBar } from 'components'
import { AnimeCard } from 'features/AnimeSearch/components'
import { useAnimeList, useAnimeQuery } from 'features/AnimeSearch/hooks'
import { AnimeFilterResultsProps, AnimeFullResultsProps, AnimeRecommendationResponseProps } from 'types'


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
  const TOTAL_RECOMMENDATION_PAGE = 20
  const page = Math.floor(Math.random() * TOTAL_RECOMMENDATION_PAGE) + 1
  const response = await fetch(`https://api.jikan.moe/v4/recommendations/anime?page=${page}`)
  const animes: AnimeRecommendationResponseProps = await response.json()
  for (const temp of animes.data) {
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
  const [page, setPage] = useState(1)
  const { query, updateQuery } = useAnimeQuery(setPage)
  const { isFetching, title, myData, hasPages } = useAnimeList(query, page, serverProps)
  return (
    <>
      <Head>
        <title>NextAnime</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='mx-auto px-4 pb-4 center flex-col max-w-5xl bg-white'>
        <h1 className='font-bold text-lg my-4'>Search your next favourite anime here!</h1>
        <SearchBar placeholder="Search Animes..."
          onChange={ updateQuery } id='searchBar' defaultValue={ query } isLoading={ isFetching }
        />
        <p className='self-start mt-4 '>
          { title }
        </p>

        <div className='grid gap-8 py-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
          { myData.animes.map(({ title, mal_id, imageUrl }) =>
          (
            <AnimeCard key={ mal_id } id={ mal_id } title={ title } imageUrl={ imageUrl } />
          )
          ) }
        </div>

        { hasPages && <Pagination currentPage={ page } totalPages={ myData.totalPages } setPage={ setPage } /> }
      </div>
    </>
  )
}
