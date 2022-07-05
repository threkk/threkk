import Avatar from '../components/Avatar'
import Markdown from '../components/Markdown'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import Social from '../components/Social'

export default function Home() {
  const content = `I am a ~~Internet Plumber~~ <span class='p-role'>Software Engineer</span>
based in <span class='p-locality'>Amsterdam</span>, <span class='p-country-name'>
The Netherlands</span>, where I work at [<span class='p-org'>
Booking.com</span>](https://booking.com) as <span class='p-job-title'>
full stack Software Engineer</span> on improving experimentation quality.

I [have a blog](https://threkk.medium.com) where I write about *nix, git, JavaScript and Go among others. 
In the past, I researched about [static analysis](https://github.com/threkk/prune.js) in JavaScript focusing on detecting dead code.

In my free time, I study Korean (<span lang='ko'>저는 초보자예요</span>), play more videogames that I should,
start more books than I finish, and paint less than I believe. From time to time I also 
[build things](https://github.com/threkk).`

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
              <h2>
                also known as{' '}
                <samp className='p-nickname'>
                  <strong>threkk</strong>
                </samp>
              </h2>
            </hgroup>
            <Markdown md={content} />
          </section>
        </div>
      </main>
    </div>
  )
}
