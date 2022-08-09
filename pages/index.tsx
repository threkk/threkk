import Avatar from '../components/Avatar'
import Meta from '../components/Meta'
import Social from '../components/Social'

// @ts-ignore
import Readme from '../README.md'

// This is a special case. Normally, we would like to put everything in MDX, but
// in this case we are reusing the README. The README has the standard header,
// but we want to use instead the custom one from picocs so we need to remove it.
//
const removeHeader = { h1: () => {}, blockquote: () => {} }

export default function Home() {
  return (
    <div className='h-card'>
      <Meta />
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
                  <>threkk</>
                </samp>
              </h2>
            </hgroup>
            <div className='p-note'>
              <Readme components={removeHeader} />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
