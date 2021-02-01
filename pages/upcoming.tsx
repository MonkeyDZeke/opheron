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
                <a href="https://opheron.leadingthebest.com/GMMW0001" target="_blank" rel="noreferrer">
                  The Guide to Mind Mapping
                </a>
              </dt>
              <dd>
                <p><i>Improve Your Understanding by Mind Mapping</i></p>
                <p>Do you have trouble sharing your thoughts in a way that others understand? Do
                  you long for a better way to organize projects and plan ahead? Are you looking
                  for a new way to collaboratively problem-solve?</p>
                <p>If so, mind mapping is a great technique for you to learn and perfect.</p>
                <p>Mind mapping is a tool that uses words, images, numbers, and colors to group
                  together natural associations, generate more ideas, and find deeper meaning.
                  Thanks to its intuitive design, you can generate ideas quicker, review
                  information faster, and explore creative pathways that would be less obvious
                  with lists, paragraphs of writing, or a drawn-out set of notes.</p>
                <p>If you’re ready to learn a new way of organizing your thoughts and ideas into
                  a visual graphic that you can share with others, you don’t want to miss out on
                  my webinar, The Guide to Mind Mapping, on Saturday, February 20th at 4:00 pm PST.</p>
                <p><a href="https://opheron.leadingthebest.com/GMMW0001" target="_blank" rel="noreferrer">Register here!</a></p>
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
                      <dd><strong>Next Start Date:</strong> February 5th 2021</dd>
                      <dd><strong>Time:</strong> Every Friday 8-9am PST</dd>
                      <dd><strong>Location:</strong> Online via Zoom</dd>
                      <dd><strong>Cost:</strong> Pay what you want!</dd>
                      <dd><strong>Duration:</strong> 8 weeks</dd>
                      <dd><strong>ONLY 10 SEATS AVAILABLE</strong></dd>
                      <dd><a href="https://opheron.leadingthebest.com/MLGW0002" target="_blank" rel="noreferrer">Register Here</a></dd>
                    </dl>
                    <dl>
                      <dt>Group Two</dt>
                      <dd><strong>Next Start Date:</strong> March 13th 2021</dd>
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
                      <dd><strong>Next Start Date:</strong> Early March 2021</dd>
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
                      <dd><strong>Next Start Date:</strong> February 23rd 2021</dd>
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
