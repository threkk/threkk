import Image from 'next/image'
import avatarBW from '../public/avatar/avatar_bw.jpg'

export default function Avatar () {
  const width = 128
  const height = Math.ceil(width / (3 / 4))
  const image = <Image
        className='is-rounded u-photo'
        src={avatarBW}
        width={width}
        height={height}
        alt='Yup, that is me'
        />

  return (
      <figure className='image' style={{ width, height }}>
        {image}
      </figure>
  )
}
