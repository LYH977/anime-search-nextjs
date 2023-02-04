import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { JIKAN_DOMAIN } from 'utils/constant'
import { AnimeSearchFullResultsProps } from 'features/AnimeSearch/type'

const fetchAnimeList = async (
  query: string,
  page: number
): Promise<AnimeSearchFullResultsProps> => {
  return await ky(`${JIKAN_DOMAIN}?q=${query}&page=${page}`).json()
}

const useAnimeList = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['animeList', query, page],
    queryFn: () => fetchAnimeList(query, page),
    enabled: !!query,
  })
}

export { useAnimeList, fetchAnimeList }
