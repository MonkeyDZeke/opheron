import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PayPalBtn from '../components/PayPalBtn'
import Layout from '../components/layout'
import styles from '../styles/contribute.module.scss'
import CurrencyInput from '../components/CurrencyInput'

export default function Contribute() {
  const [success, setSuccess] = useState(false)
  const [amount, setAmount] = useState("50")
  const onSuccess = () => setSuccess(true)

  return (
    <div className="container">
      <Head>
        <title>Contribute - Catalytic Conversations</title>
      </Head>

      <Layout page="contribute">
        <article className={styles.contribute}>
          <h3>Thank you for joining one of my <i>Pay-What-You-Want</i> Mastermind Groups!</h3>
          <p>
            I believe strongly in giving back to the community, so I initially
            offered my Mastermind groups on The 15 Invaluable Laws of Growth
            completely free. But people got so much value from their involvement,
            that I got multiple requests for a way to pay for them!
          </p>
          <p>
            Therefore, here is now an opportunity for you to contribute to me
            being able to continue offering these powerful Masterminds free of charge.
            If you're on this page, you've already successfully registered, so it's
            obviously not required to contribute anything. It's totally up to you.
          </p>
          <p className={styles.payment}>
            <label>Pay what you want:&nbsp;
              <CurrencyInput value={amount} onChange={({ target: { value }}) => setAmount(value)} />
            </label>
            {!success ? (
              <PayPalBtn
                amount={parseFloat(amount.replace(/[$,]*/g, ''))}
                currency={'USD'}
                onSuccess={onSuccess}
              />
            ) : (
              <p>Thank you! You successfully contributed ${amount}!</p>
            )}
          </p>
        </article>
      </Layout>
    </div>
  )
}
