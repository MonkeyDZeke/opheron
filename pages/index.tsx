import Head from 'next/head'
import ActionLink from '../components/ActionLink'
// import LinkTo from '../components/LinkTo'
import Layout from '../components/layout'
import WebinarCard from '../components/WebinarCard'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Catalytic Conversations</title>
      </Head>

      <Layout>
        <main className={styles.home}>
          <section className={styles.segment}>
            <WebinarCard />
          </section>
          <section className={styles.segment}>
            <div>
              <p>
                I help remote professionals advance their career and find holistic success through
                Digital Mastery.
              </p>
              <p>
                This means conquering digital burnout, stabilizing productivity, overcoming
                overwhelm, improving authentic connection online, and more!
              </p>
              <p>
                I provide coaching, consulting, speaking, and training services to individuals and
                organizations seeking excellence and confidence in online endeavors. Let me know
                what that looks like for you!
              </p>
            </div>
          </section>
          <section className={styles.bio}>
            <div><img src="/headshot.jpg" alt="Jaymes O'Pheron" /></div>
            <div>
              <p>Greetings friend, my name is Jaymes &ndash; Jaymes with a <i>why.</i> Iʼm here to
                help provide you precise clarity on why the change you crave in your life is not
                happening, and then <i>what you can do about it.</i>
              </p>
              <p>As a certified coach I draw from my experience as a successful remote web
                developer, Toastmaster, and addictions recovery facilitator to help you develop
                the underlying relational skills necessary for finding liberty from burnout and
                implementing radical growth. My specialty is in dealing with digital burnout,
                disengagement, and volatile productivity for remote professionals.
              </p>
              <p>We <i>can</i> transcend the obstacles presented by online environments and connect
                authentically!
              </p>
            </div>
          </section>
          <section>
            <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/coaching-consultation-call">Book a free strategy call now!</ActionLink>
          </section>
        </main>
      </Layout>
    </div>
  )
}
