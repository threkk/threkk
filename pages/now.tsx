import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NOW_NOTION_URL =
  'https://www.notion.so/threkk/Now-f120106f4eea4f6895589f061cb548ad'

export default function Now () {
  const router = useRouter()

  useEffect(() => {
    router.push(NOW_NOTION_URL)
  })

  return <>Redirection...</>
}
