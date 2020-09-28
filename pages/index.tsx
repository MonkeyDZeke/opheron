import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Catalytic Conversations</title>
      </Head>

      <main className={styles.main}>
        <h1><img src="/logo.png" alt="Catalytic Conversations" /></h1>
        <h2 className={styles.callout}>
          Coming Soon! Be very excited!
        </h2>
      </main>
    </div>
  )
}
