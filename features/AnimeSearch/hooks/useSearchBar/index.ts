import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export const useSearchBar = () => {
  const router = useRouter()
  const currentRoute = router.asPath
  const searchBarRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    if (currentRoute === '/' && searchBarRef.current) {
      searchBarRef.current.value = ''
    }
  }, [currentRoute])

  return { searchBarRef }
}
