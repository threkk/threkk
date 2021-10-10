import Meta from '../components/Meta'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Avatar from '../components/Avatar'

import { useRouter } from 'next/router'

export default function Home () {
  const marginless = { margin: 0 }
  const icon = 'icon is-large has-text-primary'
  const router = useRouter()
  const classes = `hero is-fullheight ${router.query.light ? '' : 'is-dark'}`

  return (
    <>
      <Meta />
      <section className={classes}>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body h-card'>
          <div className='container is-flex-tablet is-flex-direction-row is-align-items-center'>
            <div className='content is-flex is-justify-content-center'>
              <Avatar />
            </div>
            <div>
              <div className='content'>
                <h1 className='title mt-4 has-text-primary is-family-serif'>
                  Hi, my name is <span className='p-given-name'>Alberto</span>
                </h1>
                <h2 className='subtitle has-text-primary is-family-serif'>
                  also known as{' '}
                  <span className='is-family-code p-nickname'>threkk</span>
                </h2>
              </div>
              <div className='content'>
                <p className='is-size-5'>
                  I am a{' '}
                  <span
                    style={{
                      textDecoration: 'line-through',
                      opacity: 0.6
                    }}
                  >
                    Internet Plumber
                  </span>{' '}
                  <span className='p-role'>Software Engineer</span>{' '}
                  based in <span className='p-city'>Amsterdam</span>,{' '}
                  <span className='p-country-name'>The Netherlands</span>.
                  Currently, I am working at{' '}
                  <Link href='https://booking.com/'>
                    <a className='p-org has-text-primary'>Booking.com</a>
                  </Link>{' '}
                  as <span className='p-job-title'>full stack developer</span>{' '}
                  on experimentation quality. I am also researching about dead
                  code in JavaScript as part of my{' '}
                  <abbr title='Master of Science'>MSc.</abbr> in Software
                  Engineering at the{' '}
                  <Link href='https://uva.nl/'>
                    <a className='has-text-primary'>University of Amsterdam</a>
                  </Link>
                  .
                </p>
                <ul
                  style={{
                    display: 'flex',
                    listStyle: 'none'
                  }}
                  className='is-justify-content-right is-align-content-center'
                >
                  <li style={marginless}>
                    <Link href='mailto:hi@threkk.com'>
                      <a className={`${icon} u-email`} title='email'>
                        <i className='fas fa-envelope-square fa-3x' />
                      </a>
                    </Link>
                  </li>

                  <li style={marginless}>
                    <Link href='http://twitter.com/threkk/'>
                      <a className={icon} title='twitter'>
                        <i className='fab fa-twitter-square fa-3x' />
                      </a>
                    </Link>
                  </li>
                  <li style={marginless}>
                    <Link href='https://github.com/threkk/'>
                      <a className={icon} title='github'>
                        <i className='fab fa-github-square fa-3x' />
                      </a>
                    </Link>
                  </li>
                  <li style={marginless}>
                    <Link href='https://threkk.medium.com/'>
                      <a className={icon} title='medium'>
                        <i className='fab fa-medium fa-3x'></i>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-foot'></div>
      </section>
    </>
  )
}
