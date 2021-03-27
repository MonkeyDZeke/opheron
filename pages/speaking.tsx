import Head from 'next/head'
import Layout from '../components/layout'
import LinkTo from '../components/LinkTo'

export default function Speaking() {
  return (
    <div className="container">
      <Head>
        <title>Speaking - Catalytic Conversations</title>
      </Head>

      <Layout page="speaking">
        <article>
          <p>
            The modern world is still growing through the stages of becoming globally connected.
            Technology links us into a vast network of information -- information about history,
            information about science, information about world events, and information about other
            people. But despite how much information we have about each other, are we really more
            connected?
          </p>
          <p>
            Sadly, loneliness is on the rise. And with it, depression, lack of motivation,
            destructionof productivity, death of mental health,
            and more.
          </p>
          <p>
            Technology is often blamed. But technology is not the root of the problem.
          </p>
          <p>
            The problem is that we humans are by default lazy and immature connectors. Technology
            merely caters to and exposes that Achilles heel of our species. This means that if we
            approach online interactions with awareness and intentionality we can overcome the
            loneliness and toxicity associated with it. We <i>can</i> regain joyful productivity --
            online! We <i>can</i> construct healthy communities -- online!
          </p>
          <p>
            My passion as a remote engagement coach is to help liberate you from the internal
            roadblockswhich are crippling your capacity to connect authentically online. My
            presentations cover core humanhood skills that empower remote professionals and
            others finding themselves having to engage online to be able to grow beyond merely
            adequate communication and into artisans of connection. You can go beyond merely leaving
            behind childhood, and instead truly develop maturity mastery!
          </p>
          <p>
            Available presentation topics include:
            <ul>
              <li>The secret to applying personality insights online</li>
              <li>Toxic video conferencing and how to heal the problem</li>
              <li>Games, productivity, community, and the power of story</li>
              <li>Social media relationships and work culture</li>
            </ul>
          </p>
          <p>
            With each paid presentation I also include a special offer to attendees who opt-in: an
            exclusive opportunity to congregate together in small, intimate behind-the-stage
            discussiongroups with me after the event to engage with the material and discuss any
            personal questions or challenges they might have. It’s like a VIP backstage pass to
            mingle and dive deeper into the learning experience!
          </p>
          <p>
            &#10087;
            <i>
              <LinkTo target="_blank" rel="external" href="https://docs.google.com/forms/d/e/1FAIpQLSdgKGZpvUb05y5O2qCuZrwKM1_Webp0NMD7kTOytBzXQjQFUg/viewform?usp=sf_link">Inquire now </LinkTo>
              about having me present at your next online conference, seminar, or webinar!
            </i>
            &#9753;
          </p>
        </article>
      </Layout>
    </div>
  )
}
