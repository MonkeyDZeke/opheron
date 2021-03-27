import Head from 'next/head'
import ActionLink from '../components/ActionLink'
import Layout from '../components/layout'
import styles from '../styles/coaching.module.scss'
import componentStyles from '../styles/components.module.scss'

export default function Coaching() {
  return (
    <div className="container">
      <Head>
        <title>Coaching - Catalytic Conversations</title>
      </Head>

      <Layout page="coaching">
        <article className={styles.coaching}>
          <p>
            In addiction recovery, one of the most critical components of success
            is developing a strong support network. One of the most vital individuals
            in that network is your sponsor. If you try to pull yourself out of
            out-of-control behaviors on your own without the aid of a sponsor to walk
            with you along that rugged journey, you are asking for failure.
          </p>
          <p>
            <span className={componentStyles.focus}>
              In my experience, and in all my studies, I have become convinced of a profound truth:
              <i> lasting transformation <strong>never</strong> happens apart from community.</i>
            </span>
          </p>
          <p>
            Not all of us are struggling with addictive behaviors. But all of us deeply yearn to
            be better, to be liberated from patterns of defeat and enjoy lives of purpose, impact,
            and productivity. We crave mastery.
          </p>
          <p>
            That craving for mastery is rarely isolated to only one area of our lives. Personally,
            I want to be more fit, and I also want to become a fluent polyglot. Developing my coding
            skills further is on my list, along with historical fencing, ballroom and swing dancing,
            and more. I am ravenously curious about Orthodox theology, behavioral psychology,
            political science, history, and countless other topics. Sometimes it feels like I’m
            standing at the shores of a galaxy of rivers, wondering where I should start drinking.
          </p>
          <p>
            But not all of those have the same priority in my life. I’m not going to invest hundreds
            of thousands of dollars and hire a full team of professional experts to engineer my
            health regimen to raise me to Olympic fitness levels. However, I <i>will</i> invest in
            some books on the subject, dedicate time and emotional commitment to the habit of daily
            exercise, and partner with someone to help keep me on track.
          </p>
          <p>
            Take a look at your life and your priorities. What levels of investment are you putting
            into each? Every aspect of growth requires some degree of mentorship and community in
            order to thrive, whether it’s simply reading books and taking notes, or joining an
            accountability group, or hiring a professional coach.
          </p>
          <p>
            In the area of your highest priority, if you are going to take the necessary steps to
            get you to where you want to be, you will need to find a person who can:
          </p>
          <ul>
            <li>Ask you questions you cannot ask of yourself, pushing you to think through your
              challenges and create solutions
            </li>
            <li>Help you cultivate lasting inspiration rather than impose motivation on you from
              outside like a cheerleader
            </li>
            <li>Co-craft your success plan with you, tailoring your goals and growth strategies to
              your unique circumstances, gifts, and challenges
            </li>
            <li>Invest dedicated time in debriefing problems and wins with you so that you can
              maximize your learning opportunities
            </li>
            <li>Provide a safe place for confidential venting of issues and concerns you
              encounter
            </li>
            <li>Express sincere, unlimited confidence in your capacity to grow and reach your
              purpose, vision, and goals when you are feeling down and limited
            </li>
          </ul>
          <p>
            If one of your areas of highest priority is becoming able to reliably connect and engage
            with others in any context -- both online and in person -- then I would be honored if
            you would consider me as a potential partner in your journey.
          </p>
          <p>
            <ActionLink target="_blank" rel="external" href="https://courses.opheron.com/maturity-mastery">Review the coaching programs I offer</ActionLink>
          </p>
          <p>
            <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/curiosity-call">Schedule a call with me so we can explore how I can serve you uniquely</ActionLink>
          </p>
        </article>
      </Layout>
    </div>
  )
}
