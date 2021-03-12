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
                <a href="https://opheron.leadingthebest.com/BMIW0001" target="_blank" rel="noreferrer">
                  Being Mindful in the Midst of Chaos
                </a>
              </dt>
              <dd>
                <p><i>Being Mindful by Creating a Self-Care Plan</i></p>
                <p>Everyday-stress has become normalized for many of us, but when mild stresses turn
                  into chronic stress, our physical AND mental health suffers. I want to do my part to
                  help you gain a better understanding of the tools you have at your disposal to cope
                  with difficult situations that can create chaos in the mind. That’s why on Saturday,
                  March 20th at 4:00 pm PDT, I’ll be hosting a webinar called, Being Mindful in the Midst of Chaos.</p>
                <p>During our time together, I’ll be sharing the connection between mindfulness and self-care
                  while urging you to explore different factors, people, and situations that could be
                  causing you excessive and unnecessary stress. We’ll also be discussing ways that you
                  can revise and revive your physical space to enhance your mental state.</p>
                <p>From learning to protect yourself from toxic relationships to incorporating tips for
                  embracing the present moment, we’ll be covering a lot of ground -- but it’s a good
                  starting point to ensure that you cover all your bases when it comes to caring for
                  your mental wellbeing.</p>
                <p>Consider this webinar an opportunity to check in with the health of your relationships,
                  habits, and thought patterns. Whether you’re a complete novice when it comes to mindfulness,
                  or you’re well into your second or third gratitude journal, this webinar is good for anyone
                  and everyone who is looking to take better care of their mental health. You don’t want to miss
                  out on this webinar, Being Mindful in the Midst of Chaos, on Saturday, March 20th at 4:00 pm PST.</p>
                <p><a href="https://opheron.leadingthebest.com/BMIW0001" target="_blank" rel="noreferrer">Register here!</a></p>
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
                      <dd><strong>Next Start Date:</strong> March 20th 2021</dd>
                      <dd><strong>Time:</strong> Every Saturday 6-7pm PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> Pay what you want!</dd>
                      <dd><strong>Duration:</strong> 8 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/FINM0001" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                  </div>
                </details>
              </dd>
              <hr />
              <dt>Intentional Living</dt>
              <dd>
                <p>We’ll mastermind on Intentional Living by John Maxwell. In this 10-week, in-depth process,
                  you’ll join forces with a unique group of hand-selected, like-minded individuals
                  focused on radically transforming the way we live our lives, pursing excellence
                  and significance. With all my heart, I believe that <i>you</i> have it within your power
                  to make your life a great story, an epic story. Let's go on that journey together!</p>
                <details>
                  <summary>Group Details &amp; Options</summary>
                  <div className={styles.details}>
                    <dl>
                      <dd><strong>Next Start Date:</strong> March 4th 2021</dd>
                      <dd><strong>Time:</strong> Every Thursday 12-1pm PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> <s>$278</s> $194.60</dd>
                      <dd><strong>Duration:</strong> 10 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/CL0002" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                  </div>
                </details>
              </dd>
              <hr />
              <dt>Everyone Communicates, Few Connect</dt>
              <dd>
                <p>We’ll mastermind on Everyone Communicates Few Connect by John
                  Maxwell. In this 10-week, in-depth process, you’ll join forces with a unique
                  group of hand-selected, like-minded individuals focused on creating results
                  in every area of their lives. Having the support and ideas of other ambitious
                  people will allow you to gain a new perspective on leadership and adding value
                  to your connection with others.</p>
                <details>
                  <summary>Group Details &amp; Options</summary>
                  <div className={styles.details}>
                    <dl>
                      <dd><strong>Next Start Date:</strong> March 23rd 2021</dd>
                      <dd><strong>Time:</strong> Every Tuesday 8-9am PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> $278</dd>
                      <dd><strong>Duration:</strong> 10 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/ECCM0002" target="_blank" rel="noreferrer">Register Here</a></dd>
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
