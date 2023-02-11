import { useRouter } from 'next/router'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

export const useAnimeQuery = (setPage: Dispatch<SetStateAction<number>>) => {
  const router = useRouter()
  const [query, setQuery] = useState(() => {
    const initialQuery = router.query.q
    if (Array.isArray(initialQuery)) {
      return initialQuery[0]
    }
    return initialQuery ?? ''
  })

  const debounced = useDebouncedCallback((value) => {
    if (value) {
      setQuery(value)
      setPage(1)
      router.push(`/?q=${value}`, undefined, { shallow: true })
    }
  }, 500)
  const updateQuery = (e: ChangeEvent<HTMLInputElement>) => {
    debounced(e.target.value)
  }

  return { query, updateQuery }
}
