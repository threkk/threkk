import Link from 'next/link'

export default function Social() {
  const icon = 'icon is-large has-text-primary'

  return (
    <>
      <ul
        style={{ listStyle: 'none', margin: 0 }}
        className='is-flex is-justify-content-right is-align-content-center'
      >
        <li className='mx-1 my-5'>
          <Link href='mailto:alberto@threkk.com'>
            <a className={`${icon} u-email`} title='email' rel='me'>
              <i className='fas fa-envelope-square fa-3x' />
            </a>
          </Link>
        </li>

        <li className='mx-1 my-5'>
          <Link href='http://twitter.com/threkk/'>
            <a className={icon} title='twitter' rel='me'>
              <i className='fab fa-twitter-square fa-3x' />
            </a>
          </Link>
        </li>
        <li className='mx-1 my-5'>
          <Link href='https://github.com/threkk/'>
            <a className={icon} title='github' rel='me'>
              <i className='fab fa-github-square fa-3x' />
            </a>
          </Link>
        </li>
        <li className='mx-1 my-5'>
          <Link href='https://threkk.medium.com/'>
            <a className={icon} title='medium' rel='me'>
              <i className='fab fa-medium fa-3x'></i>
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}
