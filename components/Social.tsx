import Link from 'next/link'

export default function Social() {
  return (
    <>
      <ul style={{ listStyle: 'none', margin: 0 }}>
        <li>
          <Link href='mailto:alberto@threkk.com'>
            <a className='full u-email' title='email' rel='me' role='button'>
              <i className='fa-solid fa-envelope-square' /> Email
            </a>
          </Link>
        </li>

        <li>
          <Link href='http://twitter.com/threkk/'>
            <a className='full' title='twitter' rel='me' role='button'>
              <i className='fa-brands fa-twitter-square' /> Twitter
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://github.com/threkk/'>
            <a title='github' rel='me' role='button' className='full'>
              <i className='fa-brands fa-github-square' /> Github
            </a>
          </Link>
        </li>
        <li>
          <Link href='https://threkk.medium.com/'>
            <a className='full' title='medium' rel='me' role='button'>
              <i className='fa-brands fa-medium' /> Medium
            </a>
          </Link>
        </li>
      </ul>
    </>
  )
}
