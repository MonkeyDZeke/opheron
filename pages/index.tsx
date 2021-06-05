import Head from 'next/head'
import ActionLink from '../components/ActionLink'
import LinkTo from '../components/LinkTo'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Catalytic Conversations</title>
      </Head>

      <Layout>
        <article>
          <p><strong>Greetings friend, my name is Jaymes O’Pheron.</strong></p>

          <p>Yep, Jaymes with a <a href="https://www.dictionary.com/browse/wye" target="_blank" rel="external noreferrer">wye </a>
            &ndash; or as I like to say &ndash; Jaymes with a why. “Why” is one of my favorite
            questions, and I&apos;m an expert in asking questions.
          </p>

          <p>I started out as <a href="https://www.codementor.io/@jaymes-opheron" target="_blank" rel="external noreferrer">a freelance web developer </a>
            and I enjoyed the intellectual challenge, for sure. But as I gained experience,
            I found myself gravitating towards coaching other developers and helping them
            develop their skills more effectively. I particularly found satisfaction in
            leveraging my experience working 100% remotely and my communication expertise
            to help others make authentic connections online, even outside my industry.
          </p>

          <p>Similarly, in my obsession <span className="short">(my wife might say addiction)</span>{' '}
            with <LinkTo href="/faq#toastmasters">Toastmasters</LinkTo> I’ve found myself gaining more fulfillment and satisfaction
            from coaching other speakers than from doing speeches myself -- despite the fact that I{' '}
            <i>love</i> giving speeches. I also volunteer a great deal with and help lead addiction
            and recovery ministries, and then draw from that and my own experience with recovery
            to constantly help those around me.
          </p>

          <p>When I realized all these things, it clicked for me, and I discovered that while web
            development was <i>what I did</i>, <LinkTo href="/faq#coaching">coaching</LinkTo> is <i>who I am</i>. Now, I’m pivoting my
            focus from being a web developer to serving web developers and other remote
            professionals. There is a huge need right now with digital burnout on the rise and soft
            skills becoming not only a necessary edge in competitive markets but becoming
            increasingly critical for survival. Depression is not just lost productivity.
          </p>

          <p>So let me ask you a question.</p>

          <p>How are you doing? <i>Really</i> doing?{' '}
            <span className="short">(&lsquo;Fine&rsquo; doesn&apos;t count. In all my experience, I
              have never encountered someone who was purely, truly, just &lsquo;fine.&rsquo;)
            </span>
          </p>

          <p>Do you want to do better?</p>

          <p>Let’s talk about hope, solutions, and your future.</p>

          <p>I’m looking forward to hearing from you. :)</p>
          <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/coaching-consultation-call">Book a free strategy call now!</ActionLink>
        </article>
      </Layout>
    </div>
  )
}
