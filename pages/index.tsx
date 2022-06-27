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
      <header>
        <Navbar />
      </header>
      <main className='container'>
        <div className='grid about'>
          <aside>
            <Avatar />
            <Social />
          </aside>
          <section>
            <hgroup>
            <h1>
              Hi, my name is <span className='p-given-name'>Alberto</span>{' '}
              <span className='p-family-name'>de Murga</span>
            </h1>
            <h2 className='subtitle has-text-primary'>
              also known as{' '}
              <span className='is-family-code p-nickname'>threkk</span>
            </h2>
            </hgroup>
            <Markdown md={content} />
          </section>
        </div>
      </main>
    </div>
  )
}
