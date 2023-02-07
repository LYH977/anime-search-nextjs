import { useQuery } from '@tanstack/react-query'
import { fetchQueriedAnimes } from 'features/AnimeSearch/services'
import { AnimeFilterResultsProps } from 'features/AnimeSearch/types'

export const useAnimeList = (
  query: string,
  page: number,
  initialData: AnimeFilterResultsProps
) => {
  return useQuery({
    queryKey: ['animeList', query, page],
    queryFn: () => fetchQueriedAnimes(query, page),
    enabled: !!query,
    keepPreviousData: true,
    initialData: initialData.totalPages === 0 ? undefined : initialData,
  })
}
