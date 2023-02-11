import { useQuery } from '@tanstack/react-query'
import { fetchQueriedAnimes } from 'features/AnimeSearch/services'
import { AnimeFilterResultsProps } from 'types'

export const useAnimeList = (
  query: string,
  page: number,
  serverProps: AnimeFilterResultsProps
) => {
  const { data: clientData, isFetching } = useQuery({
    queryKey: ['animeList', query, page],
    queryFn: () => fetchQueriedAnimes(query, page),
    enabled: !!query,
    keepPreviousData: true,
  })

  const myData = clientData ?? serverProps
  const animesLength = myData.animes.length
  const resultText = `${animesLength} result${
    animesLength > 1 ? 's' : ''
  } for "${query}"`
  const title = clientData ? resultText : 'Anime Recommendation'

  const hasPages = myData.totalPages > 0 && myData.animes.length > 0

  return {
    isFetching,
    title,
    myData,
    hasPages,
  }
}
