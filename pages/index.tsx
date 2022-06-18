import Head from 'next/head'
import ActionLink from '../components/ActionLink'
// import LinkTo from '../components/LinkTo'
import Layout from '../components/layout'
// import EventbriteCard from '../components/EventbriteCard'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Catalytic Conversations - Digital Wellness Coaching</title>
        <meta name="description" content="Reconciling humanity and technology for remote professionals and hybrid workplaces through coaching, consulting, and training services." />
        <link rel="canonical" href="https://opheron.com" />
        <meta name="robots" content="index, follow" />
      </Head>

      <Layout>
        <main className={styles.home}>
          {/* <section className={styles.segment}>
            <EventbriteCard />
          </section> */}
          <section className={styles.double}>
            <div>
              <h4>How I Help Remote Professionals</h4>
              <p>
                Burnout, lack of connection, unstable work habits, exhaustion, increasing
                frustration with the work you used to love – all sapping your potential
                and undercutting your success. Tangibly.
              </p>
              <p>
                But while we may know what to do, actual implementation is not as easy as we wish.
              </p>
              <p>
                We aren’t designed to grow alone. Lasting transformation cannot be found apart
                from community. A coaching relationship is critical for significant growth.
              </p>
              <p>
                Transform your career and personal life through one-on-one coaching tailored to help
                you develop an actionable growth plan and support you every step along the way to
                Digital Mastery.
              </p>
              <p>
                This means conquering digital burnout, stabilizing productivity, overcoming
                overwhelm, improving authentic connection online, and more!
              </p>
            </div>
            <div>
              <h4>How I Help Hybrid Communities</h4>
              <p>
                Strong community is critical for success in any worthwhile endeavor. Humans are not
                designed to operate in isolation! But how do you engage a community that is split
                across both online and in-person environments?
              </p>
              <p>
                Relational efficiencies are sharply reduced in online environments, creating an
                imbalance of community connection. This means it’s harder to support the health
                of a hybrid community than a 100% online one! But it is possible with the right
                strategic awareness and culture-defining mastery.
              </p>
              <p>
                To this end, I provide interactive workshops, training presentations, and consulting
                to facilitate the growth of healthy and digitally integrated cultures in
                organizations. Drawing from a deep understanding of how society has thrived over
                millennia, I bring insights from mythic identity structures and monastic wisdom to
                bear on modern challenges.
              </p>
              <p>
                We <i>can</i> transcend the obstacles presented by online environments and connect
                authentically!
              </p>
            </div>
          </section>
          <section>
            <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/coaching-consultation-call">Book a no-fee strategy call now!</ActionLink>
          </section>
        </main>
      </Layout>
    </div>
  )
}
