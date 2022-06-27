import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../public/default-monochrome.svg'
import Image from 'next/image'

type Link = {
  text: string
  href: string
  disabled?: boolean
}

const LINKS: Link[] = [
  { text: 'About', href: '/' },
  { text: 'Projects', href: 'https://github.com/threkk/' },
  { text: 'Articles', href: 'https://threkk.medium.com/' },
  {
    text: 'Now',
    href: 'https://www.notion.so/threkk/Now-f120106f4eea4f6895589f061cb548ad',
  },
]

const ExternalLink = (
  <span className='icon is-small is-unselectable' style={{ opacity: 0.3 }}>
    <i className='fa-solid fa-fw fa-external-link-alt'></i>
  </span>
)

function isExternalLink(u: string): boolean {
  try {
    // eslint-disable-next-line no-new
    new URL(u)
    return true
  } catch {
    return false
  }
}

export default function Navbar() {
  const router = useRouter()
  const isSelected = (page: Link) => router.pathname === page.href

  const links = LINKS.map((page) => (
    <li key={page.href}>
      <Link key={page.text} href={page.href}>
        <a>
          {isSelected(page) ? <strong>{page.text}</strong> : page.text}
          {isExternalLink(page.href) ? ExternalLink : ''}
        </a>
      </Link>
    </li>
  ))

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='https://threkk.com'>
              <a>
                <Image
                  src={Logo}
                  alt="threkk.com's website logo"
                  layout='intrinsic'
                />
              </a>
            </Link>
          </li>
        </ul>
        <ul>{links}</ul>
      </nav>
    </>
  )
}
