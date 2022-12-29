import Link from 'next/link'

export default function Social() {
  return (
    <>
      <ul style={{ listStyle: 'none', margin: 0 }}>
        <li>
          <Link href='mailto:alberto@threkk.com' className='full u-email' title='email' rel='me' role='button'>
              <i className='fa-solid fa-envelope-square' /> Email
          </Link>
        </li>

        <li>
          <Link href='http://twitter.com/threkk/' className='full' title='twitter' rel='me' role='button'>
              <i className='fa-brands fa-twitter-square' /> Twitter
          </Link>
        </li>
        <li>
          <Link href='https://github.com/threkk/' title='github' rel='me' role='button' className='full'>
              <i className='fa-brands fa-github-square' /> Github
          </Link>
        </li>
        <li>
          <Link href='https://threkk.medium.com/' className='full' title='medium' rel='me' role='button'>
              <i className='fa-brands fa-medium' /> Medium
          </Link>
        </li>
      </ul>
    </>
  )
}
