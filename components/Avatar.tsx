import Image from 'next/future/image'
import avatarBW from '../public/avatar/avatar_bw_original.jpg'

export default function Avatar() {
  const aspectRatio = {
    width: '75%',
    height: 'auto',
    aspectRatio: '3/4',
    margin: 'auto'
  }
  return (
    <ul>
      <li style={aspectRatio}>
        <Image
          className='u-photo'
          src={avatarBW}
          alt='Yup, that is me'
          placeholder='blur'
        />
      </li>
    </ul>
  )
}
