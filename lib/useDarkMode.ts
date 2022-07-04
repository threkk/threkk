import { useEffect, useState } from 'react'

// Based on https://www.netlify.com/blog/2020/12/05/building-a-custom-react-media-query-hook-for-more-responsive-apps/
export function useDarkMode() {
  const [isDarkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    if (prefersDarkMode.matches !== isDarkMode) {
      setDarkMode(prefersDarkMode.matches)
    }

    const listener = () => {
      setDarkMode(prefersDarkMode.matches)
    }
    prefersDarkMode.addEventListener('change', listener)

    return () => prefersDarkMode.removeEventListener('change', listener)
  }, [isDarkMode])

  return isDarkMode
}
