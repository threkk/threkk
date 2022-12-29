import Image from 'next/image'
import { useMobile } from '../lib/useMobile'
import avatarBW from '../public/avatar/avatar_bw_original.jpg'

export default function Avatar() {
  const isMobile = useMobile()
  const aspectRatio = {
    width: '75%',
    height: 'auto',
    aspectRatio: '3/4',
    margin: 'auto'
  }

  const sizes = isMobile ? '100vw' : '25vw'

  return (
    <ul>
      <li style={aspectRatio}>
        <Image
          className='u-photo'
          src={avatarBW}
          alt='Yup, that is me'
          placeholder='blur'
          priority={true}
          sizes={sizes}
        />
      </li>
    </ul>
  )
}
