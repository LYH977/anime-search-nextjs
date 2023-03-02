export const LANGUAGES = ['en', 'bm'] as const
export type LanguageType = typeof LANGUAGES[number]
LANGUAGES
export type MyLocale = {
  common: {
    back: string
  }
  home: {
    heading: string
    recommendation: string
    resultText: string
    searchingText: string
  }
  detail: {
    board: {
      score: string
      rank: string
      popularity: string
      episode: string
    }
    genre: {
      Action: string
      Adventure: string
      AvantGarde: string
      AwardWinning: string
      BoysLove: string
      Comedy: string
      Drama: string
      Fantasy: string
      GirlsLove: string
      Gourmet: string
      Horror: string
      Mystery: string
      Romance: string
      SciFi: string
      SliceofLife: string
      Sports: string
      Supernatural: string
      Suspense: string
    }
  }
}
