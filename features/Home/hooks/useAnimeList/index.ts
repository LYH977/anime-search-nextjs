import ky from 'ky-universal'
import { useQuery } from '@tanstack/react-query'
import { JIKAN_DOMAIN } from 'utils/constant'

type AnimeListProps = {}

const fetchAnimeList = async (query: string, page: number) => {
  return await ky(`${JIKAN_DOMAIN}/anime?q=${query}&page=${page}`).json()
}

const useAnimeList = (query: string, page: number = 1) => {
  return useQuery({
    queryKey: ['animeList', page],
    queryFn: () => fetchAnimeList(query, page),
    enabled: !!query,
  })
}

export { useAnimeList, fetchAnimeList }
