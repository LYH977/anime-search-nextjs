import { useQuery } from '@tanstack/react-query'
import { fetchQueriedAnimes } from 'features/AnimeSearch/services'
import { useMyI18n } from 'services/useMyI18n'
import type { AnimeFilterResultsProps } from 'types'

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
  const { t } = useMyI18n()

  const isCSR = clientData && clientData.timestamp > serverProps.timestamp

  const myData = isCSR ? clientData : serverProps
  const animesLength = myData.totalItems
  const enPostfix = animesLength > 1 ? 's' : ''

  const resultText = isFetching
    ? t('home.searchingText', { query })
    : t('home.resultText', { total: animesLength, postfix: enPostfix, query })

  const title = isCSR ? resultText : t('home.recommendation')

  const hasPages = myData.totalPages > 0 && myData.animes.length > 0

  return {
    isFetching,
    title,
    myData,
    hasPages,
  }
}
