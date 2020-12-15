import Head from '../components/Head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head />

      <section className='hero is-dark is-fullheight'>
        <div className='hero-head'>
          <Navbar />
        </div>
        <div className='hero-body'>
          <div className='container is-flex-tablet is-flex-direction-row is-align-items-center'>
            <div className='content is-flex is-justify-content-center'>
              <figure className='image is-128x128'>
                <img
                  className='is-rounded'
                  src='/avatar.png'
                  alt='My internet avatar'
                  title='This is also how my wife thinks I look'
                />
              </figure>
            </div>
            <div>
              <div className='content'>
                <h1 className='title mt-4'>Hi, my name is Alberto</h1>
                <h2 className='subtitle'>
                  also known as <span className='has-text-primary'>threkk</span>
                </h2>
              </div>
              <div className='content'>
                <p className='is-size-5'>
                  I am a Software Engineer from Spain based in Amsterdam, the
                  Netherlands. Currently, I am working at Booking.com as full
                  stack developer on experimentation quality. I am also
                  researching about dead code in JavaScript as part of my MSc.
                  in Software Engineering at the Univeristy of Amsterdam.
                </p>
                <p>
                  You can reach me via email on hi at this domain or on Twitter
                  at @threkk.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-foot'></div>
      </section>
    </>
  )
}
