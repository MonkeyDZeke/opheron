import Head from 'next/head'
import ActionLink from '../components/ActionLink'
// import LinkTo from '../components/LinkTo'
import Layout from '../components/layout'
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
            <div>
              <h5 className={styles.point}>
                <strong>Exhaustion:</strong> are you feeling overwhelmed,
                emotionally drained, like you can never get enough rest,
                trapped and out of control, burning at both ends,
                manically busy running after tasks that never
                end with never enough time to do them in?
              </h5>
              <h5 className={styles.point}>
                <strong>Alienation:</strong> are you feeling disengaged from
                your team and others around you, with increasing feelings of cynicism
                about people? Do you feel like you are always wearing masks around
                others, unable to really be seen and valued? Do you feel like people
                on your zoom screen are a million miles away?
              </h5>
              <h5 className={styles.point}>
                <strong>Inefficacy:</strong> are you struggling with imposter syndrome?
                Do you feel like you are always spinning your wheels without making progress
                or getting better? Do you feel a distinct lack of validation and appreciation
                from those around you that is making it hard to be motivated? Do you doubt your
                ability to develop true excellence at work?
              </h5>
              <h5>
                This is what I call the <strong>three-headed hydra of burnout</strong>.
                If you resonate with one or more of these you may be in burnout - or heading for it.
              </h5>
              <h5><i>Let me help!</i></h5>
              <h5>Because unfortunately, burnout is a <i>silent killer!</i></h5>
              <h5>Burnout:</h5>
              <ul>
                <li><h6>Destroys job satisfaction and quality of life</h6></li>
                <li><h6>Exacerbates addictive behaviors (like bad spending habits)</h6></li>
                <li><h6>Leads to depression and all the associated collapsing of health</h6></li>
                <li>
                  <h6>
                    <i>
                      Cripples creativity, lateral thinking, problem solving,
                      and collaborative ability
                    </i>
                  </h6>
                </li>
              </ul>
              <h5>
                Pause, and think about that. If you are in coding (like most of my clients),
                your ability to troubleshoot, innovate, and work with others are your bread and
                butter. This <i>directly</i> impacts your ability to get out of mid-level
                and into senior-level positions and earnings.
              </h5>
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
