import ky from 'ky-universal'
import { AnimeFilterResultsProps, AnimeFullResultsProps } from 'types'
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
    totalItems: result.pagination.items.total,
    timestamp: Date.now(),
    animes: result.data.map((anime) => ({
      imageUrl: anime.images.webp.large_image_url,
      mal_id: anime.mal_id,
      title: anime.title_english ?? anime.title,
    })),
  }
}
