import Image from 'next/future/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDarkMode } from '../lib/useDarkMode'
import LogoLight from '../public/default-monochrome-black.svg'
import LogoDark from '../public/default-monochrome-white.svg'

type MenuItem = {
  text: string
  href: string
  disabled?: boolean
}

const LINKS: MenuItem[] = [
  { text: 'About', href: '/' },
  { text: 'Projects', href: 'https://github.com/threkk/' },
  { text: 'Articles', href: 'https://threkk.medium.com/' },
  {
    text: 'Now',
    href: 'https://www.notion.so/threkk/Now-f120106f4eea4f6895589f061cb548ad',
  },
]

const ExternalLink = (
  <i
    className='fa-solid fa-external-link-alt'
    style={{ opacity: 0.3, userSelect: 'none', marginLeft: '0.3rem' }}
  ></i>
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
  const isDarkMode = useDarkMode()
  const isSelected = (page: MenuItem) => router.pathname === page.href

  const Logo = isDarkMode ? LogoDark : LogoLight

  const links = LINKS.map((page) => (
    <li key={page.href}>
      <Link key={page.text} href={page.href}>
        <a style={{ whiteSpace: 'nowrap' }}>
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
                  priority={true}
                  style={{
                    width: 'auto',
                    height: '2rem',
                  }}
                />
              </a>
            </Link>
          </li>
        </ul>
        <label htmlFor='menu' tabIndex={0}>
          <i className='fa-solid fa-2x fa-burger'></i>
        </label>
        <input id='menu' type='checkbox' />
        <ul>{links}</ul>
      </nav>
    </>
  )
}
