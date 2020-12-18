import Link from 'next/link'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface NavLink {
  text: string
  href: string
  disabled?: boolean
}

const LINKS: NavLink[] = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Projects', href: 'https://github.com/threkk' },
  { text: 'Articles', href: 'https://medium.com/@threkk' },
  { text: 'Now', href: '/now' },
]

export default function Navbar() {
  const router = useRouter()
  const [isActive, setActive] = useState(false)
  const toggleActive = () => setActive(!isActive)

  const links = LINKS.map((page, idx) => (
    <>
      <Link key={page.text} href={page.href}>
        <a
          className={`navbar-item ${
            router.pathname === page.href ? 'is-active' : ''
          }`}
        >
          {page.text}
        </a>
      </Link>
    </>
  ))

  return (
    <>
      <nav
        className='navbar is-transparent'
        role='navigation'
        aria-label='main navigation'
      >
        <div className='container'>
          <a
            onClick={toggleActive}
            role='button'
            aria-label='menu'
            aria-expanded='false'
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className='navbar-end'>{links}</div>
        </div>
      </nav>
    </>
  )
}
