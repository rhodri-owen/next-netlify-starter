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
<a data-quiz="QR524TJE3" data-type=4 href="https://www.quiz-maker.com/QR524TJE3">Loading...</a><script>(function(i,s,o,g,r,a,m){var ql=document.querySelectorAll('A[quiz],DIV[quiz],A[data-quiz],DIV[data-quiz]'); if(ql){if(ql.length){for(var k=0;k<ql.length;k++){ql[k].id='quiz-embed-'+k;ql[k].href="javascript:var i=document.getElementById('quiz-embed-"+k+"');try{qz.startQuiz(i)}catch(e){i.start=1;i.style.cursor='wait';i.style.opacity='0.5'};void(0);"}}};i['QP']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//cdn.poll-maker.com/quiz-embed-v1.js','qp');</script>
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
