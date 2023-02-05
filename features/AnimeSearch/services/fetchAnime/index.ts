import {
  AnimeFullResultsProps,
  AnimeRecommendationProps,
} from 'features/AnimeSearch/types'
import ky from 'ky-universal'
import { JIKAN_DOMAIN } from 'utils/constant'

export const fetchQueriedAnimes = async (
  query: string,
  page: number
): Promise<AnimeFullResultsProps> => {
  return await ky(`${JIKAN_DOMAIN}/anime?q=${query}&page=${page}`).json()
}

export const fetchRecomendedAnimes =
  async (): Promise<AnimeRecommendationProps> => {
    return await ky(`${JIKAN_DOMAIN}/recommendations/anime`).json()
  }
