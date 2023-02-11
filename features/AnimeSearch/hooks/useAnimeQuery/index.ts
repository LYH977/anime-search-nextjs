import { useRouter } from 'next/router'
import React, { useState } from 'react'

export const useAnimeQuery = () => {
  const router = useRouter()
  const [query, setQuery] = useState(() => {
    const initialQuery = router.query.q
    if (Array.isArray(initialQuery)) {
      return initialQuery[0]
    }
    return initialQuery ?? ''
  })

  return {
    query,
    setQuery,
  }
}
