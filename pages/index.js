import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

    <a
      href="javascript:void(
        window.open(
          'https://form.jotform.com/220953995402360',
          'blank',
          'scrollbars=yes,
          toolbar=no,
          width=700,
          height=500'
        )
      )
    ">
      Quiz form with a calculated number of correct answers
    </a>        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
      <Footer />
    </div>
  )
}
