import Avatar from '../components/Avatar'
import Markdown from '../components/Markdown'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

export default function Home() {
  const content = `I am a ~~Internet Plumber~~ <span class='p-role'>Software Engineer</span>
based in <span class='p-locality'>Amsterdam</span>, <span class='p-country-name'>
The Netherlands</span>. Currently, I am working at [<span class='p-org has-text-primary'>
Booking.com</span>](https://booking.com) as <span class='p-job-title'>
full stack developer</span> on experimentation quality.

I [write](https://threkk.medium.com) about *nix, JavaScript and Go among others. 
I also collaborate in open source projects like [asdf](https://asdf-vm.com).
In the past, I spent long time researching about static analysis in Javascript,
focusing on detecting dead code.

In my free time, I am an avid reader, games and e-sports aficionado and ok painter.
From time to time I also build [things](https://github.com/threkk).`

  return (
    <div className='h-card'>
      <Meta />
      <Navbar />
      <section className='container my-6'>
        <div className='columns is-centered is-tablet'>
          <section className='column is-one-quarter'>
            <div className='is-flex is-flex-direction-column is-align-items-center'>
              <div>
                <Avatar />
              </div>
              <div>
                <Social />
              </div>
            </div>
          </section>
          <section className='column mx-2'>
            <h1 className='title is-2 mt-4 has-text-primary is-family-serif'>
              Hi, my name is <span className='p-given-name'>Alberto</span>{' '}
              <span className='p-family-name'>de Murga</span>
            </h1>
            <h2 className='subtitle has-text-primary is-family-serif'>
              also known as{' '}
              <span className='is-family-code p-nickname'>threkk</span>
            </h2>
            <Markdown md={content} />
          </section>
        </div>
      </section>
    </div>
  )
}
