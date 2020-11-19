import { useState } from 'react'
import { getPages, File, LOCALE } from '../lib/files'
import Link from 'next/link'

export interface NavbarProps {
  pages: File[]
  active: string
  locale?: LOCALE
}

export default function Navbar(props: NavbarProps) {
  const [isActive, setActive] = useState(false)
  const toggleActive = () => setActive(!isActive)

  const pages = props.pages.map((page) => {
    return (
      <>
        <Link key={page.slug} href={`/${page.slug}`}>
          <a
            className={`navbar-item ${
              props.active === page.slug ? 'is-active' : ''
            }`}
          >
            {page.title}
          </a>
        </Link>
      </>
    )
  })

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
          <div className='navbar-end'>{pages}</div>
        </div>
      </nav>
    </>
  )
}
