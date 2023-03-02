import { useEffect, useState } from 'react'
import { I18nProps } from "next-rosetta";
import type { GetServerSideProps } from "next";
import { LanguageType, MyLocale } from 'i18n'
import { useRouter } from 'next/router'

import { Pagination, SearchBar } from 'components'
import { AnimeCard } from 'features/AnimeSearch/components'
import { useAnimeList, useAnimeQuery, useSearchBar } from 'features/AnimeSearch/hooks'
import { AnimeFilterResultsProps, AnimeFullResultsProps, AnimeRecommendationResponseProps } from 'types'
import { DefaultHeader } from 'metadata/DefaultHeader'
import { useMyI18n } from 'services/useMyI18n'

type HomeProps = {
  results: AnimeFilterResultsProps
  initialLocale: LanguageType
} & I18nProps<MyLocale>;


export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ resolvedUrl, locale, defaultLocale }) => {
  const initialLocale = (locale || defaultLocale || 'en') as LanguageType
  const { table = {} } = await import(`../i18n/${initialLocale}`);

  const queryParam = resolvedUrl.match(/q=[^&]*(&|$)/)
  if (queryParam) {
    const query = queryParam[0].slice(2).replace('&', '')
    const queryResponse = await fetch(`https://api.jikan.moe/v4/anime?q=${query}&page=1`)
    const queryResult: AnimeFullResultsProps = await queryResponse.json()
    return {
      props: {
        results: {
          totalPages: queryResult.pagination.last_visible_page,
          totalItems: queryResult.pagination.items.total,
          animes: queryResult.data.map((anime) => ({
            imageUrl: anime.images.webp.image_url,
            mal_id: anime.mal_id,
            title: anime.title_english ?? anime.title,
          })),
          timestamp: Date.now()
        },
        table,
        initialLocale
      }
    }


  }
  const data: any = []
  const uniqueMap: { [key: string]: any } = {}
  const TOTAL_RECOMMENDATION_PAGE = 20
  const page = Math.floor(Math.random() * TOTAL_RECOMMENDATION_PAGE) + 1
  const response = await fetch(`https://api.jikan.moe/v4/recommendations/anime?page=${page}`)
  const animes: AnimeRecommendationResponseProps = await response.json()
  const totalRecommendation = animes.data.length

  const selectedIndexes = [];
  while (selectedIndexes.length < 10 && totalRecommendation > selectedIndexes.length) {
    var r = Math.floor(Math.random() * totalRecommendation);
    if (selectedIndexes.indexOf(r) === -1) selectedIndexes.push(r);
  }

  for (const index of selectedIndexes) {
    animes.data[index].entry.forEach(({ mal_id, title, images }) => {
      if (!uniqueMap[mal_id]) {
        uniqueMap[mal_id] = true
        data.push({
          mal_id,
          title,
          imageUrl: {
            jpg: images.jpg.image_url,
            webp: images.webp.image_url
          }
        })
      }
    })
  }


  return {
    props: {
      results: {
        animes: data,
        totalPages: 0,
        totalItems: 0,
        timestamp: Date.now()
      },
      table,
      initialLocale
    }
  }

}

export default function Home(serverProps: HomeProps) {
  const { locale } = useRouter()
  const [counter, setCounter] = useState(1)
  const [page, setPage] = useState(1)
  const { searchBarRef } = useSearchBar()
  const { query, updateQuery } = useAnimeQuery(setPage)
  const { isFetching, title, myData, hasPages } = useAnimeList(query, page, serverProps.results)
  const i18n = useMyI18n();
  const { t } = i18n;

  useEffect(() => {
    if (locale && locale !== serverProps.initialLocale) {
      import(`../i18n/${locale}`).then((e) => {
        i18n.set(locale, e.table)
        i18n.locale(locale)
        setCounter(counter + 1)
      })
    }
  }, [locale])

  return (
    <>
      <DefaultHeader title='NextAnime' />
      <div className='mx-auto px-4 pb-4 center flex-col max-w-5xl bg-white'>
        <h1 className='font-bold text-lg my-4'>{ t('home.heading') }</h1>
        <SearchBar placeholder="Search Animes..."
          onChange={ updateQuery } id='searchBar' defaultValue={ query } isLoading={ isFetching } ref={ searchBarRef }
        />
        <p className='self-start mt-4 '>
          { title }
        </p>

        <div className='grid gap-8 py-4 mb-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' >
          { myData.animes.map(({ title, mal_id, imageUrl }, index) =>
          (
            <AnimeCard key={ mal_id } mal_id={ mal_id } title={ title } imageUrl={ imageUrl } loading={ index < 2 ? 'eager' : 'lazy' } />
          )
          ) }
        </div>

        { hasPages && <Pagination currentPage={ page } totalPages={ myData.totalPages } setPage={ setPage } /> }
      </div>
    </>
  )
}
