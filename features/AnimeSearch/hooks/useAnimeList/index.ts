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

  const isCSR = clientData && clientData.timestamp > serverProps.timestamp

  const myData = isCSR ? clientData : serverProps
  const animesLength = myData.totalItems
  const postfix = animesLength > 1 ? 's' : ''

  const resultText = isFetching
    ? `Looking for "${query}"`
    : `${animesLength} result${postfix} for "${query}"`

  const title = isCSR ? resultText : 'Anime Recommendation'

  const hasPages = myData.totalPages > 0 && myData.animes.length > 0

  return {
    isFetching,
    title,
    myData,
    hasPages,
  }
}
