import Head from 'next/head'
import Layout from '../components/layout'
import ActionLink from '../components/ActionLink'
import styles from '../styles/connect.module.scss'

export default function Contribute() {
  return (
    <div className="container">
      <Head>
        <title>Connect - Catalytic Conversations</title>
      </Head>

      <Layout page="contribute">
        <article className={styles.connect}>
          <h3>Great to meet you!</h3>
          <p>
            I give out this page url to people Iʼve met in person who I want to make sure to
            reconnect with -- both in person and online. I hope you feel the same!
          </p>
          <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/deep-talk">Schedule a phone or Zoom call, whichever</ActionLink>
          <ActionLink target="_blank" rel="external" href="https://calendly.com/jaymes-opheron/tea-or-coffee">Or better yet, a tea/coffee meetup!</ActionLink>
          <p>But also make sure to...</p>
          <ActionLink target="_blank" rel="external" href="https://www.facebook.com/jaymes.opheron">Link up on Facebook</ActionLink>
          <p>And of course</p>
          <ActionLink target="_blank" rel="external" href="https://www.linkedin.com/in/jaymesopheron/">Connect on LinkedIn</ActionLink>
        </article>
      </Layout>
    </div>
  )
}
