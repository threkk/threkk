import { useEffect, useState } from 'react'

// Based on https://www.netlify.com/blog/2020/12/05/building-a-custom-react-media-query-hook-for-more-responsive-apps/
export function useMobile() {
  const [isMobile, setMobile] = useState(true)

  useEffect(() => {
    const isSmallViewport = window.matchMedia('(max-width: 576px)')

    if (isSmallViewport.matches !== isMobile) {
      setMobile(isSmallViewport.matches)
    }

    const listener = () => {
      setMobile(isSmallViewport.matches)
    }
    isSmallViewport.addEventListener('change', listener)

    return () => isSmallViewport.removeEventListener('change', listener)
  }, [isMobile])

  return isMobile
}
