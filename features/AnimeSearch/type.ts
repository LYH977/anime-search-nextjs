export type AnimeSearchFullResultsProps = {
  pagination: {
    last_visible_page: number
    has_next_page: boolean
    current_page: number
    items: { count: number; total: number; per_page: number }
  }
  data: AnimeSearchSingleResultProps[]
}

export type AnimeSearchSingleResultProps = {
  [key: string]: any
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
  score: null | number
  rank: null | number
  popularity: null | number
  synopsis: null | number
  genres: {
    mal_id: number
    type: string
    name: string
    url: string
  }[]
}
