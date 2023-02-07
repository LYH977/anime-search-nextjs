import {
  AnimeFilterResultsProps,
  AnimeFullResultsProps,
  AnimeRecommendationResponseProps,
} from 'features/AnimeSearch/types'
import ky from 'ky-universal'
import { JIKAN_DOMAIN } from 'utils/constant'

export const fetchQueriedAnimes = async (
  query: string,
  page: number
): Promise<AnimeFilterResultsProps> => {
  const result: AnimeFullResultsProps = await ky(
    `${JIKAN_DOMAIN}/anime?q=${query}&page=${page}`
  ).json()
  return {
    totalPages: result.pagination.last_visible_page,
    animes: result.data.map((anime) => ({
      imageUrl: anime.images.jpg.large_image_url,
      mal_id: anime.mal_id,
      title: anime.title_english ?? anime.title,
    })),
  }
}

export const fetchRecomendedAnimes =
  async (): Promise<AnimeRecommendationResponseProps> => {
    return await ky(`${JIKAN_DOMAIN}/recommendations/anime`).json()
  }