type PaginationProps = {
  last_visible_page: number
  has_next_page: boolean
  current_page: number
  items: { count: number; total: number; per_page: number }
}
export type AnimeFullResultsProps = {
  pagination: PaginationProps
  data: AnimeSingleResultProps[]
}

export type AnimeSingleResultProps = {
  mal_id: number
  url: string
  images: {
    jpg: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
    webp: {
      image_url: string
      small_image_url: string
      large_image_url: string
    }
  }
  title: string
  title_english: string
  score: null | number
  rank: null | number
  popularity: null | number
  synopsis: null | string
  episodes: null | number
  genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}

export type AnimeItemProps = {
  mal_id: number
  title: string
  imageUrl: string
}

export type AnimeFilterResultsProps = {
  totalPages: number
  animes: AnimeItemProps[]
}

export type AnimeRecommendationResponseProps = {
  pagination: Pick<PaginationProps, 'last_visible_page' | 'has_next_page'>
  data: {
    entry: AnimeRecommendationSingleResultProps[]
  }[]
}
export type AnimeRecommendationSingleResultProps = Pick<
  AnimeSingleResultProps,
  'mal_id' | 'images' | 'title' | 'url'
>
