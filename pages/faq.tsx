import Head from 'next/head'
import Layout from '../components/layout'
import styles from '../styles/faq.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>FAQ - Catalytic Conversations</title>
      </Head>

      <Layout page="faq">
        <article>
          <p><strong>Questions are awesome, glad you're asking some!</strong></p>

        </article>
      </Layout>
    </div>
  )
}
