import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/upcoming.module.scss'

export default function Upcoming() {
  return (
    <div className="container">
      <Head>
        <title>Upcoming Events - Catalytic Conversations</title>
      </Head>

      <Layout page="upcoming">
        <>
          <section className={styles.calendar}>
            <h3>Check out all upcoming events</h3>
            <p>(Click <a href="https://calendar.google.com/calendar/embed?src=b28gmi2suf5i1jrfqp6qjeho0o%40group.calendar.google.com&ctz=America%2FLos_Angeles" target="_blank" rel="noreferrer">here</a> to open calendar.)</p>
            <iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=YjI4Z21pMnN1ZjVpMWpyZnFwNnFqZWhvMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23E4C441&amp;showCalendars=0" width="800" height="500" scrolling="no"></iframe>
          </section>
          <section className={styles.webinars} id="webinars">
            <h4>I present a new free webinar every 3rd Saturday of the month at 4pm PST</h4>
            <p>Upcoming webinars:</p>
            <dl>
              <dt>
                <a href="https://opheron.leadingthebest.com/WLGW0001" target="_blank" rel="noreferrer">
                  The 15 Invaluable Laws of Growth
                </a>
              </dt>
              <dd>
                <p>Learn from the book my "15 Invaluable Laws of Growth" Mastermind series is
                  based upon, and what to expect from it.</p>
                <p>How far you grow is truly up to you. Whether you’re interested in personal or
                  professional growth, learning the 15 Invaluable Laws of Growth will rapidly
                  accelerate growth in all aspects of your life.</p>
                <p>Anyone looking to answer their call to lead or add value to their life by
                  making a difference in the lives of others will know the name John C. Maxwell.
                  Maxwell has spent over 40 years inspiring positive life transformation and
                  helping others achieve their highest vision and goals, both personally and
                  professionally, through his philosophy that “Everything rises and falls on
                  leadership.”</p>
                <p>You may have realized by now that growth isn’t automatic. It takes work. You
                  must be an active participant in achieving your growth. If you’re ready to see
                  how far you can go, you must learn to embrace change and let go of that which is
                  holding you back.</p>
                <p>If you’re interested in learning more about the process of growth and the
                  techniques needed to unlock your full potential, <a href="https://opheron.leadingthebest.com/WLGW0001" target="_blank" rel="noreferrer">
                  join me for my webinar on The 15 Invaluable Laws of Growth</a>, on Saturday,
                  December 19th at 4:00 pm PST.</p>
              </dd>
              <dt>
                <a href="https://opheron.leadingthebest.com/UMCW0001" target="_blank" rel="noreferrer">
                  The Power of Understanding Personality
                </a>
              </dt>
              <dd>
                <p><i>Understanding personality unlocks connection opportunities and liberates relationships.</i></p>
                <p>People are complicated.</p>
                <p>That's pretty self-evident, yes? Every single person is completely unique, with
                  special gifts, strengths, weaknesses, and challenges. This is beautiful, but can
                  also make understanding each other difficult. Thankfully, a lot of the uniqueness
                  we have can be described in terms of preferences and behavior patterns that are
                  common to everyone. This makes understanding each other a lot more approachable
                  and practical. And that's good because, in order to connect authentically, we
                  need to understand what makes each other tick!</p>
                <p>There are a few simple personality preferences that determine the majority of
                  how we approach decision making, conflict management, and relating socially.
                  When you understand how the people around you prioritize these choices you can
                  start speaking their language and demonstrate how much you really value them.
                  And not only that -- you can also suddenly understand your own strengths and
                  weaknesses better so you can collaborate with others who complement your traits.</p>
                <p>I invite you to join me as I share some of the insights and tools I have
                  studied and which have served me well over the years. If you join me for this
                  free webinar you will discover:</p>
                <p>
                  <ul>
                    <li>Four types of people and how to recognize them</li>
                    <li>How to encourage their unique strengths and gifts</li>
                    <li>How to cope with the weaknesses they struggle over</li>
                    <li>How to support them and complement their traits</li>
                    <li>How to resolve conflicts with and between them</li>
                    <li>How the manifestation of their traits change online</li>
                  </ul>
                </p>
                <p>This will truly be a life-changing experience! Come ready to ask questions
                  on Saturday, January 16th at 4:00 pm PST!</p>
                <p><a href="https://opheron.leadingthebest.com/UMCW0001" target="_blank" rel="noreferrer">Register here!</a></p>
              </dd>
            </dl>
          </section>
          <section className={styles.mmgs} id="mmgs">
            <h4>Join a <a href="/faq#mastermind">Mastermind Group</a> to grow together
            with others of like mind</h4>
            <dl>
              <dt id="free_mmg">15 Invaluable Laws of Growth (FREE)</dt>
              <dd>
                <p>In this 8-week Mastermind, you’ll join forces with a unique group of
                  like-minded individuals focused on learning all about how to enhance their
                  trajectory toward a better tomorrow. We’ll mastermind on the book The 15
                  Invaluable Laws of Growth by John Maxwell. Set the intention now to make
                  the right decisions for tomorrow - and every day after that.</p>
                <details open>
                  <summary>Group Details &amp; Options</summary>
                  <div className={styles.details}>
                    <dl>
                      <dt>Group One</dt>
                      <dd><strong>Next Start Date:</strong> January 9th 2021</dd>
                      <dd><strong>Time:</strong> Every Saturday 6-7pm PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> FREE</dd>
                      <dd><strong>Duration:</strong> 8 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MLGW0001" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                    <dl>
                      <dt>Group Two</dt>
                      <dd><strong>Next Start Date:</strong> February 5th 2021</dd>
                      <dd><strong>Time:</strong> Every Friday 8-9am PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> FREE</dd>
                      <dd><strong>Duration:</strong> 8 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MLGW0002" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                  </div>
                </details>
              </dd>
              <hr />
              <dt>Everyone Communicates, Few Connect: Principles</dt>
              <dd>
                <p>We’ll mastermind on part one of Everyone Communicates Few Connect by John
                  Maxwell, covering the 5 Connecting Principles. In this 5-week, in-depth process,
                  you’ll join forces with a unique group of hand-selected, like-minded individuals
                  focused on creating results in every area of their lives. Having the support and
                  ideas of other ambitious people will allow you to gain a new perspective on
                  leadership and adding value to your connection with others.</p>
                <details>
                  <summary>Group Details &amp; Options</summary>
                  <div className={styles.details}>
                    <dl>
                      <dt>Group One</dt>
                      <dd><strong>Next Start Date:</strong> December 1st 2020</dd>
                      <dd><strong>Time:</strong> Every Tuesday 8-9am PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> <s>$139</s> $97.30</dd>
                      <dd><strong>Duration:</strong> 5 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MECF0001" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                    <dl>
                      <dt>Group Two</dt>
                      <dd><strong>Next Start Date:</strong> December 3rd 2020</dd>
                      <dd><strong>Time:</strong> Every Thursday 12-1pm PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong>  <s>$139</s> $97.30</dd>
                      <dd><strong>Duration:</strong> 5 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MECF0002" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                  </div>
                </details>
              </dd>
              <hr />
              <dt>Everyone Communicates, Few Connect: Practices</dt>
              <dd>
                <p>We’ll mastermind on part two of Everyone Communicates Few Connect by John
                  Maxwell, covering the 5 Connecting Practices. In this 5-week, in-depth process,
                  you’ll join forces with a unique group of hand-selected, like-minded individuals
                  focused on creating results in every area of their lives. Having the support and
                  ideas of other ambitious people will allow you to gain a new perspective on
                  leadership and adding value to your connection with others.</p>
                <details>
                  <summary>Group Details &amp; Options</summary>
                  <div className={styles.details}>
                    <dl>
                      <dt>Group One</dt>
                      <dd><strong>Next Start Date:</strong> January 12th 2021</dd>
                      <dd><strong>Time:</strong> Every Tuesday 8-9am PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> <s>$139</s> $97.30</dd>
                      <dd><strong>Duration:</strong> 5 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MECF0003" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                    <dl>
                      <dt>Group Two</dt>
                      <dd><strong>Next Start Date:</strong> January 14th 2021</dd>
                      <dd><strong>Time:</strong> Every Thursday 12-1pm PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong>  <s>$139</s> $97.30</dd>
                      <dd><strong>Duration:</strong> 5 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MECF0004" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                  </div>
                </details>
              </dd>
            </dl>
          </section>
        </>
      </Layout>
    </div>
  )
}
