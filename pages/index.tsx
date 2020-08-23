import Head from '../components/Head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head title='threkk.com' description='Hello world' url='/' image='' />
      <div className='bg-secondary'>
        <div className='container'>
          <div className='columns'>
            <div className='column col-mx-auto col-8 col-md-10 col-sm-12'>
              <main className='hero'>
                <div className='hero-body'>
                  <figure
                    className='avatar avatar-xl'
                    style={{ height: '6.4rem', width: '6.4rem' }}
                  >
                    <img src='/avatar.jpg' alt='My interenet avatar' />
                  </figure>
                  <h1>Hi, my name is Alberto</h1>
                  <mark>a.k.a threkk</mark>
                  <p className='py-1 text-large'>
                    I am a Software Engineer based in <strong>Amsterdam</strong>{' '}
                    focused on creating solutions mixing the right amount of
                    cutting edge innovations with solid stable technologies
                    focusing on maintainability and portability.
                  </p>
                  <p className='py-1'>On my free time...</p>
                </div>
                <div>
                  <span className='label label-rounded label-primary m-1'>
                    JavaScript
                  </span>
                  <span className='label label-rounded label-primary m-1'>
                    Python
                  </span>
                  <span className='label label-rounded label-primary m-1'>
                    Golang
                  </span>
                  <span className='label label-rounded label-primary m-1'>
                    AWS
                  </span>
                  <span className='label label-rounded label-primary m-1'>
                    Kubernetes
                  </span>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
